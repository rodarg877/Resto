export default class Plato {
    constructor(nombre, descripcion, img, precio, id, cantidad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getImg() {
        return this.img;
    }
}
