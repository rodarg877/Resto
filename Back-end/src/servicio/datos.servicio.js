var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// External Dependencies
import * as mongoDB from "mongodb";
import dotenv from "dotenv";
// Global Variables
export const collections = {};
// Initialize Connection
export function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv.config();
        const client = new mongoDB.MongoClient('mongodb://127.0.0.1:27017');
        yield client.connect();
        const db = client.db(process.env.DB_NAME);
        const platosCollection = db.collection('Platos');
        const usuariosCollection = db.collection('Usuarios');
        const pedidosCollection = db.collection('Pedidos');
        collections.platos = platosCollection;
        collections.usuarios = usuariosCollection;
        collections.pedidos = pedidosCollection;
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${platosCollection.collectionName}`);
    });
}
