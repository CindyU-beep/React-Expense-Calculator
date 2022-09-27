import Expenses from "./components/Expenses";
function App() {

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
      <h2>Let's Get Started:</h2>
      <Expenses items={expenses}/>
    </div>
  );

}

export default App;
