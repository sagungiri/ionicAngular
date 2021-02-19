import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase/firebase.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { auth } from './auth/auth';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(auth)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
