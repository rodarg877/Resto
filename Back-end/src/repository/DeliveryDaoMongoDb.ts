import { collections } from '../servicio/datos.servicio.js';


export default class DeliveryDaoMongoDb {
    static async actualizarPrecio(precio:string){
        try {
            if(collections.preciosDelivery?.findOne({}) != null){
                collections.preciosDelivery?.drop();
            }
            collections.preciosDelivery?.insertOne({precio});
            
            return true 
        }catch(e){
            return false;
            
        }
    }

    static async getPrecioDelivery(){
        try {
           return  collections.preciosDelivery?.findOne({});
        }catch(e){
            return e.message;
        }
    }
}