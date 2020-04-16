const readline = require('readline')

const rli = readline.createInterface({
input: process.stdin,
output: process.stdout
})

console.log("Entrer le code du message: ")

rli.on('line', entree => {
    let crypto = require('crypto');
    let hash = crypto.createHash('sha256');
    hash.update(entree);
    codePropose = hash.digest('bin');
    //const codePropose = parseInt(entree);
    if (codePropose == code){
        rli.close()
        console.log("C'est le bon code")
    } else {
        console.log("Ce n'est pas le le bon code ", nombrePropose)
    }
})v
