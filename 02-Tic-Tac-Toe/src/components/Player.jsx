import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);

  function handelEditClick(){
    setIsEditing((editing) => !editing); 
    // best practice if you are updating state based on previous state value instead of - !isEditing
  }

  let playerName = <span className='player-name'>{name}</span>;
  // let btnCaption = 'Edit'
  
  if(isEditing) {
    playerName = <input type="text" required value={name} />
    // btnCaption= "Save"
  }

  return (
    <li>
      <span className="player">
        {playerName}
        
        {/* {isEditing ? <input type="text" required /> : <span className='player-name'>{name}</span>} */}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}