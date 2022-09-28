import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense"

const App = () => { //alternative syntax using arrow functions

  const expenses = [
    { 
      title: "Grocceries", 
      amount: 100, 
      date: new Date(2022, 1, 28) 
    },
    { 
      title: "Rent",  
      amount: 500, 
      date: new Date(2022, 1, 30) 
    },
    { 
      title: "Travel", 
      amount: 200, 
      date: new Date(2022, 1, 15) 
    },

  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );

}

export default App;
