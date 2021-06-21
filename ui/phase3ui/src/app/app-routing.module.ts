import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportDataComponent } from '../app/import-data/import-data.component';
import { ManageCompanyComponent } from '../app/manage-company/manage-company.component';
import { CreateCompanyComponent} from '../app/create-company/create-company.component'
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AuthGuard } from './auth/auth.guard';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'importdata', component: ImportDataComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'managecompany', component: ManageCompanyComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'createcompany', component: CreateCompanyComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'registration', component: UserRegisterComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'adminhome', component: AdminLandingPageComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'userhome', component: UserLandingPageComponent, canActivate:[AuthGuard]},
  { path: 'comparecompany', component: CompareCompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
