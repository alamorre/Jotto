import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import {findByTestAttr, checkProps} from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {success: false};

/**
* Factory function to create a shallowWrapper for the Congrats component
* @function setUp
* @param {object} props - Component props specific to this setUp
* @returns {ShallowWrapper}
*/
const setUp = (props={}) => {
  const setUpProps = {...defaultProps, ...props}; // if ...props then override
  return shallow(<Congrats {...setUpProps} />)
}

test('renders without error', () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders with no test with "success" props is false', () => {
  const wrapper = setUp({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe("");
});

test('renders non-empty congrats when success', () => {
  const wrapper = setUp({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw arning with expected props', () => {
  const expectedProps = {success: false};
  checkProps(Congrats, expectedProps);
});
