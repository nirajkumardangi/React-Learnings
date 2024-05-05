import { useState } from "react";

export default function Player({initialName, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handelEditClick(){
    setIsEditing((editing) => !editing); 
    // best practice if you are updating state based on previous state value instead of - !isEditing
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
 
  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  // let btnCaption = 'Edit'
  
  if(isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    // btnCaption= "Save"
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        
        {/* {isEditing ? <input type="text" required /> : <span className='player-name'>{name}</span>} */}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}