import React, { Component } from "react";

import ReactDOM from "react-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import defaultTheme from "./themes/defaultTheme";

// Pages
import IndexPage from "../pages/index"

class App extends Component {
  render() {
    return (
        <Router>
            <MuiThemeProvider theme={defaultTheme}>
                <Route exact path="/" component={IndexPage} />
            </MuiThemeProvider>
        </Router>  
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);