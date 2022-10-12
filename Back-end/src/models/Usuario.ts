import Pedido from "./Pedido";
export default class Usuario {

    private nick: String;
    private pass: String;
    private email: String;
    private pedido:Pedido[];

    constructor(nick:String, pass:String, email:String) {
        this.nick = nick;
        this.pass = pass;
        this.email = email;
        this.pedido=[];

    }

}