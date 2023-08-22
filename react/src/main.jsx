import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './assets/index.css';
import './assets/css/vendors/custom-select.css';
import './assets/css/vendors/prism.css';
import './assets/css/style.css';

import store from "./redux/store/store.js";
import { Provider } from "react-redux";
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
  </BrowserRouter>
)
