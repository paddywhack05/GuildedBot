const WebSocket = require('ws');
module.exports= {
    login(token){
        const client = new WebSocket('wss://www.guilded.gg/websocket/v1', {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
          return client;
    }
}