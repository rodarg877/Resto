import { defineStore } from 'pinia'
import axios from 'axios'


export const CarritoStore = defineStore('carrito', {
  state: () => ({
    listaPedido: [] as Plato[] ,
}),
actions: {
    agregarAPedido(item:Plato) {
     let buscado:Plato=this.listaPedido.filter((i)=> i.nombre==item.nombre)[0]
     if(!buscado){
        this.listaPedido.push(item)   
      }else{
        buscado.cantidad++
      }
    },
    agregarUno(item:Plato){
      item.cantidad++
    },
    restarUno(item:Plato){
      item.cantidad--
    },
    finalizarPedido(usua:User){
      const url: string = `http://localhost:8080/usuarios/${usua.nick}`
      axios.put(url, this.listaPedido)
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
interface User {
  nick: string
  pass: string
  mail: string
}