import React from "react";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import "../scss/base.scss";

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

  genScoreAction() {
    let scoreValue = this.state.scoreValue;
    if (scoreValue === "get") {
      return (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button>對方失誤</Button>
          <Button>攻擊得分</Button>
          <Button>吊球得分</Button>
          <Button>發球得分</Button>
          <Button>攔網得分</Button>
        </ButtonGroup>
      );
    } else if (scoreValue === "lost") {
      return (
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
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
        <ButtonGroup size="small" className="margin-bottom-10" aria-label="small outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <Divider style={{ marginBottom: "10px" }}/>
        <FormControl component="fieldset">
          <FormLabel component="legend">score</FormLabel>
          <RadioGroup row aria-label="score" name="score" value={this.state.scoreValue} onChange={this.changeScore}>
            <FormControlLabel value="get" control={<Radio />} label="得分" />
            <FormControlLabel value="lost" control={<Radio />} label="失分" />
          </RadioGroup>
        </FormControl>
        {this.genScoreAction()}
        <Button variant="contained" color="primary">送出</Button>

      </Container>
    );
  }
}
