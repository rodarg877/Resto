import Mesa from "./models/Mesa.js";
import Reserva from "./models/Reserva.js";


const res:Reserva = new Reserva(new Mesa(4,1),"T")
const res2:Reserva = new Reserva(new Mesa(4,2),"T")
console.log(res);
console.log(res2);