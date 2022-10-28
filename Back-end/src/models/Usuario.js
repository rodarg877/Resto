export default class Usuario {
    constructor(nick, pass, email, direccion, id) {
        this.nick = nick;
        this.pass = pass;
        this.email = email;
        this.direccion = direccion;
        this.tipo = "N";
    }
    getPass() {
        return this.pass;
    }
    getNick() {
        return this.nick;
    }
    getEmail() {
        return this.email;
    }
    getDireccion() {
        return this.direccion;
    }
    getTipo() {
        return this.tipo;
    }
}
