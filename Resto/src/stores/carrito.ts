import { defineStore } from 'pinia'
import axios from 'axios'
import { useStorage} from '@vueuse/core'
import {UsuarioStore} from './usuario.js'


export const CarritoStore = defineStore('carrito', {
 
  state: () => ({
    listaPedido:useStorage("listaPedido", []) as unknown as Plato[],
    valorDelivery: useStorage("delivery", 0)
}),
actions: {
    agregarAPedido(item:Plato) {
     let buscado:Plato=this.listaPedido?.filter((i)=> i.nombre==item.nombre)[0]
     if(!buscado){
        this.listaPedido.push({...item})   
      }else{
        buscado.cantidad+=item.cantidad
      }
    },
    crearPedido(usuario:String, direccion: String){
      const url: string = `http://localhost:8080/pedidos`


      //const pedido = new Pedido(this.listaPedido, usuario); 


      //axios.post(url, {this.listaPedido, this.valorDelivery})
    }, 
    eliminarPlato(item:Plato){
      console.log(this.listaPedido.indexOf(item));
      
      this.listaPedido?.splice(this.listaPedido.indexOf(item), 1)
    },
    obtenerPrecioDelivery(){
      this.valorDelivery = axios.get('http://localhost:8080/delivery') as unknown as number
    }
    
}
})

interface Plato {
nombre: string
descripcion:string
img:String
precio: number
cantidad: number
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
}