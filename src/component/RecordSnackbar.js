import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Alert from '@material-ui/lab/Alert';

export default class RecordSnackbar extends React.Component {
  constructor(props) {
    super(props);

    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  closeSnackbar(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.props.closeRecordSnackbar();
  }

  render() {
    return (
      <React.Fragment>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={2000}
          open={this.props.isOpen}
          onClose={this.closeSnackbar}
          TransitionComponent={(props) => { return <Slide {...props} direction="up" />; }}
        >
          <Alert onClose={this.closeSnackbar} variant="filled"
            severity={this.props.isGet ? "success" : "error"}
            color={this.props.isGet ? "error" : "success"}
          >
            {this.props.message}
          </Alert>
        </Snackbar>
      </React.Fragment>
    );

  }
}