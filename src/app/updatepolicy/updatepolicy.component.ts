import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-updatepolicy',
  templateUrl: './updatepolicy.component.html',
  styleUrls: ['./updatepolicy.component.css']
})
export class UpdatepolicyComponent {
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
  updatepolicy()
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
    this.http.post("http://localhost:8086/updatepolicy",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Policy Added Successfully");    
      this.email = '';
      this.pname = '';
      this.company = '';
      this.cardname='';
      
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
