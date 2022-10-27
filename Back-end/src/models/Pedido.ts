import { ObjectId } from "mongodb";
import Plato from "./Plato";

export default class Pedido {
    private platos: Plato[];
    private id?: ObjectId;
    private user: string;
    private estado: string;
    private direccion: string;
    private total:number;
    //private fecha :string;

    constructor(platos: Plato[], user: string, direccion: string, precioDelivery:number, id?: ObjectId) {
        //this.fecha= this.setDay();
        this.platos = platos;
        this.user = user;
        this.estado = "P";
        this.direccion = direccion;
        this.total= this.platos.reduce((sum,p)=>sum + p.getPrecio(),0)+precioDelivery;
    }

    public getEstado() {
        return this.estado;
    }

    private setDay(){
        const day= new Date();
        return day.toLocaleDateString()
    }
}