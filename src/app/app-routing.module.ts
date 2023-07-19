import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPage } from './Components/Pages/Login/Login.component';
import { HomePage } from './Components/Pages/Home/Home.component';
import { AddEmployeComponent } from './Components/Pages/add-employe/add-employe.component';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { EmployeePageComponent } from './Components/Pages/employee-page/employee-page.component';
import { EditEmployeeComponent } from './Components/Pages/edit-employee/edit-employee.component';

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
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
