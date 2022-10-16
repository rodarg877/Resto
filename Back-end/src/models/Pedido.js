export default class Pedido {
    constructor(platos) {
        this.nroPedido = ++Pedido.cont;
        this.platos = platos;
    }
}
Pedido.cont = 1;
