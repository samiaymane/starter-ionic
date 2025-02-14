import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {LogoutPageRoutingModule} from '../logout/logout-routing.module';
import {LogoutPage} from '../logout/logout.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LogoutPageRoutingModule
    ],
    exports: [
        LogoutPage
    ],
    declarations: [LogoutPage]
})
export class LogoutPageModule {}
