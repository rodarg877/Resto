export default class Reserva {
    constructor(mesa, turno) {
        this.nro = Reserva.cont++;
        this.platos = new Array;
        this.fecha = new Date(2017, 1, 1);
        this.mesa = mesa;
        this.turno = turno;
        this.mesa.OcuparMesa();
    }
    ;
}
Reserva.cont = 0;
