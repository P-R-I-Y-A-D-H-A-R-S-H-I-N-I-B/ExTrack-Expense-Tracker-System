import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Bank } from '../bankModel';
import { BankService } from '../bank.service';
@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {
  _id:any;
  email : String = "";
  bname : String="";
  cname : String = "";
  cards : String ="";
  ano : Number=0;
  amt :Number=0;
  isValid : Boolean= false;
  bank:Bank = new Bank("","","","","",0,0);
  constructor(private router: Router,
    private http: HttpClient,private bankService:BankService) { }

  ngOnInit(): void {
    this.bank = this.bankService.currentCard;
    this._id = this.bank._id;
    this.email = this.bank.email;
    this.bname = this.bank.bname;
    this.cname = this.bank.cname;
    this.cards = this.bank.cards;
    this.ano = this.bank.ano;
    this.amt = this.bank.amt;
  }

  update()
  {
    let bodyData=
    {
      email:this.email,
      bname : this.bname,
      cname : this.cname,
      cards :this.cards,
      ano: this.ano,
      amt : this.amt 
    };
    console.log("Body Data");
    console.log(bodyData);
    this.http.post("http://localhost:8086/updateBank", bodyData).subscribe(  (resultData: any) => {
       
        if (resultData.status)
        {
          alert(`Updated successfully`); 
        }
        else
         {
          console.log("Here");
          alert(`No enough money`);          
        }
      });
  }
}
