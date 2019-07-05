import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import BigApp from "./App";

const rootElement = document.getElementById("root");
// const render = () => ReactDOM.render(
ReactDOM.render(
  <Provider store={store}>
    <BigApp />
  </Provider>,
  rootElement
)

// render()
// store.subscribe(render)
