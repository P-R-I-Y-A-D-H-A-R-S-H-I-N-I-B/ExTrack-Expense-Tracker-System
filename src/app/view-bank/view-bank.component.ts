import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import  {BankService} from "../bank.service";
import { Location } from '@angular/common';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-view-bank',
  templateUrl: './view-bank.component.html',
  styleUrls: ['./view-bank.component.css']
})
export class ViewBankComponent implements OnInit {
  email : String ="";
  cardData :any[]=[];
  constructor(private router: Router,private http: HttpClient,private bankService :BankService,private location: Location,public l_service:LoginServiceService,public a:AuthService) { }
  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    let data={
      email : this.l_service.getEmail()
    };
    this.http.post("http://localhost:8086/showBank", data).subscribe(  (resultData: any) => {
     
        if (resultData.status)
        {
          console.log(resultData.data.data);
          let i:number =0;
          for(i=0;i<resultData.data.data.length;i++)
              this.cardData[i]=Object.assign({},resultData.data.data[i]);           

        }
      });

      
  
  }

  update(_id:any,email:String,bname:String,cname:String,cards: String,ano:Number,amt:Number)
  {
      this.bankService.updateBank(_id,email,bname,cname,cards,ano,amt);
      this.router.navigateByUrl('updateBank');
  }

  ddelete(cname:any)
  {
    let data={
      email:this.l_service.getEmail(),
      cname:cname
    };
    this.http.post("http://localhost:8086/deleteBank", data).subscribe(  (resultData: any) => {

      if (resultData.status)
      {
        alert("Deleted successfully");
        this.router.navigateByUrl ('/home2');
      } 
      else
       {
        alert("Incorrect Email or Password");
        console.log("Errror login");
      }
    });
  }
}
