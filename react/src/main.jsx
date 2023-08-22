import React ,{lazy ,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './assets/index.css'
import store from "./redux/store/store.js";
import { Provider } from "react-redux";
const App = lazy(()=>import('./App.jsx'))

import LazyLoader from  './helper/LazyLoader'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
        <Suspense fallback={<LazyLoader/>} >
          <App/>
        </Suspense>
    </Provider>
  </BrowserRouter>
)
