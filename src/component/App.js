import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Content } from "./Content";
import "../scss/app.scss";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      appendLoading: false,
      isError: false,
      posts: [],
    };

  }


  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar>
          <span className="bold app-bar-title">排球比賽紀錄</span>
        </AppBar>
        <Content state={this.state} />
      </React.Fragment>
    );
  }
}
