import React from 'react';
import Chatmessage from './Chatmessage.jsx';
import { List } from '@mui/material';

export default function Chatwindow(){

  const [messages, setMessages] = React.useState([]);

  chrome.runtime.onMessage.addListener((message) => {
    setMessages([...messages, message.msg])
    return true;
  });

  return (
  <List style={{backgroundColor: "inherit"}}>
    {
      messages.map((message) => (
        <Chatmessage message={message}/>
      ))
    }
  </List>        
  );
}
