import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

import {storeFactory} from '../test/testUtils';
import App from './App';

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
