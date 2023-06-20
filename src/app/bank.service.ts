import { Injectable } from '@angular/core';
import { Bank } from './bankModel';
@Injectable({
  providedIn: 'root'
})
export class BankService {
  currentCard !: Bank;
  constructor() { }
  updateBank(_id:any,email:String,bname:String,cname:String,cards: String,ano:Number,amt:Number)
  {
      this.currentCard = new Bank(_id,email,bname,cname,cards,ano,amt);
  }
}
