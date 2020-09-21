import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
      </div>
    </Router>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      

    </div>
  );
}

export default App;
