console.log("Voila")
resultat = 5*6
console.log(`Le resultat est de la multiplication est ${resultat}.`)

nombreAlea = Math.round(Math.random()*9+1)
console.log({nombreAlea})

let input = process.stdin;
// Set input character encoding.
input.setEncoding('utf-8');

input.on('data', entree => {
    const nombrePropose = parseInt(entree);
    console.log({nombrePropose})
})
