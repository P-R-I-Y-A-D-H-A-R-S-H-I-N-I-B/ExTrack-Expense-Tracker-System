
var userModel = require('./userModel');
var policyModel = require('./policyModel');
var budgetModel = require('./budgetModel');

var cardModel = require('./cardModel');
var expenseModel = require('./expenseModel');

module.exports.loginuserDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      userModel.findOne({ email: userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               if(result.pwd == userDetails.pwd)
               {
                  resolve({status: true,msg: "User Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "User Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "User Error Detailssss"});
            }
 
         }
      
      });
      
   });
}

//delete policy
module.exports.delPolicyDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      policyModel.deleteOne({ pname:userDetails.pname},{ email:userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Policy Name or Email"});
            console.log({status: false, msg: "Invaild Policy Name or Email"});
         }
         else
         {
            
                  resolve({status: true,msg: "Policy deleted Successfully"});
                  console.log({status: false, msg: "Policy deleted successfully"});
              
         }
            
      });
      
   });
}

//update Policy
module.exports.updatePolicyDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      policyModel.deleteOne({ pname:userDetails.pname},{ email:userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Policy Name or Email"});
            console.log({status: false, msg: "Invaild Policy Name or Email"});
         }
         else
         {
            
                  resolve({status: true,msg: "Policy updated  Successfully"});
                  console.log({status: true, msg: "Policy updated successfully"});
              
         }
            
      });
      
   });
}

//display policy


module.exports.showPolicyService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      policyModel.find({ email: userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
               console.log("Fetched Successfully")
               console.log(result);
               resolve({ "status": true, "data": result });
            }          
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}

//delete budget
module.exports.delbudgetDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      budgetModel.deleteOne({ budgetCategory:userDetails.budgetCategory},{ email:userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild budget Name or Email"});
            console.log({status: false, msg: "Invaild budget Name or Email"});
         }
         else
         {
            
                  resolve({status: true,msg: "budget deleted Successfully"});
                  console.log({status: false, msg: "budget deleted successfully"});
              
         }
            
      });
      
   });
}

//update budget
module.exports.updatebudgetDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      console.log(userDetails)
      n=budgetModel.findOneAndUpdate({$and :[{email:userDetails.email},{budgetCategory:userDetails.budgetCategory}]},{$set:{email:userDetails.email,budgetCategory:userDetails.budgetCategory,budgetAmount:userDetails.budgetAmount}},{upsert:true}).then(function getresult(result, errorvalue)
      {
         console.log('inside db update service..')
         console.log(n)
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild budget Name or Email"});
            console.log({status: false, msg: "Invaild budget Name or Email"});
         }
         else
         {
                  resolve({status: true,msg: "budget updated  Successfully"});
                  console.log({status: true, msg: "budget updated successfully"});
              
         }
            
      });
      
   });
}
//fetch budget
module.exports.showbudgetService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      budgetModel.find({ email: userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
               console.log("Fetched Successfully")
               console.log(result);
               resolve({ "status": true, "data": result });
            }          
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}


//rein code 

module.exports.getCardsService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      cardModel.find({ email: userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
               console.log("Fetched Successfully")
               resolve({ "status": true, "data": result });
            }          
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Choose a card"});   
            }   
      });      
   });
}

module.exports.showExpenseService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      expenseModel.find({ email: userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
               console.log("Fetched Successfully")
               console.log(result);
               resolve({ "status": true, "data": result });
            }          
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}

module.exports.showBankDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      cardModel.find({ email: userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
               console.log("Fetched Successfully")
               console.log(result);
               resolve({ "status": true, "data": result });
            }          
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}


module.exports.expenseDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      cardModel.findOne({ email: userDetails.email,cname:userDetails.cards}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
               income = (+result.amt)+(+userDetails.amt);
               expense = (+result.amt)-(+userDetails.amt);
               console.log(expense);
               if(userDetails.money=="Income")
               {
                  cardModel.findOneAndUpdate({ email: userDetails.email,cname:userDetails.cards},{$set :{ amt : income}},{new:true})
                  resolve({ "status": true, "message": "Updated Successfully" });
               }
               else
               {
                  if(expense>=0)
                  {
                     cardModel.findOneAndUpdate({ email: userDetails.email,cname:userDetails.cards},{$set :{ amt : expense}},{new:true});
                  resolve({ "status": true, "message": "Updated Successfully" });
                  }
                  else
                  {
                     resolve({status: false,msg: "No enough money"}); 
                  }
               }
            }          
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}

/*
module.exports.updateExpenseDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      expenseModel.findOne({ _id: userDetails._id}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         
          else if(result !=undefined &&  result !=null)
            {
               
         cardModel.findOneAndUpdate({_id: userDetails._id},{$set :{ email:userDetails.email,amt : userDetails.amt,s_date:userDetails.s_date,money:userDetails.money,cash:userDetails.cash,cards:userDetails.cards
            ,category:userDetails.category, description:userDetails.description}},{new:true})
             resolve({
            "status":true,"message": "Updated  successfully"
           });
           }
                 
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}
*/
module.exports.updateExpenseDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      expenseModel.findOne({ _id: userDetails._id}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else 
          if(result !=undefined &&  result !=null)
         {
               expenseModel.findOneAndUpdate({_id: userDetails._id},{$set :{ email:userDetails.email,
               amt : userDetails.amt,s_date:userDetails.s_date,money:userDetails.money,
               cash:userDetails.cash,cards:userDetails.cards
               ,category:userDetails.category, description:userDetails.description}},{new:true}).then(data => {
               resolve({status: true})
            }, err => {
               console.log("Error Update in Index1", err);
               reject("Update User Failed");
            }); 
            
                                 
                            
          }

                        
             
         });   
   });
}

module.exports.updateBankDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      cardModel.findOne({ cname: userDetails.cname}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
               console.log(result)
               console.log(userDetails.amt);
         cardModel.findOneAndUpdate({cname: userDetails.cname},{$set :{
            bname:userDetails.bname,amt : userDetails.amt,ano:userDetails.ano,cards:userDetails.cards
            ,category:userDetails.category, description:userDetails.description}},{new:true}).then(data => {
               console.log("Data", data);
               resolve(data);
           }, err => {
               console.log("Error Update in Index1", err);
               reject("Update User Failed");
           });
             resolve({
            "status":true,"message": "Updated  successfully"
        });
      }     
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}

module.exports.deleteExpenseDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      expenseModel.deleteOne({ _id: userDetails._id}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
                  resolve({ "status": true, "message": "Updated Successfully" });
            }         
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}

module.exports.deleteBankDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      console.log(userDetails.cname,userDetails.email)
      cardModel.deleteOne({cname: userDetails.cname},{email:userDetails.email}).then(function getresult(result, errorvalue)
      {
         if(errorvalue)
            reject({status: false, msg: "Invaild Data"});
         else
            if(result !=undefined &&  result !=null)
            {
                  resolve({ "status": true, "message": "Deleted Successfully" });
            }         
            else
            {
               console.log("Error Value");
               reject({status: false,msg: "Error"});   
            }   
      });      
   });
}