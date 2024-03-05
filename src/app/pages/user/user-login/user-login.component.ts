import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  errorMsg: string = "";

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  login() {
    const value = this.loginForm.value;

    if (this.loginForm.valid) {
      this.userService.login({
        email: value.email!,
        password: value.password!
      }).subscribe(
        (response: any) => {
          const { accessToken, user } = response;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("user", JSON.stringify(user));
          this.auth.setLoggedIn();
          
          if (user.role === "client") {
            this.router.navigate(['/user-dashboard']);
          } else if (user.role === "renter") {
            this.router.navigate(['/renter-dashboard']);
          }
        },
        (err) => {
          this.errorMsg = err.error;
        }
      )
    }
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private auth: AuthService) {}
}
