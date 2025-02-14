import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from 'src/app/home/user-list/user-list.component';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {LogoutPageModule} from '../logout/logout.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LogoutPageModule
  ],
  declarations: [HomePage, UserListComponent]
})
export class HomePageModule {}
