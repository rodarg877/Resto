export default class Pedido {
    constructor(platos, user, direccion, precioDelivery, id) {
        this.fecha = this.setDay();
        this.platos = platos;
        this.user = user;
        this.estado = "P";
        this.direccion = direccion;
        this.total = this.platos.reduce((sum, p) => sum + p.getPrecio(), 0) + precioDelivery;
    }
    getEstado() {
        return this.estado;
    }
    setDay() {
        const day = new Date();
        return day.toLocaleDateString();
    }
}
