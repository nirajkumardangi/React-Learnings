import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);

  function handelEditClick(){
    return setIsEditing(true);
  }

  let playerName = <span className='player-name'>{name}</span>;
  
  if(isEditing) {
    playerName = <input type="text" required />
  }

  return (
    <li>
      <span className="player">
        {playerName}
        
        {/* {isEditing ? <input type="text" required /> : <span className='player-name'>{name}</span>} */}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>Edit</button>
    </li>
  )
}