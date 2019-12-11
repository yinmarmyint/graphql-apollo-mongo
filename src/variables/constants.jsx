import moment from "moment";

export const START_OF_DAY = moment().startOf("day");
export const END_OF_DAY = moment().endOf("day");
export const START_OF_WEEK = moment().startOf("week");
export const END_OF_WEEK = moment().endOf("week");
export const START_OF_MONTH = moment().startOf("month");
export const END_OF_MONTH = moment().endOf("month");
export const START_OF_TOMORROW = moment()
  .add(1, "days")
  .startOf("day");
export const END_OF_TOMORROW = moment()
  .add(1, "days")
  .endOf("day");

export const START_OF_YESTERDAY = moment()
  .subtract(1, "day")
  .startOf("day");
export const END_OF_YESTERDAY = moment()
  .subtract(1, "day")
  .endOf("day");

export const START_OF_PREVIOUS_MONTH = moment()
  .subtract(1, "months")
  .endOf("day");
export const END_OF_PREVIOUS_MONTH = moment()
  .subtract(1, "months")
  .endOf("day");

const { REACT_APP_API_URL, REACT_APP_WEB_SOCKET_URL } = process.env;
export const TOKEN_LABEL = "7VZ26MfLyEcP2JH5V1WrQbbYHyAOZNR2";
// export const API_URL = 'http://192.168.0.244:8080';
export const API_URL = REACT_APP_API_URL;
export const WEB_SOCKET_URL = REACT_APP_WEB_SOCKET_URL;
export const MESSAGE_TYPE_LABEL = "achromex-message-type";
export const MESSAGE_CODE_LABEL = "achromex-message-body";

// export const STRAPI_DATE_FORMAT = 'YYYY-MM-DD';
export const LONG_DATE = "dddd, DD MMM YYYY, hh:mm A";
export const SHORT_DATE = "DD-MMM-YYYY";
export const LONG_DATE_TIME = "DD-MMM-YYYY HH:mm a";
export const maxImageSize = 10485760; // 10 Megabytes
export const acceptedFileTypes =
  "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
export const LOGIN_URL = "/";
