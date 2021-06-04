import React from "react";
import { connect } from 'react-redux';
import { recordAction } from '../action';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Divider, Grid } from "@material-ui/core";
import RecordDrawer from "./RecordDrawer";
import RecordSnackbar from "./RecordSnackbar";
import "../scss/record.scss";
import { isGeneratorFunction } from "regenerator-runtime";

class RecordPage extends React.Component {
  constructor(props) {
    super(props);

    this.scoreActions = {
      get: ["對方失誤", "攻擊得分", "吊球得分", "發球得分", "攔網得分"],
      lost: ["攻擊失誤", "發球失誤", "接球失誤", "攔網失誤", "舉球失誤", "犯規失誤"]
    };

  }

  genScoreAction(type) {
    return (
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
        size="large"
        className="margin-bottom-10"
      >
        {this.scoreActions[type].map((action, index) => {
        return (
          <Button key={index} onClick={this.clickActionButton(action, type === "get" ? true : false)}>{action}</Button>
        );
      })}
      </ButtonGroup>
    );
  }

  genToggleButtons() {
    return (
      this.props.common.athlete.nums.map((num, index) => {
        let s = `${num}`;
       return (
        <ToggleButton key={index} value={s}>
          <Typography>{s}</Typography>
        </ToggleButton>
       );
      })
    )
  }

  clickActionButton(reason, isGet) {
    return (event) => {
      let athlete = this.props.common.athlete.selected;
      this.props.modifyScore(isGet ? "us" : "competitor", 1);
      this.props.addRecord(athlete, reason, isGet);
      this.props.showRecordSnackbar(`${athlete} 球員 (${reason})`, isGet);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Grid container alignItems="center" justify="center" alignContent="center">
          <Paper className="score-text-paper">
            <Typography variant="h6" color="textSecondary" className="score-text">敵方</Typography>
            <Typography variant="h3" className="score-text green">{`${this.props.record.score.competitor}`.padStart(2, "0")}</Typography>
          </Paper>
          <Typography variant="h3" className="bold">:</Typography>
          <Paper className="score-text-paper">
            <Typography variant="h6" color="textSecondary" className="score-text">我方</Typography>
            <Typography variant="h3" className="score-text red">{`${this.props.record.score.us}`.padStart(2, "0")}</Typography>
          </Paper>
        </Grid>
        <Divider style={{ margin: "10px 0px 20px 0" }}/>
        <Grid container item xs={12} alignItems="center" justify="center" alignContent="center">
          <ToggleButtonGroup value={this.props.common.athlete.selected} onChange={this.props.changeSelectedAthlete} exclusive>
            {this.genToggleButtons()}
          </ToggleButtonGroup>
        </Grid>
        <Grid container className="text-center">
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className="padding-top-bottom-10px">得分</Typography>
              </Grid>
              <Grid item xs={12}>
                {this.genScoreAction("get")}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className="padding-top-bottom-10px">失分</Typography>
              </Grid>
              <Grid item xs={12}>
                {this.genScoreAction("lost")}
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="margin-top-20">
            <Grid item xs={4}>
              <Button variant="contained" color="primary"
                onClick={(event) => { this.props.toggleRecordDrawer(true); }}
              >
                  查看紀錄
              </Button>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="primary">結束紀錄</Button>
            </Grid>
          </Grid>
        </Grid>

        <RecordSnackbar isOpen={this.props.record.snackbar.isOpen}
          message={this.props.record.snackbar.message}
          closeRecordSnackbar={this.props.closeRecordSnackbar}
          isGet={this.props.record.snackbar.isGet}/>
        <RecordDrawer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => (
  {
    common: store.common,
    record: store.record
  }
)

export default connect(mapStateToProps, recordAction)(RecordPage);