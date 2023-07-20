import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPage } from './Components/Pages/Login/Login.component';
import { HomePage } from './Components/Pages/Home/Home.component';
import { AddEmployeComponent } from './Components/Pages/add-employe/add-employe.component';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { EmployeePageComponent } from './Components/Pages/employee-page/employee-page.component';
import { EditEmployeeComponent } from './Components/Pages/edit-employee/edit-employee.component';
import { EditUserComponent } from './Components/Pages/edit-user/edit-user.component';
import { AddUserComponent } from './Components/Pages/add-user/add-user.component';

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
      {
        path: 'employee',
        component: EmployeePageComponent,
      },
      {
        path: 'add-employee',
        component: AddEmployeComponent,
      },
      {
        path: 'edit-employee/:id',
        component: EditEmployeeComponent,
      },
      {
        path: 'users',
        component: UsersPageComponent,
      },
      { path: 'users/add', component: AddUserComponent },
      {
        path: 'edituser/:id',
        component: EditUserComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
