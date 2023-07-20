import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  dataUser: [User] = [{ email: '', password: '' }];

  ngOnInit(): void {
    const idUser = this.route.snapshot.paramMap.get('id');
    if (!idUser) this.router.navigate(['/users']);

    this.userService.getUserWhereId('1').subscribe((data) => {
      console.log(data);
    });
  }
}
