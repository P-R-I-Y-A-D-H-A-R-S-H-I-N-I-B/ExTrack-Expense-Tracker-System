import { Component, OnInit } from '@angular/core';
import { Color } from 'chart.js';
import { Chart, registerables } from 'node_modules/chart.js'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';
Chart.register(...registerables);
@Component({
  selector: 'app-budget-chart',
  templateUrl: './budget-chart.component.html',
  styleUrls: ['./budget-chart.component.css']
})
export class BudgetChartComponent {

  constructor(public http:HttpClient,public router:Router,public l_service:LoginServiceService,public a:AuthService) { }

  chartdata: any;
  budgetData :any[]=[];
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  ngOnInit(): void {
    let data={
      email:this.l_service.getEmail()
    };
    
    //piechart1
    this.http.post("http://localhost:8086/showbudget", data).subscribe(  (resultData: any) => {
     
        if (resultData.status)
        {
          console.log(resultData.data.data);
          let i:number =0;
          for(i=0;i<resultData.data.data.length;i++)
          {
              this.budgetData[i]=Object.assign({},resultData.data.data[i]);
              //console.log(this.budgetData);
              //this.realdata.push(this.budgetData[i].budgetAmount)
              //this.labeldata.push(this.budgetData[i].budgetCategory)
          }
          //console.log(this.budgetData[1].budgetAmount)
          for(i=0;i<this.budgetData.length;i++)
          {
              this.realdata.push(this.budgetData[i].budgetAmount);
              const c=this.getRandomColor()
              this.colordata.push(c)
              this.labeldata.push(this.budgetData[i].budgetCategory);
              console.log(this.labeldata[0],this.labeldata[1])
          }
          console.log(this.labeldata)
          console.log(this.realdata)
          this.RenderChart(this.labeldata,this.realdata,'bar','piechart1',this.colordata);
        }})

       
      //piechart2
      this.budgetData=[]
        this.http.post("http://localhost:8086/showExpense", data).subscribe(  (resultData: any) => {
     
        if (resultData.status)
        {
          console.log(resultData.data.data);
          let i:number =0;
          for(i=0;i<resultData.data.data.length;i++)
          {
              this.budgetData[i]=Object.assign({},resultData.data.data[i]);
              
          }
          console.log("helllo")
          console.log(this.budgetData)
          this.realdata=[];
          this.labeldata=[];
          this.colordata=[];
          for(i=0;i<this.budgetData.length;i++)
          {
              this.realdata.push(this.budgetData[i].amt);
              const c=this.getRandomColor();
              this.colordata.push(c);
              this.labeldata.push(this.budgetData[i].category);
          }
          console.log(this.labeldata);
          console.log(this.realdata);
          this.RenderChart(this.labeldata,this.realdata,'bar','piechart2',this.colordata);
        }})
        
      }
        
        RenderChart(labeldata:any,realdata:any,type:any,id:any,colordata:any){
          const chart=new Chart(id,{
            type:type,
            data:{
              labels:labeldata,
              datasets:[{
                  label:"Bar chart",
                  data:realdata,
                  backgroundColor:colordata,
                  borderColor:[''],
                  borderWidth:1
              
                }]
              },
            options:{scales:{beginAtZero:false}},
              
            }
          );
        }    
}