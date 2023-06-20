import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  name: string ="";
  email: string ="";
  pwd: String ="";
 
  constructor(private http: HttpClient,private router:Router)
  {
  
  }
 
 
  register()
  {
  
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "pwd" : this.pwd
    };
    this.http.post("http://localhost:8086/signuup",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully");
      
        this.name = '';
      this.email = '';
      this.pwd='';
      this.router.navigateByUrl('');
    });
  }
 
}


