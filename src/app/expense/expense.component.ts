import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  email : String ="";
  money : string = "Income";
  amt !: Number;
  s_date : Date =new Date();
  cash : String ="On Cash";
  cards : String ="";
  category : String ="";
  description : String ="";
  ifCategory : Boolean = false;
  ifCards : Boolean = true;

  addCards()
  {
    this.ifCards=false;
  }

  changeValue()
  {
    this.ifCategory= true;
  }
  constructor(private router: Router,private http: HttpClient,public l_service:LoginServiceService,public a:AuthService) {
    this.email=this.l_service.getEmail();
   }
   
  ngOnInit(): void {
    let data={
      email : this.email
    };
    this.http.post("http://localhost:8086/fetchCards", data).subscribe(  (resultData: any) => {
     
        const select = document.querySelector('select'); 
        if (resultData.status)
        {
          console.log(resultData);
          let i:number =0;
          for(i=0;i<resultData.data.data.length;i++)
          {
            
            let value:string =resultData.data.data[i].cname;
            let newOption = new Option(value,value);
              console.log(resultData.data.data[i].cname);
              console.log(i);
            select?.add(newOption,undefined);
          }

        }
      });
  }
  add() {
 
    let bodyData = {
      email: this.email,
      amt : this.amt,
      s_date :this.s_date,
      money : this.money,
      cash : this.cash,
      cards : this.cards,
      category :this.category,
      description : this.description
    };
        this.http.post("http://localhost:8086/expense", bodyData).subscribe(  (resultData: any) => {
       
        if (resultData.status)
        {
          alert(`${this.money} added successfully`); 
        }
        else
         {
          console.log("Here");
          alert(`Cannot add ${this.money}`);          
        }
      });
    }
}
