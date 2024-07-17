import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul className={classes.header}>
          <li className={classes.list}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   fontSize: isActive ? "1.2rem" : "1rem",
              // })}
              end
            >
              Home
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }

              // style={({ isActive }) => ({
              //   fontSize: isActive ? "1.2rem" : "1rem",
              // })}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
