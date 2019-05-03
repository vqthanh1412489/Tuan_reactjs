import _ from "lodash";
export const APP_DOMAIN = "http://localhost:3001";
export const SUCCESS_STATUS_CODE = [200, 201, 202, 203];

export const EXPIRED_STATUS_CODE = [403, 401];

export const constants = {
  TOKEN: "TOKEN",
  CURRENT_USER: "CURRENT_USER"
};

export default _.assign({}, constants);