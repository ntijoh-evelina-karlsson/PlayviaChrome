chrome.runtime.onInstalled.addListener(() => {
  console.log('Running...');
});

//Websocket
var ws;

var connectToServer = function(){
  let url = "ws://localhost:9898"
    ws = new WebSocket(url);

    ws.onopen = function() {
      console.log('Client Succesfully Connected');
      ws.send("Hi I've connected to your server!");
    };

    ws.onmessage = function(e) {
      console.log("Received Message From Server: '" + e.data + "'");
      chrome.runtime.sendMessage({
        msg: e.data
      })
    };
}

var sendMsg = function(payload){
  ws.send(payload);
}

chrome.runtime.onMessage.addListener(
  function(request){
      if(request.msg == "connectToServer"){
        connectToServer();
      }
      else if (request.msg == "sendMsg"){
        sendMsg(request.payload);
      }
  }
);

