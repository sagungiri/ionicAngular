import { AddUserDetailComponent } from './../add-user-detail/add-user-detail.component';
import { SignInSignUpComponent } from './../sign-in-sign-up/sign-in-sign-up.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,

  ],
})
export class HomePageModule { }
