import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const timerId = React.useRef(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <>
      <div>
        <p>seconds:{seconds}</p>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
