import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { FaMinusCircle } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FcPlus size='1.5em' onClick={(event) => increaseAllocation(props.name)}></FcPlus></td>
            <td><FaMinusCircle size='1.5em' onClick={(event) => decreaseAllocation(props.name)}></FaMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );

};

export default ExpenseItem;

