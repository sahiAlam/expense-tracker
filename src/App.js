import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2022, 7, 7),
    title: "Rent Charge",
    amount: 200,
  },
  {
    id: 2,
    date: new Date(2022, 8, 27),
    title: "School Fees",
    amount: 100,
  },
  {
    id: 3,
    date: new Date(2023, 10, 10),
    title: "Meal Charge",
    amount: 120,
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
