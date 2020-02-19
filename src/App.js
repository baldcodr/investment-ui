import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import "./components/Grid/Grid";
import SignInSide from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
// import footer from "./pages/Footer/footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignIn" component={SignInSide} />
            <Route path="/Dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
        {/* <footer /> */}
      </div>
    );
  }
}

export default App;
