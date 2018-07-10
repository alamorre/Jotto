import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter(), disableLifecycleMethods: true });

import {findByTestAttr, storeFactory} from '../test/testUtils';
import Input, {UnconnectedInput} from './Input';

/**
* Factory function to create a ShallowWrapper for the Input component
* @function setup
* @param {object} initialState - Initial state for this setup
* @returns {ShallowWrapper}
*/
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive(); // returns the child component
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: false};
      wrapper = setup(initialState);
    });
    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const inputButton = findByTestAttr(wrapper, 'input-button');
      expect(inputButton.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: true};
      wrapper = setup(initialState);
    });
    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders NO input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('renders NO submit button', () => {
      const inputButton = findByTestAttr(wrapper, "input-button");
      expect(inputButton.length).toBe(0);
    });
  });
});
describe('update state', () => {

});


/*
Randomly placed notes:
- shallow is to create a virtual DOM
- use .dive() to get child component of shallow (In this case, Input)
*/



describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(true);
  });
  test('`guessWord` action creator is a prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  test('`guessWord` runs on button submit', () => {
    const guessWordMock = jest.fn();

    const props = {
      guessWord: guessWordMock,
    }

    // Setup the App component with the getSecretWordMock as getSecretWord prop
    const wrapper = shallow(<UnconnectedInput {...props} />);

    //Simulate clicked
    const submitButton = findByTestAttr(wrapper, 'input-button');
    submitButton.simulate('click');

    //check if the mock ran
    const getSecretWordCallCount = guessWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});
