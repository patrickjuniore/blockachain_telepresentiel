//let toto = ["A","B","C","D"];
//console.log(toto);

class premiereLigne {
    constructor(premiereLigne) {
      //this.premiereLigne  = ["lapin","carotte","champs","arbre"]
      this.premiereLigne  = premiereLigne
    }  

    //hashPremiereLigne(input) {
    hashPremiereLigne() {
        let hashPremiereLigne = []
        //var inputUser = input
        var inputUser = ["lapin","carotte","champs","arbre"]
        for(var  i= 0; i < x.length; i++) {
            data = Buffer.from(inputUser[i])
            hash = crypto.createHash("sha256").update(data).digest() 
            hashPremiereLigne.push(this.hash)
        }
        return hashPremiereLigne
    }
}

class Arbre {
    constructor(inputUser) {
        this.inputUser = ["lapin","carotte","champs","arbre"]
        this.hashPremiereLigne = []
        //this.premiereLigne = new premiereLigne(premiereLigne)
    }  

    hashPremiereLigne(){
        if (this.inputUser !== undefined)
            return this.hashPremiereLigne.hashPremiereLigne()
        return []
    }
}

let monArbre = new Arbre(1)
console.log(monArbre.inputUser[0])
// console.log(monArbre.hashPremiereLigne())

//let mapremiereLigne = new premiereLigne(1)
//console.log(mapremiereLigne.premiereLigne[0])
