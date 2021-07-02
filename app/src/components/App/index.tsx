import { useState, useEffect } from 'react';
import './App.scss';

export function App() {
  const [num, setNum] = useState(null);
  const [numLoading, setNumLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000);
    return () => {
      clearInterval(timerID)
    }
  });
  useEffect(() => {
    if (numLoading) {
      fetch('/rnd')
        .then(resp => resp.json())
        .then(data => {
          setNumLoading(false);
          setNum(data.rnd);
        })
        .catch((reason) => console.log(reason));
    }
  }, [numLoading]);
  const tick = () => setDate(new Date());
  return (
    <div className="App">
      <header className="App-header">
        Hello World 👋! <br />
        The current time is {date.toLocaleTimeString()}. <br />
        Your number is {num}.
        <button onClick={() => {setNumLoading(true)}}>
          Click here to get a new number!
        </button>
      </header>
    </div>
  );
}