import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/api/user.service';
import {LogoutPage} from '../logout/logout.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userList$: Observable<any>;

  constructor(
    public router: Router,
    public userService: UserService,
    public modalController: ModalController
  ) {}

  async selectedUser(id: number) {
    await this.router.navigate(['user-detail', id]);
  }

  ngOnInit(): void {
    this.userList$ = this.userService.getUserList();
  }
  async logoutModal() {
    const logoutModal = await this.modalController.create({
      component: LogoutPage,
      componentProps : {
      }
    });
    return await logoutModal.present();
    const closed = await logoutModal.onDidDismiss();
    if (closed){
      location.reload();
    }
  }
}
