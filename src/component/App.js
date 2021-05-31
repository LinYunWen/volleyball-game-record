import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { HomePage } from "./HomePage";
import { SettingPage } from "./SettingPage";
import RecordPage from "./RecordPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
      <Router>
        <CssBaseline />
        <AppBar>
          <span className="bold app-bar-title">排球比賽紀錄</span>
        </AppBar>
        <Container className="margin-top-60" maxWidth="md">
          <Switch>
            <Route path="/setting">
              <SettingPage />
            </Route>
            <Route path="/record">
              <RecordPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}
