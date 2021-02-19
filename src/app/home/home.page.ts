import { FirebaseService } from '../services/firebase/firebase.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  logout() {
    this.firebaseService.logOut()
    this.isLogout.emit()
  }

}

