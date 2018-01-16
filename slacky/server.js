const express = require('express');
const WebSocket = require("ws");
const server = require("http").createServer();
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("cookie-parser")());

let numberOfUsers = 0;

const wss = new WebSocket.Server({server});
wss.on("connection", (ws, req) => {
  numberOfUsers += 1;

  ws.on('message', (data) => {
    console.log(data);
    wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
  })

  ws.on('error', (err) => console.log(err));

});


server.on("request", app);
server.listen(process.env.PORT || 8080, () => console.log(`Server listening on 8080`));
