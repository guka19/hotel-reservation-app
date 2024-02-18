import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  login() {
    console.log("yay");
  }

  constructor(private fb: FormBuilder) {}
}
