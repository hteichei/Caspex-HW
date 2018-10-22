import React, { Component } from 'react';
import './Expandable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Expandable extends Component {
  state = {
    expanded: false
  };

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const { expanded } = this.state;
    const { showTitle, hideTitle, children } = this.props;
    return (
      <div>
        <button onClick={this.toggleExpand}>
          {expanded ? `${hideTitle} -` : `${showTitle} +`}
        </button>
        {expanded && <div>{children}</div>}
      </div>
    );
  }
}

export default Expandable;
