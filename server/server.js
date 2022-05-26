// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;

var clients = [];
var nickNames = ["🐯 Tiger", "🐼 Panda", "🙊 Monkey", "🐸 Frog", "🐙 Octopus", "🦋 Butterfly", "🦊 Fox", "🦄 Unicorn", "🐨 Koala", "🦁 Lion"];
var availableNickNames = ["🐯 Tiger", "🐼 Panda", "🙊 Monkey", "🐸 Frog", "🐙 Octopus", "🦋 Butterfly", "🦊 Fox", "🦄 Unicorn", "🐨 Koala", "🦁 Lion"];

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
      console.log('Received Message From Client:', message.utf8Data);

      sendToAll(
        JSON.stringify({ type: 'message', payload: message.utf8Data})
      );
    });
    
    connection.on('close', function(reasonCode, description) {
        console.log('Client has disconnected.');
    });
});

wsServer.on('connect', function(connection) {
  console.log("Client connected!");

  if (availableNickNames.length === 0 ){
    availableNickNames = nickNames.map(name => name);
  }
  let clientName = availableNickNames[Math.floor(Math.random() * availableNickNames.length)];
  availableNickNames = availableNickNames.filter(item => item !== clientName);
  console.log(availableNickNames);
  clients.push({clientName: clientName, connection: connection});

  connection.sendUTF(
    JSON.stringify({ type: 'nickName', payload: `${clientName}`})
  );
  sendToAll(
    JSON.stringify({ type: 'message', payload: `${clientName} connected to the chatroom ✨`})
  );
});

function sendToAll(message) {
  clients.forEach(function(client) {
    client.connection.sendUTF(
      message    
    );
  })
}