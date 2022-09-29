export default class Mesa {

    private cantAsientos:Number;
    private id:Number;
    private estaOcupado:Boolean;

    constructor(cantAsientos:Number, id:Number) {
        this.id=id;
        this.cantAsientos = cantAsientos;
        this.estaOcupado = false;
    }
    OcuparMesa(){
        this.estaOcupado=true;
    }
}