import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.component.html',
  styleUrls: ['./owner-register.component.scss']
})
export class OwnerRegisterComponent {
  phoneNumberValidator(): ValidatorFn{
    return Validators.pattern(/^(\+995\s?)?(555|597|579|599|591|595)\d{6}$/);
  }

  passwordMatchValidator():ValidatorFn{
    return(control: AbstractControl):ValidationErrors | null => {
      const password = control.get('password');
      const repeatPassword = control.get('repeatPassword');

      return password && repeatPassword && password.value !== repeatPassword.value ? { 'passwordMismatch': true} : null;
    };
  }

  registerForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(2)]],
    lastName: ["", [Validators.required, Validators.minLength(2)]],
    dateOfBirth: ["", [Validators.required]],
    phoneNumber: ["", [Validators.required, this.phoneNumberValidator()]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    repeatPassword: ["", [Validators.required]]
  }, {
    Validators: this.passwordMatchValidator()
  });

  register() {

    console.log("zangi");
     
    if (this.registerForm.valid) {
      console.log("zangexa");
      const value = this.registerForm.value;

      this.userService.register({
        id: uuidv4(),
        firstName: value.firstName!,
        lastName: value.lastName!,
        dateOfBirth: value.dateOfBirth!,
        email: value.email!,
        phoneNumber: value.phoneNumber!,
        password: value.password!,
        role: "renter"
      }).subscribe(
        (response) => {
          alert("Registered Successfully!");
          this.router.navigate(['/user-login']);
        },
        (error) => {
          alert(error.message);
        }
      )
    }
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}
}
