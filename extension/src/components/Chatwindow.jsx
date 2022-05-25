
import React from 'react';
import Typography from '@mui/material/Typography';

export default function Chatwindow(){

  const [messages, setMessages] = React.useState([]);

  chrome.runtime.onMessage.addListener((message) => {
    setMessages([...messages, message.msg])
    return true;
  });

  return (
        
    messages.length != 0 && messages.map(message => (<Typography>{message}</Typography>))
        
  );
}
