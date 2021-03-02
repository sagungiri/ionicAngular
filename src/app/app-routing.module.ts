import { UserdetailComponent } from './userdetail/userdetail.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddUserDetailComponent } from './add-user-detail/add-user-detail.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SignInSignUpComponent,
    pathMatch: 'full'

  },
  {
    path: 'adduser',
    component: AddUserDetailComponent,
    pathMatch: 'full',
    //canActivate:[AuthGuard]
  },
  {
    path: 'viewuser',
    component: ViewUserDetailComponent
   // canActivate:[AuthGuard]
  },
  { 
    path: 'viewuser/:id',
     component: UserdetailComponent,
     pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
   // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
