import _ from 'lodash';

const actionTypes = {
  OPEN_LOGIN: "OPEN_LOGIN",

  LOGIN_PENDING: "LOGIN_PENDING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  LOGOUT_USER: "LOGOUT_USER",

  COLLAPES_MENU_SIDE_BAR: 'COLLAPES_MENU_SIDE_BAR',

}
const COMMON_CONSTANTS = {
  DISPATCH_AUTH_DISCARD_TOKEN: "DISPATCH_AUTH_DISCARD_TOKEN",
}


export default _.assign({}, actionTypes, COMMON_CONSTANTS)