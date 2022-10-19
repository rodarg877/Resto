import { defineStore } from 'pinia'
import axios from 'axios'
import { useStorage } from '@vueuse/core'


export const CarritoStore = defineStore('carrito', {
 
  state: () => ({
    listaPedido:useStorage("listaPedido",[]) as Plato[] ,
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