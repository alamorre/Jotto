import React from 'react';
// ADD THESE 3 LINES TOGETHER EVERY TIME
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter(), disableLifecycleMethods: true });

import {storeFactory} from '../test/testUtils';
import App, {UnconnectedApp} from './App';

/**
 * @function setup
 * @param {object} state - state for this setup
 * @returns {ShallowWrapper}
 */
 const setup = (state={}) => {
   const store = storeFactory(state);
   const wrapper = shallow(<App store={store} />).dive();
   return wrapper;
 }

 describe('redux properties', () => {
   test('has access to `success` prop', () => {
     const success = true;
     const wrapper = setup({success});
     const successProp = wrapper.instance().props.success;
     expect(successProp).toBe(success);
   });
   test('has the `secretWord` prop', () => {
     const secretWord = 'party';
     const wrapper = setup({secretWord});
     const secretWordProp = wrapper.instance().props.secretWord;
     expect(secretWordProp).toBe(secretWord);
   });
   test('has the `guessedWords` prop', () => {
     const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
     const wrapper = setup({guessedWords});
     const guessedWordsProp = wrapper.instance().props.guessedWords;
     expect(guessedWordsProp).toBe(guessedWords);
   });
   test('has the `guessWord` function property', () => {
     const wrapper = setup();
     const getSecretWordProp = wrapper.instance().props.getSecretWord;
     expect(getSecretWordProp).toBeInstanceOf(Function);
   });
 });

test('`getSecretWord` runs on app mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }
  // Setup the App component with the getSecretWordMock as getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);
  // run the lifecycle disableLifecycleMethod
  wrapper.instance().componentDidMount();
  //check if the mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
