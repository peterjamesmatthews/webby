import React from 'react';
import './App.scss';

type Props = {};
type State = {
  now: Date | undefined,
  num: number | undefined,
  timer_id: any | undefined  // TODO: find meaningful type
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      now: undefined,
      num: undefined,
      timer_id: undefined
    };
  }

  componentDidMount(): void {
    const timer_id = setInterval(
      () => this.updateNow(),
      1000
    );
    this.setState({
      ...this.state,
      timer_id: timer_id
    });
  }

  componentWillUnmount(): void {
    if (this.state.timer_id !== undefined)
      clearInterval(this.state.timer_id);
  }

  updateNow(): void {
    this.setState({
      ...this.state,
      now: new Date()
    });
    this.updateNum();
  }

  updateNum(): void {
    fetch('/rnd')
      .then(res => res.json())
      .then(data => this.setState({ ...this.state, num: data.rnd }));
  }
  

  render(): JSX.Element {
    let now: Date | string | undefined = this.state.now;
    let num: number | undefined = this.state.num;
    now = now === undefined ? '...' : now.toLocaleTimeString();
    return (
      <div className="App">
        <header className="App-header">
          Hello World 👋!<br />
          The current time is {now}.<br />
          The current random number is {num}.
        </header>
      </div>
    );
  }
}

export default App;
