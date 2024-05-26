import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.length === 0 ? (
        <h2>No expenses found</h2>
      ) : (
        items.map((expense) => <ExpenseItem key={expense.id} {...expense} />)
      )}
    </Card>
  );
}
