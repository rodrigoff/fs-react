import 'jest';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Voting from '../../src/components/Voting';

describe('Voting', () => {
  it('renders a pair of buttons', () => {
    const component = mount(
      <Voting pair={['Trainspotting', '28 Days Later']} />
    );

    const buttons = component.find('button');

    expect(buttons).to.have.length(2);
    expect(buttons.at(0).text()).to.equal('Trainspotting');
    expect(buttons.at(1).text()).to.equal('28 Days Later');
  });

  it('invokes callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry: string) => (votedWith = entry);

    const component = mount(
      <Voting pair={['Trainspotting', '28 Days Later']} vote={vote} />
    );
    const buttons = component.find('button');
    buttons.at(0).simulate('click');

    expect(votedWith).to.equal('Trainspotting');
  });

  it('disables buttons when user has voted', () => {
    const component = mount(
      <Voting
        pair={['Trainspotting', '28 Days Later']}
        hasVoted="Trainspotting"
      />
    );
    const buttons = component.find('button');

    expect(buttons.length).to.equal(2);
    expect(buttons.at(0).props()).to.have.property('disabled', true);
    expect(buttons.at(1).props()).to.have.property('disabled', true);
  });

  it('adds label to the voted entry', () => {
    const component = mount(
      <Voting
        pair={['Trainspotting', '28 Days Later']}
        hasVoted="Trainspotting"
      />
    );
    const buttons = component.find('button');

    expect(buttons.at(0).text()).to.contain('Voted');
  });

  it('renders just the winner when there is one', () => {
    const component = mount(<Voting winner="Trainspotting" />);
    const buttons = component.find('button');
    expect(buttons.length).to.equal(0);

    const winner = component.find('.winner');
    expect(winner).to.be.ok;
    expect(winner.text()).to.contain('Trainspotting');
  });
});
