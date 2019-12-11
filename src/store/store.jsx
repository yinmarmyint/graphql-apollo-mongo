import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reducers from "./combineReducer";

export const history = createBrowserHistory();

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger"); // eslint-disable-line global-require

  const logger = createLogger({
    level: "log",
    collapsed: true
  });
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(
  routerMiddleware(history),
  ...middlewares
)(createStore);

/* eslint-disable no-underscore-dangle */
const store = createStoreWithMiddleware(
  reducers(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
