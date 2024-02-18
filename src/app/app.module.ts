import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerComponent } from './components/burger/burger.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { OwnerRegisterComponent } from './pages/owner/owner-register/owner-register.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { DefaultRegisterComponent } from './pages/default-register/default-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerComponent,
    HomeComponent,
    ImageSliderComponent,
    PropertyCardComponent,
    FooterComponent,
    PropertyPageComponent,
    OwnerRegisterComponent,
    UserRegisterComponent,
    UserLoginComponent,
    DefaultRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    HammerModule,
    GalleriaModule,
    DividerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}