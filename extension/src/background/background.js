chrome.runtime.onInstalled.addListener(() => {
  console.log('Running...');
});

var connectToServer = function(){
  let url = "ws://localhost:9898"
    const ws = new WebSocket(url);

    ws.onopen = function() {
      console.log('WebSocket Client Connected');
      ws.send('Hi this is the right web client.');
    };

    ws.onmessage = function(e) {
    console.log("Received: '" + e.data + "'");
    };
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
      if(request.msg == "connectToServer") connectToServer();
  }
);
