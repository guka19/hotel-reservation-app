import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showSidebar = false;
  loginForm = this.fb.group({
    
  })

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  
  switchLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'ge' : 'en';
    this.translate.use(newLang);
  }

  constructor(private translate: TranslateService, private fb: FormBuilder) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
