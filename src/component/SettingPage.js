import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../scss/base.scss";

export class SettingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="margin-top-60" maxWidth="md">
        <form>
          <div className="margin-bottom-10">
            <TextField required label="請輸入對手隊名" variant="outlined" />
          </div>
          <Divider style={{ marginBottom: "10px" }}/>
          <div>
            <TextField required label="4 號位" variant="outlined" />
            <TextField required label="3 號位" variant="outlined" />
            <TextField required label="2 號位" variant="outlined" />
          </div>
          <div className="margin-bottom-10">
            <TextField required label="5 號位" variant="outlined" />
            <TextField required label="6 號位" variant="outlined" />
            <TextField required label="1 號位" variant="outlined" />
          </div>
          <div className="margin-bottom-10">
            <TextField label="自由球員 1" variant="outlined" />
            <TextField label="自由球員 2" variant="outlined" />
            <Link to="/record">
              <Button variant="contained" color="primary">送出</Button>
            </Link>
          </div>
        </form>
      </Container>
    );
  }
}
