import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { SigninAuthService } from '../../services/signin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // injecting signin Api in the login component
  constructor(private siginAuth: SigninAuthService, private router: Router) {}

  // ReactFrom Validator
  siginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  // get form data
  onSubmit(isInValid: boolean) {
    // validating from
    if (isInValid) {
      return;
    }

    const email = this.siginForm.value.email;
    const password = this.siginForm.value.password;

    if (email && password) {
      // calling signin method for Service
      this.siginAuth.signin(email, password).subscribe({
        next: (res) => {
          // if signin is successful
          // console.log(res);
          if (res.status) {
            // console.log(res);
            // console.log('tocken', res.data.accessToken);

            // storing token in local storage
            localStorage.setItem('authToken', res.data.accessToken);
            // navigating to admin dashboard after successful signin
            console.log('admin dashboard');
            // this.router.navigate(['adminDashboard']);

            this.router.navigateByUrl('layout/adminDashboard');
          }
        },
        error: (err) => {
          // if signin fails
          console.log(err);
          alert(err.error.message);
        },
      });
    }
  }

  // geters for reactFrom
  get userEmail() {
    return this.siginForm.get('email');
  }

  get userPassword() {
    return this.siginForm.get('password');
  }
}
