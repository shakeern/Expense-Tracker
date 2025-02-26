import axios from "axios"
import React, { useContext, useState } from "react"

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
    
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext=()=>{
    return useContext(GlobalContext)       
}