import _ from 'lodash';
import { SUCCESS_STATUS_CODE } from "../constants";
import apiConfigs from './apisConstants';
import { commonRequest, authRequest } from "./apiCaller";

const userService = {
  login
}

function login(data) {
  return new Promise((resolve, reject) => {
    let queryParams = { password: data.password };
    if (!_.isEmpty(data.username)) {
      queryParams.accountName = data.username;
    }
    
    commonRequest(apiConfigs.loginApi, "POST", queryParams, {})
      .then(response => {
        if (SUCCESS_STATUS_CODE.indexOf(response.code) != -1) {
          let { data } = response;
          //TODO:
          let _profile = data.profile;
          resolve({
            accessToken: data.token,
            refreshToken: data.refreshToken,
            currentUser: _profile
          });
        } else {
          reject({ message: response.message });
        }
      })
      .catch(error => {
        reject(_.isObject(error) ? error.message || error.stack : error);
      });
  });
}

export default userService;
