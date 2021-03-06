import { createStore, compose, applyMiddleware } from 'redux';
import createReducer from './createReducer';
import reduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
// import breakpointMiddeware from './middleware/breakpoint';
// import sagaMiddleware from './saga';

import { Store } from 'redux';

// const middleware = [reduxThunk, sagaMiddleware, breakpointMiddeware];
// const middleware = [reduxThunk, logger];
const middleware = [reduxThunk];
const composed = [];

// if (process.env.NODE_ENV !== 'production') {
//   /*
//   middleware.push(
//     // https://github.com/evgenyrodionov/redux-logger
//     require('redux-logger').createLogger({
//       duration: true,
//       // diff: true,
//       collapsed: true,
//     })
//   );
//   */

//   if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined) {
//     // https://github.com/zalmoxisus/redux-devtools-extension
//     composed.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
//   }
// }

const store = createStore(createReducer(), compose(applyMiddleware(...middleware), ...composed));

// if (process.env.NODE_ENV !== 'production') {
//   // Enable Webpack hot module replacement for global reducers
//   if (module.hot) {
//     module.hot.accept('./createReducer', () => {
//       store.replaceReducer(createReducer());
//     });
//   }
// }

export default store;
