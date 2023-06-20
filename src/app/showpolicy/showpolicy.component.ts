import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-showpolicy',
  templateUrl:'./showpolicy.component.html',
  styleUrls: ['./showpolicy.component.css']
})

export class ShowpolicyComponent{
  
  email : String ="";
  cardData :any[]=[];
    
  
  constructor(private router: Router,private http: HttpClient,private location: Location,public l_service:LoginServiceService,public a:AuthService) { }
  goBack() {
    this.location.back();
  }
  viewpolicy() {
    
    let data={
      email : this.l_service.getEmail()
    };
    
    this.http.post("http://localhost:8086/showpolicy", data).subscribe(  (resultData: any) => {
     
        if (resultData.status)
        {
          console.log(resultData.data.data);
          let i:number =0;
          for(i=0;i<resultData.data.data.length;i++)
          {
              this.cardData[i]=Object.assign({},resultData.data.data[i]);
              console.log(this.cardData[i]);
              if(this.cardData[i].company=="LIC")
              {
                
                this.cardData[i].img ="../assets/images/lic.jpg";
              }
              else if(this.cardData[i].company=="SBI")
                  this.cardData[i].img ="../assets/images/sbi.jpg";
                else if(this.cardData[i].company=="Star Health")
                  this.cardData[i].img ="../assets/images/star.png";
                else if(this.cardData[i].company=="TATA")
                  this.cardData[i].img ="../assets/pic1.jpg";
                else if(this.cardData[i].company=="STAR HEALTH")
                  this.cardData[i].img ="../assets/pic1.jpg";
                else if(this.cardData[i].company=="MERCEDES BENZ")
                  this.cardData[i].img ="../assets/pic1.jpg";
                else if(this.cardData[i].company=="MARUTHI SUZUKI")
                  this.cardData[i].img ="../assets/pic1.jpg";
                else if(this.cardData[i].company=="HERO HONDA")
                  this.cardData[i].img ="../assets/pic1.jpg";
                else if(this.cardData[i].company=="ROYAL ENFIELD")
                  this.cardData[i].img ="../assets/pic1.jpg";
                else 
                  this.cardData[i].img ="../assets/pic1.jpg";
                               
                
          }

        }
      });

  }


}