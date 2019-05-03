import actiontypes from '../../ActionTypes';

const initialState = {
  token: null,
  currentUser: {},
  authenticated: false,
  currentRoute,
  mustLogoutNow: false,
  isLoginModalOpen: false,
}

export default function authReducer(state = initialState, action){
  switch(action.type){
    case actiontypes.OPEN_LOGIN:
      return {
        ...state,
        isLoginModalOpen: true
      }
    case actiontypes.LOGIN_PENDING:
      return {
        ...state,
        authenticated: false,
        logoutWithMsg: ""
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        currentUser: action.currentUser,
        authenticated: true,
        mustLogoutNow: false,
        logoutWithMsg: ""
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        currentUser: {},
        authenticated: false,
      };
    case actionTypes.SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.currentRoute
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        token: null,
        currentUser: {},
        authenticated: false,
        mustLogoutNow: false,
        logoutWithMsg: action.logoutWithMsg
      };
    case actiontypes.DISPATCH_AUTH_DISCARD_TOKEN:
      return {
        ...state,
        mustLogoutNow: true
      }
    default: 
     return state;
  }
}