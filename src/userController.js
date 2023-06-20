var userModel =require('./userModel');
var policyModel =require('./policyModel');
var userService=require('./userService');

var cardModel =require('./cardModel');
var expenseModel =require('./expenseModel');
var budgetModel =require('./budgetModel');
var userService1=require('./budgetService');

//register
var createUserControllerFn = async (req, res) =>
{
    try
    {
        const body= req.body;
        const userModelData = new userModel();
        userModelData.name = body.name;
        userModelData.email = body.email;
        userModelData.pwd = body.pwd;
        await userModelData.save();
        res.status(200).send({
            "status":true,"message": "User created successfully"
        });
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}
//login
var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}
//for adding policy
var policyControllerFn = async (req, res) =>
{
    try
    {
        const body= req.body;
        const policyModelData = new policyModel();
        
        policyModelData.email = body.email;
        policyModelData.pname = body.pname;
        policyModelData.company = body.company;
        policyModelData.sdate = body.sdate;
        policyModelData.edate = body.edate;
        policyModelData.amnt = body.amnt;
        policyModelData.cardname = body.cardname;
        await policyModelData.save();
        res.status(200).send({
            "status":true,"message": "Policy created successfully"
        });
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}

//delete policy function

var delpolicyControllerFn = async (req, res) =>
{
    var result = null;
    try {
        result = await userService.delPolicyDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

//update policy function
var updatepolicyControllerFn = async (req, res) =>
{
    var result = null;
    try {
        result = await userService.updatePolicyDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
            try
            {
                const body= req.body;
                const policyModelData = new policyModel();
        
                policyModelData.email = body.email;
                policyModelData.pname = body.pname;
                policyModelData.company = body.company;
                policyModelData.sdate = body.sdate;
                policyModelData.edate = body.edate;
                policyModelData.amnt = body.amnt;
                policyModelData.cardname = body.cardname;
                await policyModelData.save();
                res.status(200).send({
                   "status":true,"message": "Policy updated successfully"
             });
            }
             catch(error)
            {
                console.log(error);
                 res.status(400).send(error);
             }

        } 
        else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

//Display the policy details

var showPolicy = async (req, res) => {
    var result = null;
    try {
        result = await userService.showPolicyService(req.body);
        if (result.status) {
            res.send({ "status": true, "data": result });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}


//for adding budget
var budgetControllerFn = async (req, res) =>
{
    try
    {
        const body= req.body;
        const budgetModelData = new budgetModel();
        budgetModelData.email = body.email;
        budgetModelData.budgetCategory=body.budgetCategory
        budgetModelData.budgetAmount = body.budgetAmount;

        await budgetModelData.save();
        res.status(200).send({
            "status":true,"message": "budget created successfully"
        });
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}

//delete budget function

var delbudgetControllerFn = async (req, res) =>
{
    var result = null;
    try {
        result = await userService1.delbudgetDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

//update budget function
var updatebudgetControllerFn = async (req, res) =>
{
    var result = null;
    try {
        result = await userService1.updatebudgetDBService(req.body);
        if (result.status) 
            res.send({ "status": true, "message": result.msg });
        else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var showbudget = async (req, res) => {
    var result = null;
    try {
        result = await userService1.showbudgetService(req.body);
        
        if (result.status) {
            res.send({ "status": true, "data": result });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}


var createCardControllerFn = async (req, res) =>
{
    try
    {
        const body= req.body;
        const cardModelData = new cardModel();
        cardModelData.bname = body.bname;
        cardModelData.cname = body.cname;
        cardModelData.email = 'priya@gmail.com';
        cardModelData.amt = body.amt;
        cardModelData.ano = body.ano;
        cardModelData.card = body.cards;
 
        await cardModelData.save();
        res.status(200).send({
            "status":true,"message": "Card Added successfully"
        });
    }
    catch(error)
    {
        alert("cannot add card details");
        console.log(error);
        res.status(400).send(error);
    }
}
var getCards = async (req, res) => {
    var result = null;
    try {
        result = await userService.getCardsService(req.body);
        if (result.status) {
            res.send({ "status": true, "data": result });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var showExpense = async (req, res) => {
    var result = null;
    try {
        result = await userService.showExpenseService(req.body);
        if (result.status) {
            res.send({ "status": true, "data": result });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var showBank = async (req, res) => {
    var result = null;
    try {
        result = await userService.showBankDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "data": result });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

/*
var createExpenseControllerFn =async (req, res) =>
{
    try
    {
        const body= req.body;
        const expenseModelData = new expenseModel();
        expenseModelData.email = body.email;
        expenseModelData.amt = body.amt,
        expenseModelData.s_date = body.s_date,
        expenseModelData.money = body.money,
        expenseModelData.cash = body.cash,
        expenseModelData.cards = body.cards,
        expenseModelData.category = body.category,
        expenseModelData.description = body.description,
        
        result = await userService.expenseDBService(body);
        if (result.status) {
            await expenseModelData.save();
             res.send({
            "status":true,"message": "Details added successfully"
        });
        }
        else{
            res.send({ "status": false, "message": result.msg });
        }
        
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}
*/
var createExpenseControllerFn =async (req, res) =>
{
    try
    {
        const body= req.body;
        const expenseModelData = new expenseModel();
        expenseModelData.email = body.email;
        expenseModelData.amt = body.amt,
        expenseModelData.s_date = body.s_date,
        expenseModelData.money = body.money,
        expenseModelData.cash = body.cash,
        expenseModelData.cards = body.cards,
        expenseModelData.category = body.category,
        expenseModelData.description = body.description;
        if(body.cash == "Net Banking")
        {
            result = await userService.expenseDBService(body);
        if (result.status) {
            await expenseModelData.save();
             res.send({
            "status":true,"message": "Details added successfully"
        });
        }
        else{
            res.send({ "status": false, "message": result.msg });
        }
        
        }
        else{
            await expenseModelData.save();
            res.status(200).send({
                "status":true,"message": "User created successfully"
            });
        }
        
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}
var updateExpense =async (req, res) =>
{
    try
    {        
        result = await userService.updateExpenseDBService(req.body);
        if (result.status) {
             res.send({
            "status":true,"message": "Details added successfully"
        });
        }
        else{
            res.send({ "status": false, "message": result.msg });
        }
        
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}

var updateBank =async (req, res) =>
{
    try
    {      
        result = await userService.updateBankDBService(req.body);
        if (result.status) {
             res.send({
            "status":true,"message": "Details updated successfully"
        });
        }
        else{
            res.send({ "status": false, "message": result.msg });
        }
        
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}

var deleteExpense =async (req, res) =>
{
    try
    {        
        result = await userService.deleteExpenseDBService(req.body);
        if (result.status) {
             res.send({
            "status":true,"message": "Deleted successfully"
        });
        }
        else{
            res.send({ "status": false, "message": result.msg });
        }
        
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}

var deleteBank =async (req, res) =>
{
    try
    {        
        result = await userService.deleteBankDBService(req.body);
        if (result.status) {
             res.send({
            "status":true,"message": "Deleted successfully"
        });
        }
        else{
            res.send({ "status": false, "message": result.msg });
        }
        
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send(error);
    }
}


var createCardControllerFn = async (req, res) =>
{
    try
    {
        const body= req.body;
        const cardModelData = new cardModel();
        cardModelData.bname = body.bname;
        cardModelData.cname = body.cname;
        cardModelData.email = body.email;
        cardModelData.amt = body.amt;
        cardModelData.ano = body.ano;
        cardModelData.card = body.cards;
 
        await cardModelData.save();
        res.status(200).send({
            "status":true,"message": "Card Added successfully"
        });
    }
    catch(error)
    {
        
        console.log(error);
        res.status(400).send(error);
    }
}


module.exports={createUserControllerFn,loginUserControllerFn,policyControllerFn,delpolicyControllerFn,updatepolicyControllerFn,
                showPolicy,budgetControllerFn,delbudgetControllerFn,showbudget,updatebudgetControllerFn,createUserControllerFn,
                createCardControllerFn,getCards,createExpenseControllerFn,showExpense,updateExpense,deleteExpense,showBank,updateBank,deleteBank};