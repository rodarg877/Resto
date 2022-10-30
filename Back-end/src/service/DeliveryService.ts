import DeliveryDaoMongoDb from "../repository/DeliveryDaoMongoDb.js";
export default class DeliveryService {

    static async actualizarPrecio(precio:string){
        return await DeliveryDaoMongoDb.actualizarPrecio(precio);
    }

    static async getPrecioDelivery(){
        return await DeliveryDaoMongoDb.getPrecioDelivery();
    }

}
