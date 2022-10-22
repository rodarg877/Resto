export default class Usuario {

    private nick: String;
    private pass: String;
    private email: String;
    private direccion: String;

    constructor(nick:String, pass:String, email:String, direccion:String) {
        this.nick = nick;
        this.pass = pass;
        this.email = email;
        this.direccion=direccion;

    }
 public getPass():String{
    return this.pass
 }
 public getNick():String{
    return this.nick
 }
 public getEmail():String{
    return this.email
 }
 public getDireccion():String{
    return this.direccion
 }
}