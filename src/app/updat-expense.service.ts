import { Injectable } from '@angular/core';
import { Expense } from './userModel';


@Injectable({
  providedIn: 'root'
})
export class UpdatExpenseService {
  currentCard !: Expense;

  constructor() { }
  updateExpense(_id:any,email:String,money:String, amt :Number,s_date:Date, description:String,cash:String,card:String,category:String)
  {
    //alert("inside update servise");
    this.currentCard =new Expense(_id,email,money,amt,s_date,description,cash,card,category);
    //alert("inside update servise2");
  }
}
