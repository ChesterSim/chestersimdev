import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;
