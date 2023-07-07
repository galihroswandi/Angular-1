import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { BannerLogin } from './Components/BannerLogin/BannerLogin.component';
import { Login } from './Components/Login/Login.component';
import { Header } from './Components/Header/Header.component';
import { FormLogin } from './Components/Form/Form.component';
import { InputForm } from './Components/InputForm/InputForm.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { LinkFooterComponent } from './Components/Footer/LinkFooter/LinkFooter.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerLogin,
    Login,
    Header,
    FormLogin,
    InputForm,
    RegisterComponent,
    FooterComponent,
    LinkFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
