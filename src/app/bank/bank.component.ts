import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  email : String = "";
  bname : String="";
  cname : String = "";
  cards : String ="";
  ano !: Number;
  amt !:Number;
  isValid : Boolean= false;
  constructor(private router: Router,private http: HttpClient,public l_service:LoginServiceService,public a:AuthService) { 

    this.email=this.l_service.getEmail()
  }

  ngOnInit(): void {
  }

  add()
  {
    let bodyData={
      bname : this.bname,
      cname :this.cname,
      ano : this.ano,
      amt : this.amt,
      cards : this.cards,
      email : this.l_service.getEmail()
    };
    alert("inside add")
    this.http.post("http://localhost:8086/cards", bodyData).subscribe(  (resultData: any) => {
 
        if (resultData.status)
        {
          
          alert("Card details added  successfully");
    
 
        }
        else
         {
          
          alert("Cannot add card details");
          console.log("Errror login");
        }
      });
  }
}
