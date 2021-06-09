import React from "react";
import { connect } from 'react-redux';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { HomePage } from "./HomePage";
import SettingPage from "./SettingPage";
import RecordPage from "./RecordPage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "../scss/app.scss";

class App extends React.Component {
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
          <span className="bold app-bar-title">{this.props.common.title}</span>
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

const mapStateToProps = store => (
  {
    common: store.common
  }
)

export default connect(mapStateToProps, {})(App);
