import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

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
    phoneNumber: ["", [Validators.required, this.phoneNumberValidator()]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    repeatPassword: ["", [Validators.required]]
  }, {
    Validators: this.passwordMatchValidator()
  });

  constructor(private fb: FormBuilder) {}
}
