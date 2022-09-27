export class User{
    email
    nom 
    prenom
    age 
    constructor(email, nom, prenom, age){
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    isValid(email, nom, prenom, age){
        let mailVerif = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let verif = false;

        if(email === mailVerif){
            verif = true;
        }

        if((nom != null || nom != "" )){
            verif = true;
        }

        if(!(prenom != null || prenom != "")){
            verif = true;
        }

        if((age >= 13 )){
            verif = true;
        }
    }    
}