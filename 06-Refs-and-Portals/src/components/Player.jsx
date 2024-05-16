import { useState, useRef } from "react";

export default function Player() {
  const [userName, setUserName] = useState(null);
  const playerName = useRef();

  function handelClick() {
    setUserName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {userName ?? 'Unknown User'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
