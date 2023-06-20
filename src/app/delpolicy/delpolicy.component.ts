import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-delpolicy',
  templateUrl: './delpolicy.component.html',
  styleUrls: ['./delpolicy.component.css']
})

export class DelpolicyComponent {
  
  email: string ="";
  pname: string ="";
 
  constructor(private http: HttpClient,private location: Location ,private router:Router,public a:AuthService,public l:LoginServiceService)
  {
    this.email=this.l.getEmail();
  }
 
   goBack() {
    this.location.back();
  }
  delPolicy()
  {
  
    let bodyData = {
      
      "email" : this.email,
      "pname" : this.pname
    };
    this.http.post("http://localhost:8086/delpolicy",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        if (!resultData.status)
        {
          alert("Deleted successfully");
          this.router.navigateByUrl('/home2');
    
 
        }
        else
         {
          alert("Deletion failed!!");
          console.log("Errror login");
        }   
        this.email = '';
        this.pname = '';
      
      
    });
  }
  logout1(){
    alert("logging out");
    this.a.logoutUser();
    localStorage.clear();
    this.router.navigateByUrl('')
    alert("logged out");

  }
 
}
