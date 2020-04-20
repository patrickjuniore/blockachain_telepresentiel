class Noeud {
    constructor(valeur) {
        this.valeur = valeur
        this.gauche = undefined
        this.droite = undefined
      }

    hashPremiereLigne(input) {
    //hashPremiereLigne() {
        let hashPremiereLigne = []
        const crypto = require ("crypto") 
        var inputUser = input
        //var inputUser = ["lapin","carotte","champs","arbre"]
        for(var  i= 0; i < inputUser.length; i++) {
            let data = Buffer.from(inputUser[i])
            let hash = crypto.createHash("sha256").update(data).digest("hex") 
            hashPremiereLigne.push(hash)
            let Noeud = new Noeud(hash)
        }
        //return hashPremiereLigne
    }      
    affichageInfixe(){
        //affichage: tableau des valeurs contenues dans l'arbre
        let affichage = []
        if(this.gauche !== undefined)
            affichage = this.gauche.affichageInfixe()
        affichage.push(this.valeur)
        if (this.droite !== undefined)
            affichage = affichage.concat(this.droite.affichageInfixe())        
        return affichage   
    } 
}

class Arbre {
    constructor(inputUser) {
        //this.inputUser = ["lapin","carotte","champs","arbre"]
        //this.racine = new Noeud(this.hashPremiereLigne(inputUser))
        this.premiereNoeud = new Noeud("")
        this.premiereNoeud.hashPremiereLigne(inputUser)
        //this.hashPremiereLigne()
        //this.hashPremiereLigne = []
        //this.premiereLigne = new premiereLigne(premiereLigne)
    }  

    //hashPremiereLigne(input) {
    /*hashPremiereLigne() {
        let hashPremiereLigne = []
        const crypto = require ("crypto") 
        //var inputUser = input
        var inputUser = ["lapin","carotte","champs","arbre"]
        for(var  i= 0; i < inputUser.length; i++) {
            let data = Buffer.from(inputUser[i])
            let hash = crypto.createHash("sha256").update(data).digest("hex") 
            hashPremiereLigne.push(hash)
        }
        //return hashPremiereLigne
    } */  

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

    buildMerckle(input) {
        //buildMerckle() {
            let hashLigne = []
            const crypto = require ("crypto") 
            //var input = input
            var inputUser = this.hashLigne
            for(var  i= 0; i < inputUser.length; i+2) {
                let data1 = Buffer.from(inputUser[i])
                let data2 = Buffer.from(inputUser[i+1])
                let hash = crypto.createHash("sha256").update(data1+data2).digest("hex") 
                hashLigne.push(hash)
            }
            return hashPremiereLigne
        } 
        
    affichageInfixe(){
        if (this.racine !== undefined)
            return this.racine.affichageInfixe()
        return []
    }
}

/*let monArbre = new Arbre(1)
console.log(monArbre.inputUser[0])
console.log(monArbre.hashPremiereLigne())*/

let monArbre = new Arbre("lapin","carotte","champs","arbre")
// console.log(monArbre.hashPremiereLigne())

monArbre.affichageInfixe()
