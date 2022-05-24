import React from 'react';

export default function Popup({onClick, state}){

  return (
    <div>
      <button onClick={onClick} style={{width: "200px"}}>Join!</button>
    </div>
  );
}
