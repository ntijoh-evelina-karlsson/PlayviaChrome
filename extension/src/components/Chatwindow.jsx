
import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

export default function Chatwindow(){

  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const sendMsg = () => {
    chrome.runtime.sendMessage({ msg: "sendMsg", payload: message})
    setMessage("");
  }

  chrome.runtime.onMessage.addListener((message) => {
    console.log("Here comes message");
    console.log(message.msg);
    setMessages([...messages, message.msg])
    return true;
  });

  return (
      <Card sx={{
        backgroundColor: "peachpuff",
        width: "600px",
        minHeight: "550px",
        position: "relative"
      }}>
        {
          messages.length != 0 && messages.map(message => (<Typography>{message}</Typography>))
        }
        <div style={{
          display: "flex", 
          position: "absolute",
          bottom: 0,
          width: "100%"
        }}>

      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button 
            onClick={() => sendMsg()} 
            style={{
              color: "grey"
              }}>
            Send
          </Button>
      </Paper>

          {/* <TextField
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            sx={{
              backgroundColor: "white",
              width: "inherit",
              border: "unset"
            }}/>
          <Button 
            onClick={() => sendMsg()} 
            style={{
              color: "grey"
              }}>
            Send
          </Button> */}
        </div>
      </Card>
  );
}
