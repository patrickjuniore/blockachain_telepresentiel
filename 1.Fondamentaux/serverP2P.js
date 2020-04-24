// prerequis 1: Installation de WebSocket : 
//  npm install --save ws

// prerequis 2: Charger le module ws 
var WebSocketServer = require("ws").Server;

//for (let numport = 5000; numport < 6000; port++) {
    var serveur = new WebSocketServer( { port: 8080 } );
    console.log("Noeud alice lancé sur le port");
    //var serveur = new WebSocketServer( { port: numport } );
    //console.log("Noeud alice lancé sur le port",  $("port"));

    serveur.on("connection", function (ws) { 
        console.log("Client connecté...");
        ws.on("message", function (str) {
            console.log("Message reçu : " + str);
            ws.send("Serveur a bien reçu votre message.");
        });
        ws.on("close", function() {
            console.log("Client déconnecté.")
        });
    });
//}
