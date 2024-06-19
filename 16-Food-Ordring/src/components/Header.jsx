import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../context/CartContext";

export default function Header() {
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );

  return (
    <>
      <header id="main-header">
        <h1 id="title">
          <img src="logo.jpg" alt="logo" />
          <span>Order Food</span>
        </h1>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </header>
    </>
  );
}
