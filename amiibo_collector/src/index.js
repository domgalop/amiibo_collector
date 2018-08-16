import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import registerServiceWorker from "./registerServiceWorker";

import "normalize.css";
import App from "./App";

import addAmiibo from "./store/reducers/addAmiibo";
import ModifyAmiibo from "./store/reducers/modifyAmiibo";

const rootReducer = combineReducers({
  addA: addAmiibo,
  ModA: ModifyAmiibo
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
