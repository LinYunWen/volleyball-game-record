import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "../scss/base.scss";
import { Typography } from "@material-ui/core";

export class SettingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="margin-top-60" maxWidth="md">
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField required label="請輸入對手隊名" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ margin: "10px 0" }}/>
            </Grid>
            <Grid item xs={12}>
              <Typography>請輸入我方站位</Typography>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <TextField required label="4 號位" variant="outlined"/>
              </Grid>
              <Grid item xs={4}>
                <TextField required label="3 號位" variant="outlined"/>
              </Grid>
              <Grid item xs={4}>
                <TextField required label="2 號位" variant="outlined"/>
              </Grid>
              <Grid item xs={4}>
                <TextField required label="5 號位" variant="outlined"/>
              </Grid>
              <Grid item xs={4}>
                <TextField required label="6 號位" variant="outlined"/>
              </Grid>
              <Grid item xs={4}>
                <TextField required label="1 號位" variant="outlined"/>
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="flex-end" alignItems="center">
              <Grid item xs={4}>
                <TextField label="自由球員 1" variant="outlined" />
              </Grid>
              <Grid item xs={4}>
                <TextField label="自由球員 2" variant="outlined" />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ margin: "10px 0" }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="備註" multiline rows={4} variant="outlined" className="width-100pa"/>
            </Grid>
            <Grid container item xs={12} justify="flex-end" alignItems="center">
              <Grid item xs={4} className="text-right">
                <Link to="/record">
                  <Button variant="contained" color="primary">送出</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
