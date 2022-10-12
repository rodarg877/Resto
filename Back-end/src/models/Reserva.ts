import Mesa from "./Mesa";
import Plato from "./Plato";
export default class Reserva{

    private platos:Array<Plato>;
    private fecha:Date;
    private nro:Number;
    private mesa:Mesa;
    private turno:String;
    private static cont=0;

    constructor(mesa:Mesa, turno:String){
        this.nro=Reserva.cont++;
        this.platos=new Array;
        this.fecha =new Date(2017,1,1);
        this.mesa=mesa;
        this.turno=turno;
        this.mesa.OcuparMesa();
    };
    
    
}