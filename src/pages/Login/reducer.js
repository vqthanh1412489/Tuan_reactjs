import actionTypes from '../../store/ActionTypes';

const initialState = {
  loginPending: false,
  loginSuccess: false,
  currentUser: {},
  loginError: ''
};

export default function loginReducer(state = initialState, action){
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
      return {
        ...state,
        loginPending: true,
        loginSuccess: false,
        currentUser: {},
        loginError: ''
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginPending: false,
        loginSuccess: true,
        currentUser: action.currentUser,
        loginError: ''
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginPending: false,
        currentUser: {},
        loginSuccess: false,
        loginError: action.loginError
      }
    default:
      return state
    }
}