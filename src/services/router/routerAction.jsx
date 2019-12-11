import {
  push as routerPush,
  goBack as routerGoBack,
  replace as routerReplace
} from "connected-react-router";

export const push = path => dispatch => {
  dispatch(routerPush(path));
};

export const goBack = () => dispatch => {
  dispatch(routerGoBack());
};

export const replace = path => dispatch => {
  dispatch(routerReplace(path));
};
