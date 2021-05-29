import React from "react";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Divider, Grid } from "@material-ui/core";
import { RecordDrawer } from "./RecordDrawer";
import "../scss/record.scss";

export class RecordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scoreValue: ""
    }

    this.changeScore = this.changeScore.bind(this);
  }

  changeScore(event) {
    this.setState({
      scoreValue: event.target.value
    });
  }

  genScoreAction(type) {
    if (type === "get") {
      return (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
          size="large"
          className="margin-bottom-10"
        >
          <Button>對方失誤</Button>
          <Button>攻擊得分</Button>
          <Button>吊球得分</Button>
          <Button>發球得分</Button>
          <Button>攔網得分</Button>
        </ButtonGroup>
      );
    } else if (type === "lost") {
      return (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
          size="large"
          className="margin-bottom-10"
        >
          <Button>攻擊失誤</Button>
          <Button>發球失誤</Button>
          <Button>接球失誤</Button>
          <Button>攔網失誤</Button>
          <Button>舉球失誤</Button>
          <Button>犯規失誤</Button>
        </ButtonGroup>
      );

    } else {
      return;
    }
  }

  render() {
    return (
      <Container className="margin-top-60" maxWidth="md">
        <Grid container alignItems="center" justify="center" alignContent="center">
          <Paper className="score-text-paper">
            <Typography variant="h6" color="textSecondary" className="score-text">敵方</Typography>
            <Typography variant="h3" className="score-text green">10</Typography>
          </Paper>
          <Typography variant="h3" className="bold">:</Typography>
          <Paper className="score-text-paper">
            <Typography variant="h6" color="textSecondary" className="score-text">我方</Typography>
            <Typography variant="h3" className="score-text red">10</Typography>
          </Paper>
        </Grid>
        <Divider style={{ margin: "10px 0px 20px 0" }}/>
        <Grid container item xs={12} alignItems="center" justify="center" alignContent="center">
          <ToggleButtonGroup onChange={() => {}} exclusive>
            <ToggleButton value="bold">
              <Typography>123</Typography>
            </ToggleButton>
            <ToggleButton value="italic">
              <Typography>123</Typography>
            </ToggleButton>
            <ToggleButton value="underlined">
              <Typography>123</Typography>
            </ToggleButton>
            <ToggleButton value="color">
              <Typography>123</Typography>
            </ToggleButton>
            <ToggleButton value="bold">
              <Typography>123</Typography>
            </ToggleButton>
            <ToggleButton value="italic">
              <Typography>123</Typography>
            </ToggleButton>
            <ToggleButton value="underlined">
              <Typography>123</Typography>
            </ToggleButton>
            <ToggleButton value="color">
              <Typography>123</Typography>
            </ToggleButton>
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
              <Button variant="contained" color="primary">查看紀錄</Button>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="primary">結束紀錄</Button>
            </Grid>
          </Grid>
        </Grid>

        <RecordDrawer />
      </Container>
    );
  }
}
