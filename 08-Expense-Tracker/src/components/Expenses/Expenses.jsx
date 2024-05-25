import ExpenseItem from "./ExpenseItem";
import { expensesData } from "./expensesData";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses() {
  return (
    <Card className="expenses">
      {expensesData.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
}
