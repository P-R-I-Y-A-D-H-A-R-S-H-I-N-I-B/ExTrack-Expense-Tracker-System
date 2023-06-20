import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { UpdatExpenseService } from "../updat-expense.service"; // Mention correct path for User Service
import { Expense } from "../userModel"; // Mention correct path for User Model
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {
  income : number =0;
  expense : number =0;
  email : String ="";
  cardData :any[]=[];
  constructor(private router: Router,private http: HttpClient,private updateService :UpdatExpenseService,public l_service:LoginServiceService,public a:AuthService) { }

  ngOnInit(): void {
    let data={
      email : this.l_service.getEmail()
    };
    this.http.post("http://localhost:8086/showExpense", data).subscribe(  (resultData: any) => {
     
        if (resultData.status)
        {
          console.log(resultData.data.data);
          let i:number =0;
          for(i=0;i<resultData.data.data.length;i++)
          {
              
              this.cardData[i]=Object.assign({},resultData.data.data[i]);
              console.log(this.cardData[i]);
              if(this.cardData[i].money=="Income")
              {
                this.income+= this.cardData[i].amt;
                this.cardData[i].category="Income";
                this.cardData[i].img ="../assets/expense2.jpg";
              }
              else
              {
                if(this.cardData[i].cash=="On Cash")
                  this.income-=this.cardData[i].amt;
                this.expense+= this.cardData[i].amt;
                if(this.cardData[i].category=="Beauty")
                  this.cardData[i].img ="../assets/beauty4.jpg";
                else if(this.cardData[i].category=="Clothing")
                  this.cardData[i].img ="../assets/clothes1.jpg";
                else if(this.cardData[i].category=="Education")
                  this.cardData[i].img ="../assets/education1.jpg";
                else if(this.cardData[i].category=="Entertainment")
                  this.cardData[i].img ="../assets/entertainment1.jpg";
                else if(this.cardData[i].category=="Food")
                  this.cardData[i].img ="../assets/food.jpg";
                else if(this.cardData[i].category=="Fruits")
                  this.cardData[i].img ="../assets/fruits.jpg";
                else if(this.cardData[i].category=="Grocery")
                  this.cardData[i].img ="../assets/grocery1.jpg";
                else if(this.cardData[i].category=="Health")
                  this.cardData[i].img ="../assets/health.jpg";
                else if(this.cardData[i].category=="Insurance")
                  this.cardData[i].img ="../assets/insurance.jpg";
                else if(this.cardData[i].category=="Pet")
                  this.cardData[i].img ="../assets/pet.jpg";
                else if(this.cardData[i].category=="Shopping")
                  this.cardData[i].img ="../assets/shopping2.jpg";
                else if(this.cardData[i].category=="Stationery")
                  this.cardData[i].img ="../assets/stationary.jpg";
                else if(this.cardData[i].category=="Transportation")
                  this.cardData[i].img ="../assets/transportation.jpg";
                else if(this.cardData[i].category=="Travel")
                  this.cardData[i].img ="../assets/travel.jpg";
                else if(this.cardData[i].category=="Vegetables")
                  this.cardData[i].img ="../assets/vegetables.jpg"; 

                }
                
          }

        }
      });

      
  }
  update(_id:any,email:String,money:String, amt :Number,s_date:Date, description:String,cash:String,card:String,category:String)
  {
        
        this.updateService.updateExpense(_id,email,money,amt,s_date,description,cash,card,category);
        alert("inside update");
        this.router.navigateByUrl('home2/view-expense/view-update');
        alert("inside update2");
  }
  ddelete(id:any)
  {
    let data={
      _id:id
    };
    this.http.post("http://localhost:8086/deleteExpense", data).subscribe(  (resultData: any) => {

      if (resultData.status)
      {
        alert("Delete successfully");
        this.router.navigateByUrl('/view-expense');   

      }
      else
       {
        alert("Incorrect Email or Password");
        console.log("Errror login");
      }
    });
  }
}
