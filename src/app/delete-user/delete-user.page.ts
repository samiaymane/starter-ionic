import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {UserService} from '../api/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.page.html',
  styleUrls: ['./delete-user.page.scss'],
})
export class DeleteUserPage implements OnInit {

    // tslint:disable-next-line:variable-name
  @Input() user_id: number;

  constructor(
      private modalController: ModalController,
      public userService: UserService,
      public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  removeUser(){
    this.userService.deleteUser(this.user_id).subscribe(
        async success => {
          const alert = await this.alertCtrl.create({
            header: success ? 'Sucess' : 'Error',
            message: success ? 'User has been removed !' : 'Error while removing user.',
            buttons: ['OK']
          });
          await alert.present();
          const closed = await alert.onDidDismiss();
          if (closed){
            await this.closeModal();
          }
        }
    );
  }

}
