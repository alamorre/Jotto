import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

import {findByTestAttr, storeFactory} from '../test/testUtils';
import Input from './Input';

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
    test('renders without error', () => {

    });
    test('renders NO input box', () => {

    });
    test('renders NO submit button', () => {

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
