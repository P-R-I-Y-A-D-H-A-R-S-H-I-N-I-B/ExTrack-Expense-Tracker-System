import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css']
})
export class BudgetViewComponent implements OnInit {
  budgetCategory!:string;
  budgetAmount!:number;
  email:string;

  budgetData :any[]=[];
  constructor(public router: Router,private http: HttpClient,public l:LoginServiceService,public a:AuthService) { 
    this.email=l.getEmail();
    
  }
  ngOnInit():void{
   this. loaddata();
  }
  
    loaddata(){
    let data={
      email:this.email
    };

  this.http.post("http://localhost:8086/showbudget", data).subscribe(  (resultData: any) => {
     
        if (resultData.status)
        {
          console.log(resultData.data.data);
          let i:number =0;
          for(i=0;i<resultData.data.data.length;i++)
          {
              this.budgetData[i]=Object.assign({},resultData.data.data[i]);
              console.log(this.budgetData[i]);
               
          }
        }
      });
  }


  ondelete(no:string,i:number){
  let data={
    email:this.email,
    budgetCategory:no
  }
  this.http.post("http://localhost:8086/delBudget",data).subscribe((resultData: any)=>
  {
      console.log(resultData);
      if (resultData.status)
      {
        alert("Deleted successfully");
      }
      else
       {
        alert("Deletion failed!!");
        console.log("Errror login");
      }
      this.budgetData.splice(i,1);  
    });
  }

  onedit(cat:string){
  
    //this.router.navigate(['edit',cat,this.email]);
    this.router.navigateByUrl('edit');
    
  }
  logout1(){
    alert("logging out");
    this.a.logoutUser();
    localStorage.clear();
    this.router.navigateByUrl('')
    alert("logged out");

  }

}


    

  

