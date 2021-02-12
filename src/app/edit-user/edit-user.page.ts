import {Component, Input, OnInit} from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  @Input() data :any;
  @Input() user_id :number;

  name : string
  job : string

  constructor(
      private modalController : ModalController,
      public userService: UserService,
      public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  editUser(){
    this.userService.patchUser(this.user_id, this.name, this.job).subscribe(
        async success => {
          const alert = await this.alertCtrl.create({
            header: success ? 'Sucess':'Error',
            message: success ? 'User has been updated !':'Error while updating user.',
            buttons: ['OK']
          });
          await alert.present();
          let closed = await alert.onDidDismiss();
          if(closed){
            await this.closeModal();
          }
        }
    );

  }

}
