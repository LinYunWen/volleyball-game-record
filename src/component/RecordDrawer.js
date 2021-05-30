import React from "react";
import { Divider, Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import "../scss/record.scss";

export class RecordDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

  }

  toggleDrawer(isOpen) {
      return (event) => {
          this.setState({ isOpen: isOpen });
      };
  }


  drawerListItem() {
    let records = [{ isGet: true, athlete: 33, type: "攻擊得分" }, { isGet: false, athlete: 33, type: "攻擊得分" }]
    return (
      <React.Fragment>
        <List style={{ width: "50vw" }}>
          {records.map((record, index) => {
            return (
              <React.Fragment key={index}>
                <ListItem button className={`record${record.isGet ? " win" : " lose"}`}>
                  <ListItemIcon className="record-icon">
                      <Typography>{record.isGet ? "得" : "失"}</Typography>
                  </ListItemIcon>
                  <ListItemText primary={`${record.athlete} 球員`} secondary={record.type} style={{ padding: "0 0 0 5%" }}/>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </List>
      </React.Fragment>
    );
  }

  render() {
    return (
        <SwipeableDrawer
          open={this.state.isOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          {this.drawerListItem()}
        </SwipeableDrawer>
    );
  }
}
