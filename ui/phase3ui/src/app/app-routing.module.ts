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
import { OthersComponent } from './others/others.component';
import { IpoComponent } from './ipo/ipo.component';
import { IpoFormComponent } from './ipo/ipo-form/ipo-form.component';
import { IpoListComponent } from './ipo/ipo-list/ipo-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'importdata', component: ImportDataComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'managecompany', component: ManageCompanyComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'createcompany', component: CreateCompanyComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'registration', component: UserRegisterComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'adminhome', component: AdminLandingPageComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'userhome', component: UserLandingPageComponent, canActivate:[AuthGuard]},
  { path: 'comparecompany', component: CompareCompanyComponent, canActivate:[AuthGuard]},
  { path: 'others', component: OthersComponent, canActivate:[AuthGuard]},
  { path: 'ipo', component: IpoComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'addipo', component: IpoFormComponent, canActivate:[AuthGuard], data :{ permittedRoles:['Admin'] }},
  { path: 'ipolist', component: IpoListComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
