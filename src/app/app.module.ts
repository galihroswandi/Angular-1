import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { BannerLogin } from './Components/Elements/BannerLogin/BannerLogin.component';
import { Login } from './Components/Fragments/Login/Login.component';
import { Header } from './Components/Elements/Header/Header.component';
import { FormLogin } from './Components/Fragments/FormLogin/Form.component';
import { InputForm } from './Components/Elements/InputForm/InputForm.component';
import { FooterComponent } from './Components/Elements/Footer/Footer.component';
import { LinkFooterComponent } from './Components/Elements/Footer/LinkFooter/LinkFooter.component';
import { RegisterButtonComponent } from './Components/Elements/RegisterButton/Register.component';
import { RegisterComponent } from './Components/Fragments/Register/Register.component';
import { HomePage } from './Components/Pages/Home/Home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './Components/Pages/Login/Login.component';
import { AuthComponent } from './Components/Templates/auth/auth.template.component';
import { AddEmployeComponent } from './Components/Pages/add-employe/add-employe.component';
import { FormEmployeeComponent } from './Components/Fragments/form-employee/form-employee.component';
import { InputDropdownComponent } from './Components/Elements/input-dropdown/input-dropdown.component';
import { InputIdentitasComponent } from './Components/Fragments/input-identitas/input-identitas.component';
import { InputPendidikanComponent } from './Components/Fragments/input-pendidikan/input-pendidikan.component';
import { InputKepegawaianComponent } from './Components/Fragments/input-kepegawaian/input-kepegawaian.component';
import { NavbarComponent } from './Components/Fragments/navbar/navbar.component';
import { NavbarLinkComponent } from './Components/Elements/navbar-link/navbar-link.component';
import { NavbarSlideComponent } from './Components/Fragments/navbar-slide/navbar-slide.component';
import { NavbarSlideLinkComponent } from './Components/Elements/navbar-slide-link/navbar-slide-link.component';
import { TableComponent } from './Components/Fragments/table/table.component';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { EmployeePageComponent } from './Components/Pages/employee-page/employee-page.component';
import { EditEmployeeComponent } from './Components/Pages/edit-employee/edit-employee.component';
import { EditUserComponent } from './Components/Pages/edit-user/edit-user.component';
import { FormUserComponent } from './Components/Fragments/form-user/form-user.component';
import { AddUserComponent } from './Components/Pages/add-user/add-user.component';
import { ButtonFormComponent } from './Components/Elements/button-form/button-form.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  declarations: [
    AppComponent,
    BannerLogin,
    Login,
    Header,
    FormLogin,
    InputForm,
    FooterComponent,
    LinkFooterComponent,
    RegisterButtonComponent,
    RegisterComponent,
    HomePage,
    LoginPage,
    AuthComponent,
    AddEmployeComponent,
    FormEmployeeComponent,
    InputDropdownComponent,
    InputIdentitasComponent,
    InputPendidikanComponent,
    InputKepegawaianComponent,
    NavbarComponent,
    NavbarLinkComponent,
    NavbarSlideComponent,
    NavbarSlideLinkComponent,
    TableComponent,
    UsersPageComponent,
    EmployeePageComponent,
    EditEmployeeComponent,
    EditUserComponent,
    FormUserComponent,
    AddUserComponent,
    ButtonFormComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
