import * as React from 'react';

class Vote extends React.PureComponent<any, undefined> {
  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry: any) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.getPair().map((entry: any) =>
          <button
            key={entry}
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}
          >
            <h1>
              {entry}
            </h1>
            {this.hasVotedFor(entry)
              ? <div className="label">Voted</div>
              : null}
          </button>
        )}
      </div>
    );
  }
}

export default Vote;
