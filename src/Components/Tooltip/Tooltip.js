import React, { Component } from 'react';
import './Tooltip.css';

class Tooltip extends Component {
  state = {
    visible: false
  };

  toggleTip = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const { tip, children } = this.props;
    return (
      <span
        className="tooltipContainer"
        onMouseEnter={() => this.toggleTip()}
        onMouseLeave={() => this.toggleTip()}
      >
        {this.state.visible && <span className="tooltip">{tip}</span>}
        {children}
      </span>
    );
  }
}

export default Tooltip;
