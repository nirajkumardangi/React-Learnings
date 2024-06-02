import classes from "./Button.module.css";

export default function Button({onClick, children}) {
  // console.log(props);
  return (
    <button onClick={onClick} className={classes.button}>{children}</button>
  )
}
