import express, { Request, Response } from 'express'
import Pedido from '../models/Pedido.js';
import PedidoService from '../service/PedidoService.js';

export default class UsuarioController {
   
   public static async getPedidos(req: Request, res: Response) {
            const { nick } = req.params;
            res.json(await PedidoService.obtenerPedido(nick))

        }
        public static async crearPedido(req: Request, res: Response) {
            const pedido =req.body as unknown as Pedido
            res.json(await PedidoService.crearPedido(pedido))

        }
        public static async modificarPedido(req: Request, res: Response) {
            const {id} = req.params;
            const pedido =req.body as unknown as Pedido
            res.json(await PedidoService.modificarPedido(id,pedido))

        }
}