import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../api/user.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy{

  email: string;
  password: string;
  login$: Subscription;

  constructor(
      public router: Router,
      public userService: UserService,
      public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    console.log('LoginPage init');
  }

  inscription() {
    this.login$ = this.userService.register(this.email, this.password).subscribe(
        async isLoggued => {
          if (isLoggued) {
            await this.router.navigateByUrl('home');
          }
          else{
            const alert = await this.alertCtrl.create({
              header: 'Alert',
              message: 'Email ou mot de passe invalide',
              buttons: ['OK']
            });
            await alert.present();
          }
        }
    );
  }
  login(){
    this.router.navigateByUrl('login');
  }

  ngOnDestroy(): void {
    this.login$.unsubscribe();
  }
}
