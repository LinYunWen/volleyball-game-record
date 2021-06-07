import React from "react";
import { connect } from 'react-redux';
import { commonAction, settingAction } from '../action';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../scss/base.scss";

class SettingPage extends React.Component {
  constructor(props) {
    super(props);
    this.d = new Date();
    this.setDateAndTime();
    this.state = {
      cup: "",
      competitor: "",
      "1": "", "2": "", "3": "", "4": "", "5": "", "6": "",
      "libero1": "", "libero2": "",
      comment: ""
    }
  }

  changeField(type) {
    return (event) => {
      let temp = {};
      temp[type] = event.target.value;
      this.setState(temp);
    }
  }

  setDateAndTime() {
    let date = `${this.d.getFullYear()}/${`${this.d.getMonth() + 1}`.padStart(2, "0")}/${`${this.d.getDate()}`.padStart(2, "0")}`;
    let time = `${`${this.d.getHours()}`.padStart(2, "0")}:${`${this.d.getMinutes()}`.padStart(2, "0")}`;
    this.props.setDateAndTime(date, time);
  }

  setSettingInfo() {
    // set competitor and cup
    this.props.setCup(this.state.cup);
    this.props.setCompetitor(this.state.competitor);

    // set athlete and position
    let normals = [];
    for (let key of ["1", "2", "3", "4", "5", "6"]) {
      normals.push(this.state[key]);
    }
    this.props.setAthletes(normals, [this.state.libero1, this.state.libero2])

    // set comment
    this.props.setComment(this.state.comment);
  }

  render() {
    return (
      <Container className="margin-top-60" maxWidth="md">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={7}>
            <Typography variant="h5">
              {`日期：${this.props.common.date}`}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5">
              {`時間：${this.props.common.time}`}
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ margin: "10px 0" }}/>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField value={this.state.cup} label="盃賽名稱" variant="outlined" onChange={this.changeField("cup")}/>
            </Grid>
            <Grid item xs={6}>
              <TextField value={this.state.competitor} required label="對手隊名" variant="outlined" onChange={this.changeField("competitor")}/>
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ margin: "10px 0" }}/>
            </Grid>
            <Grid item xs={12}>
              <Typography>請輸入我方站位</Typography>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <TextField required value={this.state["4"]} label="4 號位" variant="outlined" onChange={this.changeField("4")}/>
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["3"]} label="3 號位" variant="outlined" onChange={this.changeField("3")}/>
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["2"]} label="2 號位" variant="outlined" onChange={this.changeField("2")}/>
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["5"]} label="5 號位" variant="outlined" onChange={this.changeField("5")}/>
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["6"]} label="6 號位" variant="outlined" onChange={this.changeField("6")}/>
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["1"]} label="1 號位" variant="outlined" onChange={this.changeField("1")}/>
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="flex-end" alignItems="center">
              <Grid item xs={4}>
                <TextField value={this.state["libero1"]} label="自由球員 1" variant="outlined" onChange={this.changeField("libero1")}/>
              </Grid>
              <Grid item xs={4}>
                <TextField value={this.state["libero2"]} label="自由球員 2" variant="outlined" onChange={this.changeField("libero2")}/>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ margin: "10px 0" }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="備註" value={this.state.comment} multiline rows={4} variant="outlined" className="width-100pa" onChange={this.changeField("comment")}/>
            </Grid>
            <Grid container item xs={12} justify="flex-end" alignItems="center">
              <Grid item xs={4} className="text-right">
                <Link to="/record">
                  <Button variant="contained" color="primary" onClick={() => { this.setSettingInfo(); }}>確認</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = store => (
  {
    common: store.common,
    setting: store.setting
  }
)

export default connect(mapStateToProps, { ...settingAction, ...commonAction })(SettingPage);
