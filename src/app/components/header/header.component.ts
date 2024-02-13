import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showSidebar = false;

  activeLanguage: string = 'en'; 


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

  constructor(private translate: TranslateService, private fb: FormBuilder) {
    translate.setDefaultLang('en');
    translate.use('en');
  } 

}
