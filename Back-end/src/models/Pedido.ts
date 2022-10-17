import { ObjectId } from "mongodb";
import Plato from "./Plato";

export default class Pedido {
    private platos:Plato[];
    private id?:ObjectId;
    constructor(platos:Plato[],id?:ObjectId){
        this.platos=platos;
    }
}