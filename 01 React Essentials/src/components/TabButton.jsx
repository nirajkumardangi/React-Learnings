/* eslint-disable react/prop-types */

function TabButton({children, onSelect}) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  )
}

export default TabButton;