export default class Plato {
   
    private nombre:String;
    private  descripcion:String;
    private img:String;
    private precio:Number;
    private cantidad:Number;

    constructor(nombre:String, descripcion:String, img:String, precio:Number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
        this.cantidad=1;
    }
}