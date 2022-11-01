import express, { Request, Response } from 'express'
import Pedido from '../models/Pedido.js';
import PedidoService from '../service/PedidoService.js';
import Plato from '../models/Plato.js';

export default class PedidoController {
   
   public static async getPedidos(req: Request, res: Response) {
            const { nick } = req.params;
            res.json(await PedidoService.obtenerPedido(nick))

        }
        public static async crearPedido(req: Request, res: Response) {
             const {platos, user, direccion,precioDelivery}=req.body
            let newPlatos:Plato[]=[];
            platos.forEach((p: { nombre: string; descripcion: string; img: string; precio: number, tipoPlato:string; }) => {
               const  nuevoP=new Plato(p.nombre, p.descripcion, p.img, p.precio,p.tipoPlato)
                newPlatos.push(nuevoP)
            });

          
            
            const pedido =new Pedido(newPlatos, user, direccion, precioDelivery)
            console.log(pedido);
            
            res.json(await PedidoService.crearPedido(pedido))

        }
        public static async modificarPedido(req: Request, res: Response) {
            const {id} = req.params;
            const pedido =req.body as unknown as Pedido
            res.json(await PedidoService.modificarPedido(id,pedido))

        }
}