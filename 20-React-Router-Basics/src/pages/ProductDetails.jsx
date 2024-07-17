import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>ProductDetails</h1>
      <ul style={{listStyleType: "none"}}>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
      </ul>
      <b>{params.productId}</b>
    </>
  );
}
