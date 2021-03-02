import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ViewUserService {
  users = [];

  //private _Users = new UserViewModel(...this.users);
  url='https://fir-angular-dc1a1-default-rtdb.firebaseio.com/data.json';
  constructor(private _http: Http) { }

    getUsers=()=>{
   return this._http.get(this.url).subscribe(res => {
      const data = res.json();
      console.log('res', data);


      for (let i in data) {
        console.log(i);
        if (data.hasOwnProperty(i)) {
          //console.log('Key is: ' + i + '. Value is: ' + data[i]);
          this.users.push(data[i]);
        }
      }
    });

    }
    userDetailHandler (){
      this.getUsers();
    return this.users;
    }
    getUserDetailById(id){
      this.users.find(ind =>{
        ind.name === id;
      })
    }
    
}

