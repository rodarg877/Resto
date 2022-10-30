import express from 'express';
import DeliveryController from '../controller/DeliveryController.js';
export const deliveryRouter = express.Router();

deliveryRouter.use(express.json());


deliveryRouter.post("/", DeliveryController.actualizarPrecio);
deliveryRouter.get("/", DeliveryController.getPrecioDelivery);

