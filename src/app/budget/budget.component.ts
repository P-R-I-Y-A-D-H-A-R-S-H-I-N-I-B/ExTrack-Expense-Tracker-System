import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { budgetmodel } from '../service/budget.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BudgetService } from '../service/budget.service';
import { BudgetViewComponent } from '../budget-view/budget-view.component';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit{

    opr!:string;
    email!:string;
    budgetCategory!:string;
    budgetAmount!:number;
    cat!:string;
    s!:string;
    editmode=false;
    data!:budgetmodel;
    b:any=[]
    c!:any
    
    category=["Entertainment","Pet","Health","Travel","Bills","Food","Fruits","Beauty","Pet","Education","Shopping","Dress","others"];
  loginStatus!: boolean;
    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        if(paramMap.has('cat')){
          this.editmode = true;
          this.opr="Update"
          alert("edit...")
          
          this.email=this.l_service.getEmail()
          this.budgetCategory=this.b;
        }
        else{
          this.editmode = false;
          this.opr="Add"
        }
    });
    }
    constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private b_service:BudgetService,private router :Router,public l_service:LoginServiceService,public a:AuthService){
      this.s=this.l_service.getEmail();
      this.email=this.s;
    }

    budget()
    {
      let newbudget=
      {
        "email":this.email,
        "budgetCategory":this.budgetCategory,
        "budgetAmount":this.budgetAmount
      };
      console.log("resultData");
      this.http.post("http://localhost:8086/updatebudget",newbudget,{responseType: 'text'}).subscribe((resultData:any)=>
      {
        console.log(resultData);
        alert("budget added");
      });
      this.email="";
      this.budgetAmount=0;
      this.budgetCategory="";
    }
    updatebudget(){
      let newbudget=
      {
        "email":this.email,
        "budgetCategory":this.budgetCategory,
        "budgetAmount":this.budgetAmount
      };
      this.http.post("http://localhost:8086/updatebudget",newbudget,{responseType: 'text'}).subscribe((resultData:any)=>
      {
        console.log(resultData);
        alert("budget updated successfully")
      });
      this.router.navigateByUrl('home2/budget-view');
      this.email=""
      this.budgetAmount=0
      this.budgetCategory=""

    }

    save()
    {
      if(this.editmode){
        this.updatebudget();
        new BudgetViewComponent(this.router,this.http,this.l_service,this.a);
      }
      else{
        this.budget();
        
        this.router.navigateByUrl('home2/budget-view');
      }
      
    }

    logout1(){
      alert("logging out");
      this.a.logoutUser();
      localStorage.clear();
      this.router.navigateByUrl('')
      alert("logged out");

    }
    
    
}
