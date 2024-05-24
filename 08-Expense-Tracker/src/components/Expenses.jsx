import ExpenseItem from "./ExpenseItem";
import { expensesData } from "./expensesData";
import "./Expenses.css";

export default function Expenses() {
  return (
    <div className="expenses">
      {expensesData.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
}
