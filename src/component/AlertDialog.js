import React from 'react';
import { connect } from 'react-redux';
import { commonAction } from '../action';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleSend = this.handleSend.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleClose() {
    this.props.setAlertDialog("isOpen", false);
  }

  handleSend() {
    this.handleClose();
  }

  render() {
    return (
        <Dialog
          open={this.props.common.dialog.isOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">結束紀錄？</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.common.dialog.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              取消
            </Button>
            <Button onClick={this.handleSend} color="primary" autoFocus>
              確認
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

const mapStateToProps = store => (
  {
    common: store.common
  }
)

export default connect(mapStateToProps, commonAction)(AlertDialog);