class Heading extends React.Component {
  render() {
    console.log(this);
    const {titleForHeading, children} = this.props;
    return React.createElement(
      'h1',
      {title: titleForHeading},
      children.join(' ')
    );
  }
}

const container = document.getElementById('root');
const reactElement = React.createElement(Heading, {titleForHeading:'qwerty'}, 'Elon', 'Musk', 5);
ReactDOM.render(reactElement, container);
 