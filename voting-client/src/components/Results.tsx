import * as React from 'react';

import Winner from './Winner';

class Results extends React.PureComponent<any, undefined> {
  getPair() {
    return this.props.pair || [];
  }

  getVotes(entry: string) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  render() {
    return this.props.winner
      ? <Winner ref="winner" winner={this.props.winner} />
      : <div className="results">
          <div className="tally">
            {this.getPair().map((entry: any) =>
              <div key={entry} className="entry">
                <h1>
                  {entry}
                </h1>
                <div className="voteCount">
                  {this.getVotes(entry)}
                </div>
              </div>
            )}
          </div>
          <div className="management">
            <button className="next" onClick={this.props.next}>
              Next
            </button>
          </div>
        </div>;
  }
}

export default Results;
