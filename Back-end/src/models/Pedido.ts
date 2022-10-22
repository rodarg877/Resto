import { EstimatedDocumentCountOptions, ObjectId } from "mongodb";
import Plato from "./Plato";
import Usuario from "./Usuario";

export default class Pedido {
    private platos:Plato[];
    private id?:ObjectId;
    private user:Usuario;
    private estado: string;
    private direccion:string;

    constructor(platos:Plato[], user: Usuario, estado:string, direccion: string, id?:ObjectId){
        this.platos=platos;
        this.user=user;
        this.estado=estado;
        this.direccion = direccion
    }
}