import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserData } from 'src/app/models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/data';

  userRef: AngularFireList <UserData>;
 

  constructor(private db: AngularFireDatabase) { 
    this.userRef = db.list(this.dbPath);
  }

  getAllUser(): AngularFireList<UserData> {
    return this.userRef;
  }

  createUser(userData: UserData): any {
    return this.userRef.push(userData);
  }

  deleteUser(key: string): Promise<void>{
    return this.userRef.remove(key);
  }
    
}

