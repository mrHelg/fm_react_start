class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  render() {
    const { counter } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, counter),
      React.createElement('button', null, '+'),
      React.createElement('button', null, '-')
    );
  }
}

const container = document.getElementById('root');
const reactElement = React.createElement(Counter);
ReactDOM.render(reactElement, container);
