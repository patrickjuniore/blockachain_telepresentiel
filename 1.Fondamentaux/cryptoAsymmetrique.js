//Ecrire un programme de chiffrement type masque jetable
//  -générer une clé PRIVEE et clé PUBLIQUE
//  -SIGNER un message avec la clé privée
//  -VERIFIER la signature du message avec la clé PUBLIQUE
//  https://nodejs.org/api/crypto.html#crypto_class_sign

let message = "message à signer";

//générer une clé PRIVEE et clé PUBLIQUE
const crypto = require('crypto');
const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: 'secp256k1'
  });

//SIGNER un message avec la clé privée
const sign = crypto.createSign('SHA256'); //créer une signature en utilisant un algorithme de hashage
sign.update(message);
sign.end()
const signature = sign.sign(privateKey);
console.log('signature Digitale  : ' + Buffer.from(signature).toString('base64'));

//VERIFIER la signature du message avec la clé PUBLIQUE
const verify = crypto.createVerify('SHA256')
verify.update(message)
verify.end()
const statut = verify.verify(publicKey, signature)
console.log('la signature Digitale est elle valable? : ' + statut)
