import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>HomePage</h1>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}
