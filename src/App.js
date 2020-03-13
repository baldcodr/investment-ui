import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./components/Grid/Grid";
import SignInSide from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import productList from "./components/ProductList/ProductList";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignIn" component={SignInSide} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/productlist" component={productList} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
