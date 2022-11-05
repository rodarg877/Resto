import { defineStore } from 'pinia'
import axios from 'axios'
import { useStorage} from '@vueuse/core'
import {UsuarioStore} from './usuario.js'


export const CarritoStore = defineStore('carrito', { 
 
  state: () => ({
    listaPedido:useStorage("listaPedido", []) as unknown as Plato[],
    valorDelivery: useStorage("delivery", 0) //Revisar si es necesario guardarlo en el storage
}),
actions: {
    agregarAPedido(item:Plato) {
      console.log(item);
      
     let buscado:Plato=this.listaPedido?.filter((i)=> i.nombre==item.nombre)[0]
     if(!buscado){
        this.listaPedido.push({...item})   
      }else{
        buscado.cantidad+=item.cantidad
      }
    },
    async crearPedido(){ 
    //platos -> lista pedidos del store
    //usuario del local storage
    //direccion -> Local storage
    //valorDelivery ->Parametro o storage.
      const url: string = `http://localhost:8080/pedidos`
      const usuario = JSON.parse(localStorage.getItem('usuario')); //funciona igual.
      
      //Creamos pedido
      const pedidoNew:Pedido = {platos:this.listaPedido,user:usuario.nick,direccion:usuario.direccion,precioDelivery:this.valorDelivery} as  Pedido;
      console.log( "Pedido nuevo: " + pedidoNew.platos[0].tipoPlato);
      //llamada al endpoint

      await axios.post(url, pedidoNew);
      this.listaPedido=[]
      
    }, 
    eliminarPlato(item:Plato){
      console.log(this.listaPedido.indexOf(item));
      
      this.listaPedido?.splice(this.listaPedido.indexOf(item), 1)
    },
   async obtenerPrecioDelivery(){
      const valor = await axios.get('http://localhost:8080/delivery');      
      this.valorDelivery = valor.data.precio;
    }
    
}
})

interface Plato {
nombre: string
descripcion:string
img:String
precio: number
cantidad: number
tipoPlato:string
}
// interface User {
//   nick: string
//   pass: string
//   mail: string
// }
interface Pedido{
     platos: Plato[];
     user: string;
     direccion: string;
     precioDelivery:number;
}