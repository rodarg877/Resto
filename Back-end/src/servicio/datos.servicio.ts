// External Dependencies
import * as mongoDB from "mongodb";
import dotenv from "dotenv";
// Global Variables
export const collections: {
  platos?: mongoDB.Collection,
  usuarios?: mongoDB.Collection,
  pedidos?: mongoDB.Collection,
  preciosDelivery?: mongoDB.Collection
} = {}
export let client: mongoDB.MongoClient;
// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();
  client = new mongoDB.MongoClient('mongodb://127.0.0.1:27017');

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const precioDeliveryCollection: mongoDB.Collection = db.collection('PreciosDelivery');
  const platosCollection: mongoDB.Collection = db.collection('Platos');
  const usuariosCollection: mongoDB.Collection = db.collection('Usuarios');
  const pedidosCollection: mongoDB.Collection = db.collection('Pedidos');
  collections.preciosDelivery = precioDeliveryCollection;
  collections.platos = platosCollection;
  collections.usuarios = usuariosCollection;
  collections.pedidos = pedidosCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${platosCollection.collectionName}`);
}