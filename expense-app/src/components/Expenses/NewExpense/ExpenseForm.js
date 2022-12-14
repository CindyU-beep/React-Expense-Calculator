import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle:"",
        enteredAmount: "",
        enteredDate:""
    });

    const titleChangeHandler = (event) => { 
        setUserInput((prevState) => { //if state update depends on prev state
            return {...prevState, enteredTitle: event.target.value }; 
        });
    };

    const amountChangeHandler = (event) => { 
        setUserInput((prevState) => { //if state update depends on prev state
            return {...prevState, enteredAmount: event.target.value }; 
        });
    };  

    const dateChangeHandler = (event) => { 
    setUserInput((prevState) => { //if state update depends on prev state
        return {...prevState, enteredDate: event.target.value }; 
        });
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        //reset component
        setUserInput({enteredTitle: '', enteredAmount : '',enteredDate :''})

        
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls"> 
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={userInput.enteredTitle} 
                        onChange={titleChangeHandler} 
                    /> {//adding in event listener onChange
                    }
                </div>

                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input 
                        type="number" min="0.01" step="0.01" 
                        value ={userInput.enteredAmount} 
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__controls">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" max="2022-12-31" 
                        value ={userInput.enteredDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add New Expense</button>
                </div>

            </div>
        </form>

    );
}

export default ExpenseForm;