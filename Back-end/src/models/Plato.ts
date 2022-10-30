import { ObjectId } from "mongodb";
export default class Plato {
   
    private nombre:string;
    private  descripcion:string;
    private img:string;
    private precio:number;
    private tipoPlato:string;
    private cantidad?:number;
    public id?: ObjectId

    constructor(nombre:string, descripcion:string,img:string, precio:number,tipoPlato:string,id?:ObjectId, cantidad?:number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.img = img;
        this.precio = precio;
        this.tipoPlato = tipoPlato;
        this.cantidad = 1;
    }

    public getNombre(){
        return this.nombre
    }

    public getPrecio(){
        return this.precio;
    }
    public getDescripcion(){
        return this.descripcion;
    }
    public getImg(){
        return this.img;
    }
}