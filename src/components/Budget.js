import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The budget cannot exceed $20,000");
            return;
        }
        if (event.target.value < totalExpenses) {
            alert("The budget cannot be lower than total expenses");
            return;
        }
        setNewBudget(event.target.value);
    }
    return(
        <div className='alert alert-secondary'>
            <span>Budget: { currency }</span>
            <input
                type="number"
                step="10"
                max="20000"
                value={newBudget}
                onChange={handleBudgetChange}
            >
            </input>
        </div>
    );
};

export default Budget;
