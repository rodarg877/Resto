import { defineStore } from 'pinia'
import axios from 'axios'


const CarritoStore = defineStore('carrito', {
  state: () => ({
    listaPedido: [] as ItemPedido[] ,
}),
actions: {
    agregarAPedido(item:ItemPedido) {
     let buscado:ItemPedido=this.listaPedido.filter((i)=> i.nombre==item.nombre)[0]
     if(!buscado){
        this.listaPedido.push(item)   
      }else{
        buscado.cantidad++
      }
    },
    agregarUno(item:ItemPedido){
      item.cantidad++
    },
    restarUno(item:ItemPedido){
      item.cantidad--
    },
    finalizarPedido(usua:User){
      const url: string = `http://localhost:8080/user/${usua.nick}`
      axios.post(url, this.listaPedido)
    }
    
}
})

interface ItemPedido {
nombre: string
cantidad: number
precio: number
descripcion:string
}
interface User {
  nick: string
  pass: string
  mail: string
}