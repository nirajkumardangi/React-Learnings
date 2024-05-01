/* eslint-disable react/prop-types */
function TabButton({children}) {
  function handelClick() {
    console.log("Hello World");
  }

  return (
    <li>
      <button onClick={handelClick}>{children}</button>
    </li>
  )
}

export default TabButton;