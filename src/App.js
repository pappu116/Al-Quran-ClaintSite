import React from "react";
import "./App.css";
import Home from "./Component/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SurahDetails from "./Component/Home/Surah/SurahDetails/SurahDetails";

function App() {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/surah/:surahNumber">
            <SurahDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
