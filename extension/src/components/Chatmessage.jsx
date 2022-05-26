import React, { PureComponent } from "react";
import { ListItem, ListItemText, Divider } from '@mui/material';

class Message extends PureComponent {
  render() {
    return (
      <>
        <ListItem>
          <ListItemText>
            {this.props.message}
          </ListItemText>
        </ListItem>
        <Divider />
      </>
    )
  }
}

export default Message;