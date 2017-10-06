import React from 'react';
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome, state method</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App2() {
  return (
    <div>
      <Clock2 />
      <Clock2 />
      <Clock2 />
    </div>
  );
}
export default App2;