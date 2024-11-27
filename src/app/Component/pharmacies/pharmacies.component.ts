import { Component, OnInit } from '@angular/core';
import { Pharmacies } from '../../Models/pharmacies.model';
import { PharmaForm } from '../../Models/pharmaForm.model';
import { GetPharmaciesService } from '../../services/pharmacies/get-pharmacies.service';
import { ModalService } from '../../_services/model_service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pharmacies',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './pharmacies.component.html',
  styleUrl: './pharmacies.component.css',
})
export class PharmaciesComponent implements OnInit {
  constructor(
    private pharma: GetPharmaciesService,
    private modalService: ModalService,
    private modal: NgbModal
  ) {}

  // all pharma list
  pharmaData: Pharmacies[] = [];
  data: PharmaForm = {
    name: '',
    registeration_number: '',
    owner_name: '',
    phone: '',
    address: '',
    pharmaType: '',
    email: '',
    hospitalId: '',
    start_time: '',
    close_time: '',
  };

  // curr operation
  currOperation = '';
  currId = '';

  // Validators.pattern('[0-9]{10}')

  // form to add and update
  formData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    registeration_number: new FormControl('', [Validators.required]),
    owner_name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    start_time: new FormControl('', [Validators.required]),
    close_time: new FormControl('', [Validators.required]),
    hospitalId: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    pharmaType: new FormControl('', [Validators.required]),
  });

  // show all pharma list
  ngOnInit(): void {
    this.pharma.getPharmacies().subscribe({
      next: (res) => {
        console.log(res);
        // this.allPharmacies = res.data;
        this.pharmaData = res.data;
        console.log(this.pharmaData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // ngb Model to add and update modal
  onClick(currdata:Pharmacies|null ,modelType: string, content: any) {
    console.log('modelType', modelType);
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-title',
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });

    this.currOperation = modelType;
    // set form data for update
    if(modelType == 'updatePharma' && currdata !== null ){
      console.log("current data",currdata);
      this.currId = currdata.id;
      this.formData.patchValue({'name': currdata.name,
        'address': currdata.Address,
        'owner_name': currdata.owner_name,
        'phone': currdata.phone,
        'email': currdata.email,
        'hospitalId': currdata.hospitalId.toString(),
        'registeration_number': currdata.registeration_number,
        'start_time': currdata.start_time,
        'close_time': currdata.close_time,
      });
    }else{
      this.formData.reset();
    }
  }

  onSubmit() {
    if (this.formData.invalid) {
      console.log('form invalid');
      return;
    }

    //  curr operation is add
    if (this.currOperation == 'addPharma') {
      this.data = this.formData.value as unknown as PharmaForm;
      this.pharma.addPharmacies(this.data).subscribe({
        next: (res) => {
          console.log(res);
          this.formData.reset();
          // calling ngOnInit again
          this.ngOnInit();
          this.modal.dismissAll();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    //  curr operation is update
    if (this.currOperation == 'updatePharma') {
      console.log('updating....');
      // type conversion of form data
      this.data = this.formData.value as unknown as PharmaForm;
      this.pharma.updatePharmacies(this.currId, this.data)
      .subscribe({
        next:(res)=>{
          console.log(res.message);
          alert(res.message);
          this.formData.reset();
          // calling ngOnInit again
          this.ngOnInit();
        },
        error:(err)=>{
          console.log(err);
        }
      })

      // function of ngbModel help us to close the pop up when user click on submit button 
      this.modal.dismissAll();
    }
  }

  // get form data
  get Name() {
    return this.formData.get('name');
  }

  get Registeration_number() {
    return this.formData.get('registeration_number');
  }

  get Owner_name() {
    return this.formData.get('owner_name');
  }
  get Phone() {
    return this.formData.get('phone');
  }
  get Address() {
    return this.formData.get('address');
  }
  get PharmaType() {
    return this.formData.get('pharmaType');
  }
  get StartingTime() {
    return this.formData.get('start_time');
  }
  get Close_Time() {
    return this.formData.get('close_time');
  }
  get Email() {
    return this.formData.get('email');
  }
  get HospitalId() {
    return this.formData.get('hospitalId');
  }
}
