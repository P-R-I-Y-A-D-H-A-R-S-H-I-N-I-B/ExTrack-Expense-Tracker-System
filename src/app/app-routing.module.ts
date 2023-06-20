import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { Home1Component } from './home1/home1.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Home2Component } from './home2/home2.component';
import { PolicyComponent } from './policy/policy.component';
import { BudgetComponent } from './budget/budget.component';
import { AccountComponent } from './account/account.component';
import { ExpenseComponent } from './expense/expense.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DelpolicyComponent } from './delpolicy/delpolicy.component';
import { UpdatepolicyComponent } from './updatepolicy/updatepolicy.component';
import { ShowpolicyComponent } from './showpolicy/showpolicy.component';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { ViewBankComponent } from './view-bank/view-bank.component';
import { BankComponent } from './bank/bank.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { ViewUpdateComponent } from './view-update/view-update.component';
import { CactivateGuard } from './canactivate.guard';
import { BudgetChartComponent } from './budget-chart/budget-chart.component';

const routes: Routes = [
  {path:'',component:Home1Component},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home2',component:Home2Component,canActivate:[CactivateGuard]},

  {path:'home2/expense',component:ExpenseComponent},


  {path:'home2/view-bank',component:ViewBankComponent,canActivate:[CactivateGuard]},
  {path:'home2/view-bank/bank',component:BankComponent,canActivate:[CactivateGuard]},
  {path:'home2/view-bank/update-bank',component:UpdateBankComponent,canActivate:[CactivateGuard]},


  {path:'home2/view-expense',component:ViewExpenseComponent,canActivate:[CactivateGuard]},
  {path:'home2/view-expense/expense',component:ExpenseComponent,canActivate:[CactivateGuard]},
  {path:'home2/view-expense/view-update',component:ViewUpdateComponent,canActivate:[CactivateGuard]},

  {path:'home2/policy',component:PolicyComponent,canActivate:[CactivateGuard]},
  {path:'home2/policy/delPolicy',component:DelpolicyComponent,canActivate:[CactivateGuard]},
  {path:'home2/policy/updatePolicy',component:UpdatepolicyComponent,canActivate:[CactivateGuard]},
  {path:'home2/policy/showPolicy',component:ShowpolicyComponent,canActivate:[CactivateGuard]},
  
  {path:'home2',component:Home2Component,canActivate:[CactivateGuard]},


  {path:'home2/subscription',component:SubscriptionComponent},

  {path:'home2/budget-view/budget',component:BudgetComponent,canActivate:[CactivateGuard]},
  {path:'home2/budget-view',component:BudgetViewComponent,canActivate:[CactivateGuard]},
  {path:'home2/budget-view/budget-chart',component:BudgetChartComponent,canActivate:[CactivateGuard]},
  {path:'home2/budget-view/budget/:cat/:email',component:BudgetComponent,canActivate:[CactivateGuard]},


  {path:'home2/account',component:AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
