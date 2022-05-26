
import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

export default function MessageInput(){

  const [message, setMessage] = React.useState("");

  const sendMsg = () => {
    chrome.runtime.sendMessage({ msg: "sendMsg", payload: message})
    setMessage("");
  }

  return (
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
        </div>
  );
}
