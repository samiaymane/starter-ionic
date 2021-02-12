import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/home/user-list/user.interface';
import {EditUserPage} from "../../edit-user/edit-user.page";
import {ModalController} from "@ionic/angular";
import {DeleteUserPage} from "../../delete-user/delete-user.page";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @Input()
  userList: any;

  @Output()
  selectedUser = new EventEmitter<number>();

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async editModal(id: number) {
    const editModal = await this.modalController.create({
      component: EditUserPage,
      componentProps : {
        user_id : id
      }
    });
    return await editModal.present();
    const closed = await editModal.onDidDismiss();
    if(closed){
      location.reload();
    }
  }

  async removeModal(id: number) {
    const removeModal = await this.modalController.create({
      component: DeleteUserPage,
      componentProps : {
        user_id : id
      }
    });
    return await removeModal.present();
    const closed = await removeModal.onDidDismiss();
    if(closed){
      //refresh
    }
  }

}
