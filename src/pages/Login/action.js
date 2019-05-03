import userService from '../../services/api/userService';
import constants from '../../services/constants';
import localStorageHandler from '../../services/localStorageHandler';
import actionTypes from '../../store/ActionTypes';

export const LoginPending = () => ({
  type: actionTypes.LOGIN_PENDING
});
export const loginSuccess = (token, currentUser) => ({
  type: actionTypes.LOGIN_SUCCESS,
  token,
  currentUser
});

export const loginFailure = error => ({
  type: actionTypes.LOGIN_FAILURE,
  loginError: error.message
}); 

export const login = data => dispatch => {
  dispatch(LoginPending());

  userService.login(data).then(
    results => {
      localStorageHandler.setItem(constants.TOKEN, results.accessToken);
      localStorageHandler.setItem(constants.CURRENT_USER, results.currentUser);
      // localStorageHandler.setItem(constants.RESFRESH_TOKEN, results.refreshToken)

      dispatch(loginSuccess(results.accessToken, results.currentUser));
    },
    error => {
      dispatch(loginFailure(error));
    }
  );
};
