import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddUserDetailComponent } from './add-user-detail/add-user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SignInSignUpComponent,
    pathMatch: 'full'

  },
  {
    path: 'adduser',
    component: AddUserDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'viewuser',
    component: ViewUserDetailComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
