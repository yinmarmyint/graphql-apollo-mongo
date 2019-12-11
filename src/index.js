import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import "rsuite/dist/styles/rsuite-default.min.css";
import "./static/scss/main.scss";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
