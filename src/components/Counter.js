import React from 'react';
import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';

const { canUseDOM } = ExecutionEnvironment;

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentDidMount() {
    if (canUseDOM) {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

