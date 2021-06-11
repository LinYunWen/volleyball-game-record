import React from "react";
import { connect } from 'react-redux';
import { commonAction, settingAction } from '../action';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../scss/base.scss";

class SettingPage extends React.Component {
  constructor(props) {
    super(props);
    this.d = new Date();
    this.setDateAndTime();
    this.state = {
      cup: {
        text: "",
        isError: false,
        helperText: ""
      },
      competitor: {
        text: "",
        isRequired: true,
        isError: false,
        helperText: ""
      },
      "1": {
        text: "",
        isRequired: true,
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      "2": {
        text: "",
        isRequired: true,
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      "3": {
        text: "",
        isRequired: true,
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      "4": {
        text: "",
        isRequired: true,
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      "5": {
        text: "",
        isRequired: true,
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      "6": {
        text: "",
        isRequired: true,
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      "libero1": {
        text: "",
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      "libero2": {
        text: "",
        onlyNumber: true,
        isError: false,
        helperText: ""
      },
      comment: {
        text: "",
        isError: false,
        helperText: ""
      }
    };

    this.submit = this.submit.bind(this);
  }

  changeField(type) {
    return (event) => {
      this.state[type].text = event.target.value;
      this.setState({ ...this.state });
    }
  }

  setDateAndTime() {
    let date = `${this.d.getFullYear()}/${`${this.d.getMonth() + 1}`.padStart(2, "0")}/${`${this.d.getDate()}`.padStart(2, "0")}`;
    let time = `${`${this.d.getHours()}`.padStart(2, "0")}:${`${this.d.getMinutes()}`.padStart(2, "0")}`;
    this.props.setDateAndTime(date, time);
  }

  validation(type, str) {
    if (type === "required") {
      if (str.length === 0) return false;
    }
    if (type === "number") {
      if (!/^[0-9]*$/.test(str)) return false;
    }

    return true;
  }

  validateText() {
    let pass = true;

    for (let key of Object.keys(this.state)) {
      let item = this.state[key];
      if (item.isRequired && !this.validation("required", item.text)) {
        item.isError = true;
        item.helperText = "required"
        pass = false;
        continue;
      }

      if (item.onlyNumber && !this.validation("number", item.text)) {
        item.isError = true;
        item.helperText = "only number"
        pass = false;
        continue;
      }

      item.isError = false;
      item.helperText = "";
    }

    this.setState({ ...this.state });
    return pass;
  }

  setSettingInfo() {
    // set competitor and cup
    let cup = this.state.cup.text;
    let competitor = this.state.competitor.text;
    this.props.setCup(cup);
    this.props.setCompetitor(competitor);
    this.props.setTitle(`[${cup}] v.s.${competitor}`);

    // set athlete and position
    let normals = [];
    for (let key of ["1", "2", "3", "4", "5", "6"]) {
      let text = this.state[key].text;
      (text.length > 0) && normals.push(parseInt(text));
    }
    let liberos = [];
    for (let key of ["libero1", "libero2"]) {
      let text = this.state[key].text;
      (text.length > 0) && liberos.push(parseInt(text));
    }
    this.props.setAthletes(normals, liberos)

    // set comment
    this.props.setComment(this.state.comment.text);
  }

  submit(event) {
    if (!this.validateText()) return;

    this.setSettingInfo();

    this.props.history.push("/record");
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
              <TextField value={this.state.cup.text} label="盃賽名稱" variant="outlined"
                required={this.state.cup.isRequired} error={this.state.cup.isError}
                helperText={this.state.cup.helperText} onChange={this.changeField("cup")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField value={this.state.competitor.text} required label="對手隊名" variant="outlined"
                required={this.state.competitor.isRequired} error={this.state.competitor.isError}
                helperText={this.state.competitor.helperText} onChange={this.changeField("competitor")}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ margin: "10px 0" }}/>
            </Grid>
            <Grid item xs={12}>
              <Typography>請輸入我方站位</Typography>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={4}>
                <TextField required value={this.state["4"].text} label="4 號位" variant="outlined"
                  required={this.state["4"].isRequired} error={this.state["4"].isError}
                  helperText={this.state["4"].helperText} onChange={this.changeField("4")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["3"].text} label="3 號位" variant="outlined"
                  required={this.state["3"].isRequired} error={this.state["3"].isError}
                  helperText={this.state["3"].helperText} onChange={this.changeField("3")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["2"].text} label="2 號位" variant="outlined"
                  required={this.state["2"].isRequired} error={this.state["2"].isError}
                  helperText={this.state["2"].helperText} onChange={this.changeField("2")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["5"].text} label="5 號位" variant="outlined"
                  required={this.state["5"].isRequired} error={this.state["5"].isError}
                  helperText={this.state["5"].helperText} onChange={this.changeField("5")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["6"].text} label="6 號位" variant="outlined"
                  required={this.state["6"].isRequired} error={this.state["6"].isError}
                  helperText={this.state["6"].helperText} onChange={this.changeField("6")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField required value={this.state["1"].text} label="1 號位" variant="outlined"
                  required={this.state["1"].isRequired} error={this.state["1"].isError}
                  helperText={this.state["1"].helperText} onChange={this.changeField("1")}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="flex-end" alignItems="center">
              <Grid item xs={4}>
                <TextField value={this.state["libero1"].text} label="自由球員 1" variant="outlined"
                  required={this.state["libero1"].isRequired} error={this.state["libero1"].isError}
                  helperText={this.state["libero1"].helperText} onChange={this.changeField("libero1")}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField value={this.state["libero2"].text} label="自由球員 2" variant="outlined"
                  required={this.state["libero2"].isRequired} error={this.state["libero2"].isError}
                  helperText={this.state["libero2"].helperText} onChange={this.changeField("libero2")}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ margin: "10px 0" }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="備註" value={this.state.comment.text} multiline rows={4} variant="outlined" className="width-100pa"
                required={this.state.comment.isRequired} error={this.state.comment.isError}
                helperText={this.state.comment.helperText} onChange={this.changeField("comment")}
              />
            </Grid>
            <Grid container item xs={12} justify="flex-end" alignItems="center">
              <Grid item xs={4} className="text-right">
                <Button variant="contained" color="primary" onClick={this.submit}>確認</Button>
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
