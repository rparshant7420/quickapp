// We will use this file for local storage.
// there are 2 types of storages --> 1.Local Storage 2. Session Storage
// These both store on server but local storage destroys when user deletes the record and Session destroys on
// closing window
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  setUser(name:string){
   localStorage.setItem('user',name)
  }

  getuser()
  {
    return localStorage.getItem('user');
  }

  removeUser()
  {
    localStorage.removeItem('user');
  }
  // now we we have to do restriction

  isloggedin(){
     if(this.getuser()==null)
     {
       return false;
     }
     else
     {
       return true;
     }
  }

}
