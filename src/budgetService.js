var budgetModel = require('./budgetModel');

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


