import axios from "axios"
import React, { useContext, useState } from "react"
import Expenses from "../components/Expenses/Expenses";

const BASE_URL = "http://localhost:3000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [investments, setInvestments] = useState([])
    const[error, setError] = useState(null)

    const addIncome = async (income)=> {
        const response = await axios.post(`${BASE_URL}add-income`,income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async ()=> {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data);
        
    }
    

    const deleteIncome =  async(id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        return totalIncome;
    }
    //calculate incomes
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    const addInvestment = async (income) => {
        const response = await axios.post(`${BASE_URL}add-investment`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getInvestments()
    }

    const getInvestments = async () => {
        const response = await axios.get(`${BASE_URL}get-investments`)
        setInvestments(response.data)
        console.log(response.data)
    }

    const deleteInvestment = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-investment/${id}`)
        getInvestments()
    }

    const totalInvestments = () => {
        let totalIncome = 0;
        investments.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses, ...investments];
        
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
        return history.slice(0, 3);
    };
    

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense, 
            getExpenses,
            deleteExpense,
            expenses,
            totalExpenses,
            addInvestment,
            getInvestments,
            investments,
            deleteInvestment,
            totalInvestments,
            totalBalance,
            transactionHistory,
            error

        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext=()=>{
    return useContext(GlobalContext)       
}