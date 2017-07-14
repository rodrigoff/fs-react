import * as React from 'react';

class Winner extends React.PureComponent<any, undefined> {
  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}
      </div>
    );
  }
}

export default Winner;
