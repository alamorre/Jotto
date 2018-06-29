import checkPropTypes from 'check-prop-types';
import {createStore} from 'redux';

import rootReducer from '../src/reducers';

/**
* Create a testing store with imported reducer, middleware, and initial state/
* globals: rootReducer.
* @param {object} initialState - Initial state of the store
* @function storeFactory
* @returns {Store} - Redux store
*/
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
* Return node(s) with the given data-test attribute
* @param {ShallowWrapper} wrapper - Shallow enzyme wrapper
* @param {string} val - Value of the data-test attribute
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}
