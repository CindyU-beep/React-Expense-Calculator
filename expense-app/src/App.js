import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense"
import background from './background.jpg'
const DUMMY_EXPENSE_DATA = [
  { 
    id: 'e1',
    title: "Grocceries", 
    amount: 100, 
    date: new Date(2022, 0, 28) 
  },
  { 
    id: 'e2',
    title: "Rent",  
    amount: 800, 
    date: new Date(2022, 1, 21) 
  },
  { 
    id: 'e3',
    title: "Travel", 
    amount: 200, 
    date: new Date(2022, 1, 15) 
  },
  { 
    id: 'e4',
    title: "Grocceries", 
    amount: 400, 
    date: new Date(2022, 3, 28) 
  },
  { 
    id: 'e5',
    title: "Electricity", 
    amount: 500, 
    date: new Date(2022, 4, 6) 
  },
  { 
    id: 'e6',
    title: "Phone", 
    amount: 80, 
    date: new Date(2022, 5, 13) 
  },
  { 
    id: 'e7',
    title: "Entertainment", 
    amount: 700, 
    date: new Date(2022, 8, 28) 
  },
  { 
    id: 'e8',
    title: "Entertainment", 
    amount: 700, 
    date: new Date(2022, 8, 28) 
  },
  { 
    id: 'e8',
    title: "Other", 
    amount: 800, 
    date: new Date(2022, 10, 28) 
  },
  { 
    id: 'e8',
    title: "Other", 
    amount: 650, 
    date: new Date(2022, 11, 28) 
  },
  { 
    id: 'c1',
    title: "Entertainment", 
    amount: 650, 
    date: new Date(2020, 8, 28) 
  },
  { 
    id: 'd1',
    title: "Entertainment", 
    amount: 500, 
    date: new Date(2021, 8, 28) 
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
