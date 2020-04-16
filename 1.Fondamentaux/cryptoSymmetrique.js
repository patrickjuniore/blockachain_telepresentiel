//Ecrire un programme de chiffrement type masque jetable
//  -prendre en paramètre un message
//  -générer un nombre aléatoire de même taille
//  -chiffreer avec l'operation XOR

const crypto = require('crypto');

const generateKey = message => {
    return crypto.randomBytes(message.length);
}

const chiffrerMessage = (message,cle) => {
    let bufferMsg = Buffer.from(message);
    let messageChiffre = [];
    let messageChiffreString = [];
    for (let i=0;i<message.length;i++){
        //messageChiffreString += (bufferMsg[i] ^ cle[i]);
        messageChiffreString += String.fromCharCode(bufferMsg[i] ^ cle[i])
        messageChiffre.push(bufferMsg[i] ^ cle[i]);
    }
    console.log("version chaine du chiffrement :",messageChiffreString);
    return messageChiffre;
}

let message = "lala"; // lala la464la
let cle =generateKey (message);

console.log("----------message/cle----------");
console.log("Message :",message,Buffer.from(message));
console.log("cle:",cle,Buffer.from(cle));

console.log("----------chiffrement----------");
let messageChiffre = chiffrerMessage(message,cle);
console.log("Message chiffre:",messageChiffre,Buffer.from(messageChiffre));

console.log("----------dechiffrement----------");
let messageDeChiffre = chiffrerMessage(messageChiffre,cle);
console.log("Message dechiffre:",messageDeChiffre,Buffer.from(messageDeChiffre));
