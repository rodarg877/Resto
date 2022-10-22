export default class Plato {
    constructor(nombre, descripcion, img, precio, id) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
        this.cantidad = 1;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
}
