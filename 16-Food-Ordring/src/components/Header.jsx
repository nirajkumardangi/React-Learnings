import { useContext } from "react";
import Button from "./UI/Button";
import CartContext, { CartContextProvider } from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";

export default function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);

  const totalCartItems = items.reduce(
    (totalNumberOfItems, item) => totalNumberOfItems + item.quantity,
    0
  );

  function handleShowCart() {
    showCart();
  }

  return (
    <>
      <header id="main-header">
        <h1 id="title">
          <img src="logo.jpg" alt="logo" />
          <span>Order Food</span>
        </h1>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </header>
    </>
  );
}
