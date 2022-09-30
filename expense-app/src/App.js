import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense"

const App = () => { //alternative syntax using arrow functions

  const expenses = [
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

  const addExpenseHandler = expense => {
    console.log('In App js')
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );

}

export default App;
