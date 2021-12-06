import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/news";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


const App =()=> {
  const [progress, setprogress] = useState(0)
    return (
      <>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}/>
        {/* <News setProgress={setprogress}  pageSize={8} country='us' category='health' /> */}
        <Switch>
          <Route exact path="/"><News setProgress={setprogress}  key='general' category='general' /></Route>
          <Route exact path="/general"><News setProgress={setprogress}  key='general' category='general' /></Route>
          <Route exact path="/business"><News setProgress={setprogress}  key='business' category='business' /></Route>
          <Route exact path="/entertainment"><News setProgress={setprogress}  key='entertainment' category='entertainment' /></Route>
          <Route exact path="/health"><News setProgress={setprogress}  key='health' category='health' /></Route>
          <Route exact path="/science"><News setProgress={setprogress}  key='science' category='science' /></Route>
          <Route exact path="/sports"><News setProgress={setprogress}  key='sports' category='sports' /></Route>
          <Route exact path="/technology"><News setProgress={setprogress}  key='technology' category='technology' /></Route>
        </Switch>
        </Router>
      </>
    );
  
}

export default App
