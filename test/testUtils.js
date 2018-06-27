import checkPropTypes from 'check-prop-types';

/**
* Return node(s) with the given data-test attribute
* @param {ShallowWrapper} wrapper - Shallow enzyme wrapper
* @param {string} val - Value of the data-test attribute
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
*/
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}
