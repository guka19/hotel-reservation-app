import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AllListing } from 'src/app/shared/models/all-listing';
import { Owner } from 'src/app/shared/models/owner';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSidebar = false;
  errorMsg: string = "";
  activeLanguage: string = 'en'; 
  isLoggedIn: boolean = false;
  user!: User | Owner;


  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  
  switchLanguage(lang: string) {
    this.activeLanguage = lang;
    this.translate.use(lang);
  }

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
          this.toggleSidebar();
          
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

  logOut() {
    this.auth.setLoggedOut();
    this.auth.clearToken();
  }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
      this.user = this.auth.getUser();
      this.cdr.detectChanges();
    });

    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.auth.getUser();
    }
  }

  constructor(private translate: TranslateService, private fb: FormBuilder, private userService: UserService, private router: Router, private auth: AuthService, private cdr: ChangeDetectorRef) {
    translate.setDefaultLang('en');
    translate.use('en');
  } 

}
