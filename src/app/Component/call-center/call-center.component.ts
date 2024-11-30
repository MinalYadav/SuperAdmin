import { Component, OnInit } from '@angular/core';
import { CallCenter } from '../../Models/callCenter.model';
import { CallCenteService } from '../../services/callCenter/call-cente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CallForm } from '../../Models/callForm.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-call-center',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,],
  templateUrl: './call-center.component.html',
  styleUrl: './call-center.component.css'
})
export class CallCenterComponent implements OnInit {

  callData: CallCenter [] = [];
  currId : number = 0; 
  isblock: string = "";

  constructor(
    private router: Router,
    private callService: CallCenteService,
    private modal:NgbModal,
    
  ){}

  // get all call center data 
  ngOnInit(): void {
    this.callService.getAllCallCenterData()
    .subscribe({
      next:(res)=>{
        this.callData = res.data;
      },
      error:(err)=>{
        console.error('Error:', err);
      }
    })
  }

  // create form 
  formData = new FormGroup({
    name: new FormControl('',[Validators.required]),
    uniqueId: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    gender: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    shift: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
  })


  // on Form submit 
  onSubmit(){
    if(this.formData.invalid){
      alert('Form Invalid');
      return;
    }
    // console.log('onSubmit');
    // console.log(this.formData.value);
    let data =  this.formData.value as unknown as CallForm;

    // calling api
    this.callService.addCallCenter(data)
    .subscribe({
      next:(res)=>{
        console.log('Success:', res);
        this.formData.reset();
        this.modal.dismissAll();
        this.ngOnInit();
      },
      error:(err)=>{
        console.error('Error:', err);
      }
    })


  }

  // blockStatus
  blockStatus(){
    console.log('blockStatus', this.currId);
    console.log('blockStatus', this.isblock)
    let status = "";
    if(this.isblock=='active'){
        status ="block";
    }else{
       status ="active";
    }

    this.callService.blockStatusOfEmp(this.currId, status)
    .subscribe({
      next:(res)=>{
        console.log('Success:', res);
        this.ngOnInit();
        this.modal.dismissAll();
        // alert(res.message);
      },
      error:(err)=>{
        console.error('Error:', err);
      }
    })
  }



  // using ngb modal
  onClick(content:any , id?:number, status?:string){
    this.modal.open(content,{
      ariaLabelledBy:'modal-dialog',
      centered:true,
      backdrop:'static',
      keyboard:false,
    })

    if(id && status){
      this.currId= id;
      this.isblock = status;
    }
    

  }

  // get form data 

  get Name(){
    return this.formData.get('name');
  }
  get UniqueId(){
    return this.formData.get('uniqueId');
  }
  get Mobile(){
    return this.formData.get('mobile');
  }
  get Gender(){
    return this.formData.get('gender');
  }
  get Address(){
    return this.formData.get('address');
  }
  get Shift(){
    return this.formData.get('shift');
  }
  get Email(){
    return this.formData.get('email');
  }

  // open call center employee Profile
  redirect(id: number) {
    this.router.navigateByUrl(`layout/callEmpProfile/${id}`);
  } 

  


}
