import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/api/user.service';
import { User } from 'src/app/home/user-list/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userList$: Observable<any>;

  constructor(
    public router: Router,
    public userService: UserService
  ) {}

  async selectedUser(id: number) {
    await this.router.navigate(['user-detail', id]);
  }

  ngOnInit(): void {
    this.userList$ = this.userService.getUserList();
  }

}
