import { Component, OnInit } from '@angular/core';
import { UpdatExpenseService } from "../updat-expense.service"; // Mention correct path for User Service
import { Expense } from "../userModel"; // Mention correct path for User Model
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-update',
  templateUrl: './view-update.component.html',
  styleUrls: ['./view-update.component.css']
})
export class ViewUpdateComponent implements OnInit {

  _id:any;
  email !: String;
  money !: String;
  amt !: Number;
  s_date !: Date;
  cash !: String;
  cards !: String;
  category !: String;
  description !: String;
  ifCategory !: Boolean;
  ifCards !: Boolean;
  expense:Expense = new Expense("","","",0,new Date(),"","","","");
  addCards()
  {
    this.ifCards=false;
  }

  changeValue()
  {
    this.ifCategory= true;
  }
  constructor(private router: Router,
    private http: HttpClient,
    private updateService : UpdatExpenseService ) { }

  ngOnInit(): void {
    this.expense=this.updateService.currentCard;
    this._id= this.expense._id;
    this.email= this.expense.email;
    this.money = this.expense.money;
    this.amt = this.expense.amt;
    this.s_date= this.expense.s_date;
    this.cards= this.expense.cards;
    this.cash = this.expense.cash;
    this.category = this.expense.category;
    this.description = this.expense.description;
  }

  update()
  {
    //alert("inside update");
    let bodyData = {
      _id:this._id,
      email: this.email,
      amt : this.amt,
      s_date :this.s_date,
      money : this.money,
      cash : this.cash,
      cards : this.cards,
      category :this.category,
      description : this.description
    };
        this.http.post("http://localhost:8086/updateExpense", bodyData).subscribe(  (resultData: any) => {
       
        if (resultData.status)
        {
          alert(`${this.money} updated successfully`); 
        }
        else
         {
          console.log("Here");
          alert(`Cannot add ${this.money}`);          
        }
      });
  }

}
