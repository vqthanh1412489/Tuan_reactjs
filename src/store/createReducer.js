// @flow
import { combineReducers } from 'redux';
// import breakpoint from './reducers/breakpoint';

import { Reducer } from 'redux';

// type AsyncReducers = {
//   [_: string]: Reducer<*, *>,
// };

export default function createReducer(asyncReducers) {
  const reducers = {
    ...asyncReducers,
  };
  return combineReducers(reducers);
}