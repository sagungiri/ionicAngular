import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { AddUserDetailComponent } from './add-user-detail/add-user-detail.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
