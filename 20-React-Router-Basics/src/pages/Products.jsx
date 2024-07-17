import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Products 1" },
  { id: "p2", title: "Products 2" },
  { id: "p3", title: "Products 3" },
];

export default function Products() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul style={{ listStyleType: "none" }}>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
