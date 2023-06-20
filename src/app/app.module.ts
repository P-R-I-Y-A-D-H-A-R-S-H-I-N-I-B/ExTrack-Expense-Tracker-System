import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



import { AccountComponent } from './account/account.component';

import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { SubscriptionComponent } from './subscription/subscription.component';


import { DelpolicyComponent } from './delpolicy/delpolicy.component';
import { UpdatepolicyComponent } from './updatepolicy/updatepolicy.component';
import { ShowpolicyComponent } from './showpolicy/showpolicy.component';
import { PolicyComponent } from './policy/policy.component';


import { BudgetComponent } from './budget/budget.component';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetChartComponent } from './budget-chart/budget-chart.component';

import { BankComponent } from './bank/bank.component';
import { ViewBankComponent } from './view-bank/view-bank.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';



import { ExpenseComponent } from './expense/expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import { ViewUpdateComponent } from './view-update/view-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Home1Component,
    Home2Component,

    ExpenseComponent,
    ViewExpenseComponent,
    ViewUpdateComponent,

    UpdateBankComponent,
    ViewBankComponent,
    BankComponent,


    BudgetComponent,
    BudgetViewComponent,
    BudgetChartComponent,
    
    PolicyComponent,
    DelpolicyComponent,
    UpdatepolicyComponent,
    ShowpolicyComponent,
    
    AccountComponent,
    SubscriptionComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
