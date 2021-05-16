import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../scss/base.scss";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={3} justify="center" alignItems="center" className="height-90vh">
        <Grid item sm={6} className="text-center">
          <Link to="/setting">
            <Button variant="contained" size="large" color="primary">開始新紀錄</Button>
          </Link>
        </Grid>
        <Grid item sm={6} className="text-center">
          <Link to="/history">
            <Button variant="contained" size="large" color="primary">查看紀錄</Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}
