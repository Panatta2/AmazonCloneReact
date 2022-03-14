import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';

import Home from "./Home";
function App() {
  return (
    <div className="app">
      <Header />
    </div>
  );
}
export default App;