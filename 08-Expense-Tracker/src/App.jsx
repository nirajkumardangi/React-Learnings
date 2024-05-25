import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { expensesData } from "./components/Expenses/expensesData";

export default function App() {
  const [expenses, setExpenses] = useState(expensesData);
  const [filteredYear, setFilteredYear] = useState("2022");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: `e${prevExpenses.length + 1}` },
    ]);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYear={filterChangeHandler}
      />
      <Expenses items={filteredExpenses} />
    </>
  );
}
