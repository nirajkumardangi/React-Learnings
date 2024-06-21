import { useContext } from "react";
import { currencyFormatter } from "../util/formatter";
import CartContext from "../context/CartContext";
import Modal from "./UI/Modal";
import UserProgressContext from "../context/UserProgressContext";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Checkout() {
  const { items } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCheckout() {
    hideCheckout();
  }

  return (
    <Modal
      className="checkout"
      open={progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
