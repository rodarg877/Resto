import Plato from "./Plato";

export default class Pedido {
    private platos:Plato[];
    private nroPedido:Number;
    private static cont=1;
    constructor(platos:Plato[]){
        this.nroPedido=++Pedido.cont;
        this.platos=platos;
    }
}