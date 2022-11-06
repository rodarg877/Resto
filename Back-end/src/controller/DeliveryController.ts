import DeliveryService from "../service/DeliveryService.js";
import express, { Request, Response } from 'express';


export default class DeliveryController {

     static async actualizarPrecio(req: Request, res: Response){
        const {precio}= req.body;
        console.log("El precio que llega es: " + precio);
        
        res.json(await DeliveryService.actualizarPrecio(precio));
    }

    static async getPrecioDelivery(req: Request, res: Response){
        res.json(await DeliveryService.getPrecioDelivery());
    }
    
   

}