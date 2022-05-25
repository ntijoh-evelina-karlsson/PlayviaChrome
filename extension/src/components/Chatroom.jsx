
import React from 'react';
import Card from '@mui/material/Card';
import Chatwindow from './Chatwindow.jsx';
import MessageInput from './MessageInput.jsx';


export default function Chatroom(){

  return (
      <Card sx={{
        backgroundColor: "peachpuff",
        width: "600px",
        minHeight: "550px",
        position: "relative"
      }}>
        <Chatwindow/>
        <MessageInput/>
      </Card>
  );
}
