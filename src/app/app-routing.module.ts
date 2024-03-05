import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { OwnerRegisterComponent } from './pages/owner/owner-register/owner-register.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
import { DefaultRegisterComponent } from './pages/default-register/default-register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { RenterDashboardComponent } from './pages/renter-dashboard/renter-dashboard.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "pr/:id", component: PropertyPageComponent },
  { path: "renter-register", component: OwnerRegisterComponent },
  { path: "user-register", component: UserRegisterComponent },
  { path: "user-login", component: UserLoginComponent },
  { path: "register", component: DefaultRegisterComponent },
  { path: "user-dashboard", component: UserDashboardComponent },
  { path: "renter-dashboard", component: RenterDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
