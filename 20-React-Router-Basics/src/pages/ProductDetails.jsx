import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>The Product Details Page</h1>
      <b>{params.productId}</b>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
