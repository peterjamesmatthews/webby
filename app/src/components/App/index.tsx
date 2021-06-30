import {
  useSelector
} from "react-redux";

import { State } from "../../redux/state";
import './App.scss';

export function App() {
  const now = useSelector((state: State) => state.app.now);

  return (
    <div className='App'>
      <header className='App-header'>
        Hello World 👋!<br />
        The current time is {now.toLocaleTimeString()}.<br />
      </header>
    </div>
  );
}