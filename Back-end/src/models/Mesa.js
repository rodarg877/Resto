export default class Mesa {
    constructor(cantAsientos, id) {
        this.id = id;
        this.cantAsientos = cantAsientos;
        this.estaOcupado = false;
    }
    OcuparMesa() {
        this.estaOcupado = true;
    }
}
