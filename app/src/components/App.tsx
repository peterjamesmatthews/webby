import React, { useState, useEffect } from 'react';

import '../styles/App.scss';

export default function App() {
  const [state, setState] = useState({
    num: null,
    date: new Date(),
  });
  const tick = () => setState({ ...state, date: new Date() });
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
  useEffect(() => {
    if (state.num === null) {
      fetch('/rnd')
        .then((resp) => resp.json())
        .then((data) => {
          setState({ ...state, num: data.rnd });
        })
        .catch((reason) => console.log(reason));
    }
  }, [state]);
  return (
    <div className="App">
      <header className="App-header">
        Hello World 👋!
        <br />
        The current time is {state.date.toLocaleTimeString()}.
        <br />
        Your number is {state.num === null ? 'loading..' : state.num}.
        <button type="button" onClick={() => setState({ ...state, num: null })}>
          Click here to get a new number!
        </button>
      </header>
    </div>
  );
}
