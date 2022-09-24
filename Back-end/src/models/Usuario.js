import Reserva from "./Reserva.js";

export default class Usuario{
   
    constructor(nick,pass,email){
        this.nick=nick;
        this.pass=pass;
        this.email=email;
        this.reserva = null;
        
    }

}