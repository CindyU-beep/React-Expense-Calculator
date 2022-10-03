import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/CardObj';
import './Expenses.css';


function Expenses(props){

  const [filteredYear, setFiltereedYear] = useState('2022'); //sets the default value of filter

  const filterChangeHandler = selectedYear => {
    console.log("Expense.js")
    setFiltereedYear(selectedYear);
    };

    return( 
      
      <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        
        </Card> 
      </div>
    );
}
export default Expenses;