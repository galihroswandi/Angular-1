import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: '',
        component: HomePage,
      },
    ]),
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
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
