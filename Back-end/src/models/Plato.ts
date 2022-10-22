import { ObjectId } from "mongodb";
export default class Plato {
   
    private nombre:String;
    private  descripcion:String;
    private img:String;
    private precio:Number;
    private cantidad:Number;
    public id?: ObjectId

    constructor(nombre:String, descripcion:String, img:String, precio:Number,id?:ObjectId) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
        this.cantidad=1;
    }

    public getNombre(){
        return this.nombre
    }

    public getPrecio(){
        return this.precio;
    }
}