import React from "react";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid } from "@material-ui/core";
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
        <Grid container item xs={12} alignItems="center" justify="center" alignContent="center">
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
        <Divider style={{ margin: "10px 0" }}/>
        
        <Divider style={{ margin: "10px 0" }}/>
        <Grid container className="text-center">
          <Grid item xs={4} className="margin-auto">
            <Typography>Score</Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">score</FormLabel> */}
              <RadioGroup row aria-label="score" name="score" value={this.state.scoreValue} onChange={this.changeScore}>
                <FormControlLabel value="get" control={<Radio />} label="得分" />
                <FormControlLabel value="lost" control={<Radio />} label="失分" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid container item xs={12} style={{ height: "60vh" }} alignItems="center" justify="center">
            {this.genScoreAction()}
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary">送出</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
