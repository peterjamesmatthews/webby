import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [unixTime, setCurrentTime] = useState(0);
  const currentTime = new Date(unixTime * 1000);

  useEffect(() => {
    fetch('/time').then(
      res => res.json()
    ).then(
        data => setCurrentTime(data.time)
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        The current time is {currentTime.toLocaleTimeString()}.
      </header>
    </div>
  );
}

export default App;
