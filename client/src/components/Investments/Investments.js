import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

import InvestmentForm from './InvestmentForm';

function Investments() {
    const {addInvestment, investments, getInvestments, deleteInvestment, totalInvestments} = useGlobalContext()

    useEffect(() =>{
        getInvestments()
    }, [])
    return (
        <InvestmentStyled>
            <InnerLayout>
                <h1>Investments</h1>
                <h2 className="total-income">Total Investment: <span>${totalInvestments()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <InvestmentForm />
                    </div>
                    <div className="incomes">
                        {investments.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteInvestment}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </InvestmentStyled>
    )
}

const InvestmentStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Investments