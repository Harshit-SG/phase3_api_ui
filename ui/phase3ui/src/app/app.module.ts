import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { ImportDataComponent } from './import-data/import-data.component'

import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule} from '@angular/forms';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { LoginPageComponent } from './login-page/login-page.component'
import { CompanyDetailService } from './shared/company-detail.service';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserService } from './shared/user.service';
import { CompareCompanyComponent } from './compare-company/compare-company.component';

import { ChartsModule } from 'ng2-charts';
import { OthersComponent } from './others/others.component';
import { IpoComponent } from './ipo/ipo.component';
import { IpoListComponent } from './ipo/ipo-list/ipo-list.component';
import { IpoFormComponent } from './ipo/ipo-form/ipo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    ImportDataComponent,
    ManageCompanyComponent,
    CreateCompanyComponent,
    LoginPageComponent,
    UserRegisterComponent,
    CompareCompanyComponent,
    OthersComponent,
    IpoComponent,
    IpoListComponent,
    IpoFormComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartsModule
  ],
  providers: [CompanyDetailService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
