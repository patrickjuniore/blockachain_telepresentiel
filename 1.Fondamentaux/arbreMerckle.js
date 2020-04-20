//let toto = ["A","B","C","D"];
//console.log(toto);

class premiereLigne {
    constructor(premiereLigne) {
      //this.premiereLigne  = ["lapin","carotte","champs","arbre"]
      this.premiereLigne  = premiereLigne
    }  

}

class Arbre {
    constructor(inputUser) {
        this.inputUser = ["lapin","carotte","champs","arbre"]
        //this.hashPremiereLigne = []
        //this.premiereLigne = new premiereLigne(premiereLigne)
    }  

    //hashPremiereLigne(input) {
    hashPremiereLigne() {
        let hashPremiereLigne = []
        const crypto = require ("crypto") 
        //var inputUser = input
        var inputUser = ["lapin","carotte","champs","arbre"]
        for(var  i= 0; i < inputUser.length; i++) {
            let data = Buffer.from(inputUser[i])
            let hash = crypto.createHash("sha256").update(data).digest("hex") 
            hashPremiereLigne.push(hash)
        }
        return hashPremiereLigne
    }    

    buildMerckle() {
        let hashPremiereLigne = []
        const crypto = require ("crypto") 
        //var inputUser = input
        var inputUser = this.hashPremiereLigne
        for(var  i= 0; i < inputUser.length; i++) {
            let data = Buffer.from(inputUser[i])
            let hash = crypto.createHash("sha256").update(data).digest("hex") 
            hashPremiereLigne.push(hash)
        }
        return hashPremiereLigne
    } 

}

let monArbre = new Arbre(1)
console.log(monArbre.inputUser[0])
console.log(monArbre.hashPremiereLigne())
