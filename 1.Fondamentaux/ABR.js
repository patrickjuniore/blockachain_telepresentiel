class Noeud {
    constructor(valeur) {
      this.valeur = valeur
      this.gauche = undefined
      this.droite = undefined
    }

    ajouterValeur(v){
        if (v<this.valeur){
            if (this.gauche === undefined){
                this.gauche = new Noeud(v)
            } else {
                this.gauche.ajouterValeur(v)
            }
        } else {
            if (this.droite === undefined){
                this.droite = new Noeud(v)
            } else {
                this.droite.ajouterValeur(v)
            }
        }
    }

    // search for a node with given data 
    trouverNoeud(v) 
    { 
    // si l'arbre est null retourné null
        if(this === null) 
            return null; 
    
        // si la valeur est inférieure à celle du noeud
        // prendre la valeur du noeud de gauche
        else if(v < this.valeur) 
            return this.trouverNoeud(this.gauche, v); 
    
        // si la valeur est superieure à celle du noeud
        // prendre la valeur du noeud de droite
        else if(v > this.valeur) 
            return this.trouverNoeud(this.droite, v); 
    
        // si la valeur est égale à celle du noeud
        // prendre la valeur du noeud
        else
            return this; 
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
    constructor(valeur) {
        this.racine = new Noeud(valeur)
    }

    ajouterValeur(valeur) {
        this.racine.ajouterValeur(valeur)
    }

    affichageInfixe(){
        if (this.racine !== undefined)
            return this.racine.affichageInfixe()
        return []
    }

     afficherArbre() {
        this.racine.afficherValeur()
        // A faire: Une fonction d'affichage de l'arbre
    }

    trouverNoeud(valeur) {
        this.racine.trouverNoeud(valeur)
    }

}
