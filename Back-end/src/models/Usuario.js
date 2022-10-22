export default class Usuario {
    constructor(nick, pass, email, direccion) {
        this.nick = nick;
        this.pass = pass;
        this.email = email;
        this.direccion = direccion;
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
}
