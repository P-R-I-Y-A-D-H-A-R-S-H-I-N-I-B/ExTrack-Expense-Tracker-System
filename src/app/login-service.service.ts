import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  email=""
  constructor() { }
  setEmail(mail:String)
  {
    this.email=mail.toString();
    alert("welcome back to ExTrack "+this.email +"!!!!!!!!")
    
  }
  getEmail()
  {
    return this.email;
  }

}
