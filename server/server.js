// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;

var clients = [];
var names = ["Tiger", "Panda", "Ant", "Elephant", "Giraffe", "Alligator"];

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    let clientName = names[Math.floor(Math.random() * 6)];
    clients.push({clientName: clientName, connection: connection});

    connection.on('message', function(message) {
      console.log('Received Message From Client:', message.utf8Data);
      console.log(message)

      clients.forEach(function(client) {
        client.connection.sendUTF(`${client.clientName}: `+ message.utf8Data);
      })
    });
    connection.on('close', function(reasonCode, description) {
        console.log('Client has disconnected.');
    });
});

wsServer.on('connect', function(request) {
  console.log("Client connected!");
});