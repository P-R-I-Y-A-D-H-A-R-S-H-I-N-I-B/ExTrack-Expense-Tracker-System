export class Expense
{
  _id:any;
  email : String;
  money : String;
  amt : Number;
  s_date : Date;
  cash : String ;
  cards : String;
  category : String;
  description : String;
  constructor(_id:any,email:String,money:String,amt:Number,s_date:Date,cash:String,cards:String,category: String,description:String)
  {
    this._id=_id;
    this.email= email;
    this.money = money;
    this.amt =amt;
    this.s_date=s_date;
    this.cash = cash;
    this.cards =cards;
    this.category=category;
    this.description = description;
  }
}