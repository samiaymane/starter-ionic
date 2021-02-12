import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/api/user.service';
import {ModalController} from "@ionic/angular";
import {EditUserPage} from "../edit-user/edit-user.page";
import {DeleteUserPage} from "../delete-user/delete-user.page";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  private selectedUserId: number;

  userDetail$: Observable<any>;

  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.selectedUserId = this.actRoute.snapshot.params.id;
    this.userDetail$ = this.userService.getUserDetail(this.selectedUserId);
  }

  async editModal() {
    const editModal = await this.modalController.create({
      component: EditUserPage,
      componentProps : {
        user_id : this.selectedUserId
      }
    });
    return await editModal.present();
    const closed = await editModal.onDidDismiss();
    if(closed){
      //refresh
    }
  }

  async removeModal() {
    const removeModal = await this.modalController.create({
      component: DeleteUserPage,
      componentProps : {
        user_id : this.selectedUserId
      }
    });
    return await removeModal.present();
    const closed = await removeModal.onDidDismiss();
    if(closed){
      //refresh
    }
  }

}
