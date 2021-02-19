import { ViewUserDetailComponent } from './../view-user-detail/view-user-detail.component';
import { AddUserDetailComponent } from './../add-user-detail/add-user-detail.component';
import { SignInSignUpComponent } from './../sign-in-sign-up/sign-in-sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  // {
  //   path: '',
  //   component: SignInSignUpComponent,
  // },
  // {
  //   path: 'adduser',
  //   component: AddUserDetailComponent,
  // },
  // {
  //   path: 'viewuser',
  //   component: ViewUserDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
