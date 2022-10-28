import { ObjectId } from "mongodb";

export default class Usuario {

   private id?: ObjectId
   private nick: string;
   private pass: string;
   private email: string;
   private direccion: string;
   private tipo: string;

   constructor(nick: string, pass: string, email: string, direccion: string, id?: ObjectId) {
      this.nick = nick;
      this.pass = pass;
      this.email = email;
      this.direccion = direccion;
      this.tipo = "N";
    }
   public getPass(): string {
      return this.pass
   }
   public getNick(): string {
      return this.nick
   }
   public getEmail(): string {
      return this.email
   }
   public getDireccion(): string {
      return this.direccion
   }
   public getTipo(): string {
      return this.tipo
   }
}