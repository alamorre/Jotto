import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';

import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  guessedWords: [{guessedWord: 'train', letterMatchCount: 3}],
};

/**
* Factory function to create a shallowWrapper for the GuwssedWords component
* @function setup
* @param {object} props - Component props specific to this setUp
* @returns {ShallowWrapper}
*/
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  test('renders without error', () => {

  });
  test('renders a table of guessed word', () => {

  });
});
