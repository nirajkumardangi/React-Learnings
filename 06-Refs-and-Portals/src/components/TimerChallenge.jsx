import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handelStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
        dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handelStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {<ResultModal ref={dialog} targetTime={targetTime} result='lost' />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handelStop : handelStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
        </p>
        <p className="">
          {timerStarted ? 'Time is Running...' : 'Timer Inactive'}
        </p>
      </section>
    </>
  );
}