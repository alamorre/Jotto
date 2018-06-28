import {actionTypes} from '../actions';
import successReducer from './successReducer';

test('returns default initial state of "false" when no action', () => {
  const newState = successReducer(undefined, {}); // solves cannot read undefined solution
  expect(newState).toBe(false);
});
test('return state of true when getting an action type CORRECT_GUESS', () => {
  const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
  expect(newState).toBe(true);
});
