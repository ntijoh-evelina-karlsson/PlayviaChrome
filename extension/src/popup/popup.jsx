import React from 'react';
import { render } from 'react-dom';

function Popup(){

  const connectToServer = () => {
    
    let url = "ws://localhost:9898"
    const ws = new WebSocket(url);

    ws.onopen = function() {
      console.log('WebSocket Client Connected');
      ws.send('Hi this is the right web client.');
    };

    ws.onmessage = function(e) {
    console.log("Received: '" + e.data + "'");
    };
  };

  return (
    <div>
      <button onClick={() => connectToServer()} style={{width: "200px"}}>Join!</button>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));