import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense"
import background from './background.jpg'
const DUMMY_EXPENSE_DATA = [
  { 
    id: 'e1',
    title: "Grocceries", 
    amount: 100, 
    date: new Date(2022, 1, 28) 
  },
  { 
    id: 'e2',
    title: "Rent",  
    amount: 500, 
    date: new Date(2022, 1, 30) 
  },
  { 
    id: 'e3',
    title: "Travel", 
    amount: 200, 
    date: new Date(2022, 1, 15) 
  },

];

const App = () => { //alternative syntax using arrow functions
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE_DATA);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return[expense,...prevExpenses]; //new expense as first data elem, copy all prev expenses
    });
  };

  return (
    <div style={{backgroundImage:`url(${background})`, backgroundSize:"contain"}}>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );

}

export default App;
