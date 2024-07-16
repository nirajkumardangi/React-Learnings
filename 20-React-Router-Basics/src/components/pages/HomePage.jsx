import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/products">Product Page</Link>
      </p>
    </>
  );
}
