import Mesa from "./models/Mesa.js";
import Reserva from "./models/Reserva.js";


var res=new Reserva("15/3/22",new Mesa(4,3),"tarde");
var res2=new Reserva("15/3/22",new Mesa(4,3),"tarde");
console.log(res.nro);
console.log(res2.nro);