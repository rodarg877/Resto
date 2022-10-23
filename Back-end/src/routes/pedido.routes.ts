import express from 'express'
import PedidosController from '../controller/PedidosController.js'


export const pedidosRouter = express.Router();

pedidosRouter.use(express.json());


pedidosRouter.get("/:nick", PedidosController.getPedidos)
pedidosRouter.post("/", PedidosController.crearPedido)
pedidosRouter.put("/:nombre", PedidosController.modificarPedido)