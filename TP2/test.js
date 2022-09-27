import {User} from './user.js'


const user_pour_le_mail = new User('toctochotmailfr', "Nom", "Prenom", 15)
user_pour_le_mail.isValid()

const user_pour_le_nom = new User('toctoc@hotmail.fr', "", "Prenom", 15)
user_pour_le_nom.isValid()

const user_pour_le_prenom = new User('toctoc@hotmail.fr', "Nom", "", 15)
user_pour_le_prenom.isValid()

const user_pour_l_age= new User('toctoc@hotmail.fr', "Nom", "Prenom", 10)
user_pour_l_age.isValid()
