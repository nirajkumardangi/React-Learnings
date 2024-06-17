import Meals from "./Meals";

export default function Header() {
  return (
    <>
      <header id="main-header">
        <h1 id="title">
          <img src="logo.jpg" alt="logo" />
          <span>Order Food</span>
        </h1>
        <button className="button">Cart (0)</button>
      </header>
      
      <Meals />
    </>
  );
}
