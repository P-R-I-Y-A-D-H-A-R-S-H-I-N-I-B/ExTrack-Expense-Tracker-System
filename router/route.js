const express = require('express');
const router = express.Router();
var userController = require('D:/college/CSE/sem6/ExpenseTrackerSystem/backend/src/userController.js');
router.route('/login').post(userController.loginUserControllerFn);
router.route('/signuup').post(userController.createUserControllerFn);

router.route('/addpolicy').post(userController.policyControllerFn);
router.route('/delpolicy').post(userController.delpolicyControllerFn);  
router.route('/updatepolicy').post(userController.updatepolicyControllerFn);
router.route('/showpolicy').post(userController.showPolicy);

router.route('/addbudget').post(userController.budgetControllerFn);
router.route('/delbudget').post(userController.delbudgetControllerFn);  
router.route('/updatebudget').post(userController.updatebudgetControllerFn); 
router.route('/showbudget').post(userController.showbudget);


router.route('/showExpense').post(userController.showExpense);
router.route('/cards').post(userController.createCardControllerFn); 
router.route('/fetchCards').post(userController.getCards); 
router.route('/expense').post(userController.createExpenseControllerFn); 
router.route('/showExpense').post(userController.showExpense); 
router.route('/updateExpense').post(userController.updateExpense);
router.route('/deleteExpense').post(userController.deleteExpense);
router.route('/deleteBank').post(userController.deleteBank);
router.route('/showBank').post(userController.showBank);
router.route('/updateBank').post(userController.updateBank);

module.exports = router;