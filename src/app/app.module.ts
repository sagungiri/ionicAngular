import { NgxSummernoteModule } from 'ngx-summernote';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase/firebase.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { auth } from './auth/auth';
import { AddUserDetailComponent } from './add-user-detail/add-user-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,
    SignInSignUpComponent,
    AddUserDetailComponent,
    ViewUserDetailComponent],
  entryComponents: [],
  imports: [BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgxSummernoteModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(auth)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
