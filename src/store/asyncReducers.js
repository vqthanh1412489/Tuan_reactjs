// @flow
import store from './index';
import createReducer from './createReducer';
import { Reducer } from 'redux';

const asyncReducers = {};

export const register = (scope, reducer) => {
  asyncReducers[scope] = reducer;
  store.replaceReducer(createReducer(asyncReducers));
};
