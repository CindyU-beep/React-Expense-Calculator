import React, { useState } from 'react'; //declearing the state of a function 
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/CardObj';
import "./ExpenseItem.css";

function ExpenseItem(props) {
    //array destructuring to swap values of two or more variables. 
    //setTitle is the updating function
    const [title, setTitle] = useState(props.title); //react hooks always start with the word 'use' can only be used within react component functions. Does not work with nested functions.
    const clickHandler = () =>{
        setTitle("updated"); //use setTitle to update the value of title
        console.log(title);
    };

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item_description'>
                <h2>{title} </h2>
                <div className='expense-item__price'>${props.amount}</div> 
            </div>
            <button onClick={clickHandler}>Test Button</button>
        </Card>
    );
}
export default ExpenseItem;