import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className={classes.header}>
          <li className={classes.list}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.list}>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
