export class Bank
{
  _id:any;
  email !: String;
  bname !: String;
  cname !: String;
  cards !: String;
  ano !: Number;
  amt !:Number;
  constructor(_id:any,email:String,bname:String,cname:String,cards: String,ano:Number,amt:Number)
  {

    this.email = email;
    this.bname = bname;
    this.cname = cname;
    this.cards = cards;
    this.ano = ano;
    this.amt = amt;
  }
}