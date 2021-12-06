import "./App.css";
import Accordion from "./components/Accordion";
// import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Navbar2 from "./components/Navbar2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar3 from "./components/Navbar3";

function App() {
  return (
    <>
      {/* <Navbar mode={mode} toggleMode={toggleMode} toggleColor = {toggleColor}/> */}
      <Router>
        
        <Switch>
          <Route path="/about">
            <Navbar3 />
            <Accordion />
          </Route>
          <Route path="/">
            <Navbar2 />
            <TextForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
