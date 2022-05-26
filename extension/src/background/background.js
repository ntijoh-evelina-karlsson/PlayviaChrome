chrome.runtime.onInstalled.addListener(() => {
  console.log('Running...');
});

//Websocket
var ws;
var nickName;

var connectToServer = function(){
  let url = "ws://localhost:9898"
    ws = new WebSocket(url);

    ws.onopen = function() {
      console.log('Client Succesfully Connected');
    };

    ws.onmessage = function(e) {
      console.log("Received Message From Server: '" + e.data + "'");
      let parsed = JSON.parse(e.data);
      if (parsed.type === "nickName") {
        nickName = parsed.payload;
      } else if (parsed.type === "message") {
          chrome.runtime.sendMessage({
          msg: parsed.payload
        })
      }
    };
}

var sendMsg = function(payload){
  ws.send(`${nickName}: `+ payload);
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

