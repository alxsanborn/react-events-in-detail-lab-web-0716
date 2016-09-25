const React = require('react')

export default class DelayedButton extends React.Component {
  constructor() {
    super();

    this.delayedEvent = this.delayedEvent.bind(this);
  }

  delayedEvent(event) {
    event.persist();
    this.props.onDelayedClick(event)

  }

  render() {
    return (
      <button onClick={this.delayedEvent}>Click me!</button>
    );
  }
}

module.exports = DelayedButton;
