import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = useState();
  // const [enteredAmount, setEnteredAmount] = useState();
  // const [enteredDate, setEnteredDate] = useState();
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  })

  function titleChangeHandler(event) {
    // setEnteredTitle(event.target.value)
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  }

  function amountChangeHandler(event) {
    // setEnteredAmount(event.target.value)
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  }

  function dateChangeHandler(event) {
    // setEnteredADate(event.target.value)
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  }

  console.log(enteredAmount);
  console.log(enteredTitle);
  console.log(enteredDate);

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
