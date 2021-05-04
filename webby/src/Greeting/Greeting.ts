import React from 'react';

interface Props {
  from: string
}
export default class Greeting extends React.Component<Props> {
  render() {
    return `Hello world. I'm ${this.props.from}.`;
  }
}
