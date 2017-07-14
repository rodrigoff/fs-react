import * as React from 'react';
import { List, Map } from 'immutable';
import { Route } from 'react-router-dom';

import Voting from './Voting';
import Results from './Results';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({ Trainspotting: 5, '28 Days Later': 4 });

class App extends React.Component<any, undefined> {
  render() {
    return (
      <div>
        <Route exact path="/" component={() => <Voting pair={pair} />} />
        <Route path="/results" component={() => <Results pair={pair} tally={tally} />} />
      </div>
    );
  }
}

export default App;
