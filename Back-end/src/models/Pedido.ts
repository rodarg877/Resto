import { ObjectId } from "mongodb";
import Plato from "./Plato";
import Usuario from "./Usuario";

export default class Pedido {
    private platos: Plato[];
    private id?: ObjectId;
    private user: string;
    private estado: string;
    private direccion: string;

    constructor(platos: Plato[], user: string, direccion: string, id?: ObjectId) {
        this.platos = platos;
        this.user = user;
        this.estado = "P";
        this.direccion = direccion;
    }

    public getEstado() {
        return this.estado;
    }
}