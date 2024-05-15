import { useState } from "react";

export default function Player() {

  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handelChange(e) {
    setSubmitted(false);
    setUserName(e.target.value);
  }

  function handelClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? userName : 'Unknown User'}</h2>
      <p>
        <input type="text" onChange={handelChange} value={userName} />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
