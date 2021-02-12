import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular';
import { UserService } from 'src/app/api/user.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.page.html',
    styleUrls: ['./logout.page.scss'],
})

export class LogoutPage implements OnInit {

    constructor(
        private modalController: ModalController,
        public userService: UserService,
        public router: Router
    ) {}

    ngOnInit() {
    }

    async closeModal(){
        await this.modalController.dismiss();
    }

    logout() {
        this.userService.logout();
        this.router.navigateByUrl('login');
        this.closeModal();
    }
}
