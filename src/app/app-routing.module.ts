import { SigninComponent } from './sign-in-sign-up/signin/signin.component';
import { SignupComponent } from './sign-in-sign-up/signup/signup.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddUserDetailComponent } from './add-user-detail/add-user-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'adduser',
    component: AddUserDetailComponent,
    pathMatch: 'full',
    //canActivate:[AuthGuard]
  },
  {
    path: 'viewuser',
    component: ViewUserDetailComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'viewuser/:id',
    component: UserdetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full',
    // canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
