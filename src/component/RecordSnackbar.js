import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default class RecordSnackbar extends React.Component {
  constructor(props) {
    super(props);
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
          onClose={this.props.closeSnackbar}
        >
          <Alert onClose={this.props.closeSnackbar} variant="filled"
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