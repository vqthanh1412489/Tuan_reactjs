import constants, {
  APP_DOMAIN,
  SUCCESS_STATUS_CODE,
  EXPIRED_STATUS_CODE
} from "../constants";

import axios from "axios";
import store from '../../store';
import actionTypes from '../../store/ActionTypes';
import _ from 'lodash';
import localStorageHandler from '../localStorageHandler';

export function authRequest(endpoint, method = "GET", body = null){
return requestApi(endpoint, method, body, true);
}
export function commonRequest(endpoint, method = "GET", body = null, header = null) {
  return requestApi(endpoint, method, body, false, false, header);
}
function requestApi(
  endpoint,
  method = "GET",
  data = null,
  auth = false,
  logOut = false,
  header = null
){
  let options = {
    method: method,
    // mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (auth) {
    options.headers["x-access-token"] = localStorageHandler.getItem(
      constants.TOKEN
    );
  }

  if (logOut) {
    options.headers["refresh-token"] = localStorageHandler.getItem(
      constants.RESFRESH_TOKEN
    );
  }

  if (data !== null) {
    if (method === "GET") {
      endpoint +=
        (endpoint.indexOf("?") === -1 ? "?" : "&") +
        Object.keys(data)
          .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
          .join("&");
    } else {
      options.data = _.assign({},data);
    }
  }
  if (header !== null) {
    for (let key in header) {
      if (header.hasOwnProperty(key)) {
          options.headers[key] = header[key];
      }
    }
  }
  return axios({url :`${APP_DOMAIN}/${endpoint}`, ...options})
  .then(response => {
    console.log('response', response)
    if (EXPIRED_STATUS_CODE.indexOf(response.status) !== -1) {
      throw Error(constants.AUTH_DISCARD_TOKEN);
    }

    return response.data;
  })
  .then(formattedData =>{
    if (
      EXPIRED_STATUS_CODE.indexOf(formattedData.code) != -1
    ) {
      store.dispatch({ type: actionTypes.DISPATCH_AUTH_DISCARD_TOKEN });
      return;
    }
    return formattedData;
  })
  .catch(error => {
    console.log("Error in fetch : ", error);
    return {
      code: 405,
      message: _.isObject(error) ? error.message || error.stack : error
    };
  });
}