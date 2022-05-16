import React from 'react';
import { render } from 'react-dom';

function Popup(){

  return (
    <div>
      <button onClick={() => chrome.runtime.sendMessage({ msg: "connectToServer" })} style={{width: "200px"}}>Join!</button>
      <button onClick={() => console.log("Message!")} style={{width: "200px"}}>Message!</button>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));