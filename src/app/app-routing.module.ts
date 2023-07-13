import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './Components/Pages/Login/Login.component';
import { HomePage } from './Components/Pages/Home/Home.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
