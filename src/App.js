//import Library
import React from "react"
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import './App.css';

//import Pages
import Main from "./pages/Main";

function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Main/>},
    ]
  )
  return routes;
}
function App(){
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App;
