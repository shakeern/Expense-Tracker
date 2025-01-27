const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addInvestment, getInvestments, deleteInvestment } = require('../controllers/investment');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/add-investment', addInvestment)
    .get('/get-investments', getInvestments)
    .delete('/delete-investment', deleteInvestment)

module.exports = router