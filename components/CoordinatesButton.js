const React = require('react')

export default class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.coordinatesEvent = this.coordinatesEvent.bind(this);
  }

  coordinatesEvent(event) {

  this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  
  }

  render() {
    return (
      <button onClick={this.coordinatesEvent}>Click me!</button>
    );
  }
}

module.exports = CoordinatesButton;
