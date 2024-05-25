import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ onAddExpense }) {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  );
}
