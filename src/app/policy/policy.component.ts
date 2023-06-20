import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {
  
  email: string ="";
  pname: string ="";
  company: string ="";
  sdate: Date =new Date(2003, 4, 1);
  edate: Date =new Date(2023, 4, 1);
  amnt:number=1000;
  cardname:string="";
 
  constructor(private http: HttpClient,private location: Location ,private router:Router,public a:AuthService,public l:LoginServiceService)
  {
    this.email=this.l.getEmail();
  }
 
   goBack() {
    this.location.back();
  }
  addpolicy()
  {
  
    let bodyData = {
      
      "email" : this.email,
      "pname" : this.pname,
      "company" : this.company,
      "sdate" : this.sdate,
      "edate" : this.edate,
      "amnt" : this.amnt,
      "cardname":this.cardname
    };
    this.http.post("http://localhost:8086/addpolicy",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Policy Added Successfully");    
      this.email = '';
      this.pname = '';
      this.company = '';
      this.cardname='';
      this.router.navigateByUrl('/home2');
      
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
