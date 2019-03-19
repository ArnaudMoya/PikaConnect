import React from "react";
import ReactDOM from "react-dom";
import allReducers from "./reducers/index.js"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./CSS/index.css";
import App from "./App";
import { createStore } from  'redux';
import { Provider } from  'react-redux';
import registerServiceWorker from './registerServiceWorker';
const  store  =  createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );
ReactDOM.render(
    <Provider  store={store}>
        <App  />
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
