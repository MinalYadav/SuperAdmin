import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DoctorProfileService } from '../../services/Doctor/doctor-profile.service';
import { DoctorProfileData } from '../../Models/doctorProfileData.model';
import { Patients } from '../../Models/patients.model';
// form related imports
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{FormControl, FormGroup, Validators} from '@angular/forms';
import { UpdateProfileService } from '../../services/Doctor/update-profile.service';
// all department
import { AllDepartmentService } from '../../services/AllDepartment/all-department.service';
import { Department } from '../../Models/department.model';


@Component({
  selector: 'app-doctor-profile',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule ,FormsModule],
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit{

  profileData: DoctorProfileData = {
    id: 0,
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    phone: '',
    department: '',
    description: '',
    image: '',
    logitude: null,
    latitude: null,
    speciality: '',
    pendingPrice: '',
    completedPrice: null,
    createdAt: '',
    updatedAt: '',
    userId: 0,
    hospitalId: 0,
    doctorslots: [],
    departmentName: '',
    patients: [],
    totalPayment: 0
  };
  patients: Patients[] = [];
  isedit: boolean = false;
  url: string ="";
  departmentId: string = "";
  doctorId: string = "";
  departments: Department[]=[];
  // formData!: FormGroup;
  constructor(private route: ActivatedRoute ,
    private doctorProfile:DoctorProfileService,
    private updateProfile:UpdateProfileService,
    private allDepartment: AllDepartmentService) {}

  ngOnInit() {

    this.route.paramMap.subscribe((p)=>{
      const id = p.get('id');
      this.doctorId = id!.toString();
      console.log("id",id);
      if (typeof id ==='string') {
        this.doctorProfile.getDoctor(id)
        .subscribe({
          next: (res) => {
            this.profileData = res.data;
            this.patients = res.data.patients;
            console.log(res);
            console.log(this.profileData);
            this.url = this.profileData.image;

          },
          error: (error) => {
            console.log('Error', error);
          }
        })
      }

    })

    //all deparments
    this.allDepartment.getAllDepartments().subscribe(res => {
      this.departments = res.data;
      console.log("departments",this.departments);
    });



    // this.route.data.subscribe((res) => {
    //     this.customerData = res;
    //     console.log(this.customerData);
    // },
    // error => {
    //   console.log('ERROR', error);
    // });
  }


    // get form data 
    formData = new FormGroup({
      image: new FormControl<File| null>(null,[Validators.required]),
      firstname: new FormControl("",[Validators.required]),
      lastname: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required, Validators.email]),
      phone: new FormControl("",[Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      description: new FormControl("",[Validators.required]),
    });

    // toggle enable state ==> to set defalut state disable
    // the toggle function is return some valy type any 
    some = this.toggleEnabledState();


  
  // getUpdate profile data
  
  // edit button
  // canEdit(){
  //   this.isedit = !this.isedit;
  //   console.log(this.isedit);
  // }

  // on submit
  onSubmit(){
    console.log(this.formData.value);
    this.departmentId = this.findDepartmentId(this.profileData.departmentName).toString();
    console.log("department id",this.departmentId);
      
    // call update profile service with form data
    this.updateProfile.addDoctor(this.formData.value,
      this.departmentId,
      this.doctorId,
      this.profileData.gender)
      .subscribe({
        next: (res) => {
          console.log('Doctor updated successfully', res);
          this.formData.reset();
        },
        error: (err) => {
          console.error('Error updating doctor', err);
        },

      })


  }


  onImagePicked(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          this.url = e.target?.result as string;
        };
        reader.readAsDataURL(file);

        this.formData.patchValue({ image: file });
        this.formData.updateValueAndValidity();
      } else {
        console.error('Invalid file type. Please select a JPEG or PNG image.');
      }
    }
  }

  // find department id 
  findDepartmentId(departmentName: string): number {
    const department = this.departments.find((d) => d.name === departmentName);
    if (department) {
      return department.id;
    }
    return 0; // default department id
  }

  // disable form in angular 

  toggleEnabledState(){

    this.formData.enabled ? this.formData.disable() : this.formData.enable();


    // console.log(this.isedit);
    // if(this.isedit){
    //   this.formData.enable();
    // }else{
    //   this.formData.disable();   
    // }
    // this.isedit = !this.isedit;
    // console.log(this.isedit);
  }





}
