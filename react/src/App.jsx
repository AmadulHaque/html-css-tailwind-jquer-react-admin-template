import { useState,useEffect } from 'react';
import Router from './Router/Router.jsx';
import publicRoutes from './Router/Routes/PublicRoutes.jsx';
import {getRoutes} from "./Router/Routes/index.jsx";
function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes()
    setAllRoutes([...allRoutes, routes])
  }, [])

  return <Router allRoutes={allRoutes} />;
}

export default App;