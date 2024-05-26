import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { expensesData } from "./components/Expenses/expensesData";
import ExpenseChart from "./components/Expenses/ExpenseChart";

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

  console.log(filteredExpenses);

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseChart items={filteredExpenses} />
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYear={filterChangeHandler}
      />
      <Expenses items={filteredExpenses} />
    </>
  );
}
