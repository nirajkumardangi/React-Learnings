import Button from "./UI/Button";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <h1 id="title">
          <img src="logo.jpg" alt="logo" />
          <span>Order Food</span>
        </h1>
        <Button textOnly>Cart (0)</Button>
      </header>
    </>
  );
}
