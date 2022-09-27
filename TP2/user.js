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

    isValid(){
        let controlRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        let verif = false;
        if(controlRegex.test(this.email)){
            if(!(this.nom == "" || this.nom == null)){
                if(!(this.prenom == "" || this.prenom == null)){
                    if(this.age>=13){
                        verif = true;
                    }
                }
            }
        }
        if(verif){
            console.log("test bon")
        }else{
            console.log("test pas bon")
        }
        //return check
    }  
}


