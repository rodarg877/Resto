export default class Reserva{
    static cont=0;
    constructor(fecha, mesa, turno){
        this.nro=this.constructor.cont++;
        this.platos=[];
        this.fecha =fecha;
        this.mesa=mesa;
        this.turno=turno;
    };
    
    
}