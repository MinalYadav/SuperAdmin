import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddDoctorService } from '../../services/Doctor/add-doctor.service';
import { DoctorData } from '../../Models/doctorData.model';
// import { NonNullableFormBuilder } from '@angular/forms';
import { AllDepartmentService } from '../../services/AllDepartment/all-department.service';

// importing Department related model
import { Departments } from '../../Models/Departments.model';
import { Department } from '../../Models/department.model';

@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css',
})
export class AddDoctorComponent {
  doctorimage: string = '';
  url: string = 'photos/doctors/01.jpg';
  departmentId: string = '';
  departments: Department[] = [];

  constructor(
    private addDoctorService: AddDoctorService,
    private allDepartment: AllDepartmentService
  ) {
    console.warn(this.url);
  }

  formData = new FormGroup({
    image: new FormControl<File | null>(null, [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    formauthority: new FormControl('', [Validators.required]),
    selectAuthority: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  // get all data
  ngOnInit(): void {
    this.allDepartment.getAllDepartments().subscribe((res) => {
      this.departments = res.data;
      console.log('departments', this.departments);
    });
  }

  // find department id
  findDepartmentId(departmentName: string): number {
    const department = this.departments.find((d) => d.name === departmentName);
    if (department) {
      return department.id;
    }
    return 0; // default department id
  }

  // on form submit
  onSubmit(): void {
    if (this.formData.invalid) {
      this.formData.markAllAsTouched(); // Highlight all invalid fields
      console.log('Form is invalid');
      return;
    }

    // find department id
    let dpname = this.formData.get('department')?.value;
    console.log(dpname);
    // console.log(typeof dpname);
    if (typeof dpname === 'string') {
      this.departmentId = this.findDepartmentId(dpname).toString();
      console.log('department id', this.departmentId);
      // we are saying to type sript that please treat form data as unknown type and convet it into DoctorData
      const formValue: DoctorData = this.formData.value as unknown as DoctorData;
      this.addDoctorService.addDoctor(formValue, this.departmentId).subscribe({
        next: (res) => {
          console.log('Doctor added successfully', res);
          this.formData.reset();
        },
        error: (err) => {
          console.error('Error adding doctor', err);
        },
      });
    }
    // this.departmentId = this.findDepartmentId(dpname)
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

  // onImagePicked(event : any) {
  //   console.log("onImagePicked");
  //   let fileType =  event.target.files[0].type;
  //   if(fileType === 'image/jpeg' || fileType === 'image/png'){
  //       const file = event.target.files[0];
  //       const reader = new FileReader();
  //       reader.readAsDataURL(event.target.files[0]);
  //       reader.onload = (e: any) => {
  //         this.url = e.target.result;
  //       };
  //       console.log("img",this.url);
  //       // set data in form data
  //       this.formData.patchValue({ image: file });
  //       this.formData.updateValueAndValidity();
  //   }else{
  //     console.log("Invalid file type. Please select a JPEG or PNG image.");
  //   }
  //   // this.formData.patchValue({ image: file });
  //   // this.formData.updateValueAndValidity();

  // }

  // geters of reactive form

  get firstName() {
    return this.formData.get('firstname');
  }

  get lastName() {
    return this.formData.get('lastname');
  }
  get Gender() {
    return this.formData.get('gender');
  }
  get Email() {
    return this.formData.get('email');
  }
  get Phone() {
    return this.formData.get('phone');
  }
  get Formauthority() {
    return this.formData.get('formauthority');
  }
  get SelectAuthority() {
    return this.formData.get('selectAuthority');
  }
  get Department() {
    return this.formData.get('department');
  }
  get Description() {
    return this.formData.get('description');
  }
}
