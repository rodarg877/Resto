// External Dependencies
import * as mongoDB from "mongodb";
import dotenv from "dotenv";
// Global Variables
export const collections: {
  platos?: mongoDB.Collection,
  usuarios?: mongoDB.Collection,
  pedidos?: mongoDB.Collection
} = {}
// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();
  const client: mongoDB.MongoClient = new mongoDB.MongoClient('mongodb://127.0.0.1:27017');

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const platosCollection: mongoDB.Collection = db.collection('Platos');
  const usuariosCollection: mongoDB.Collection = db.collection('Usuarios');
  const pedidosCollection: mongoDB.Collection = db.collection('Pedidos');
  collections.platos = platosCollection;
  collections.usuarios = usuariosCollection;
  collections.pedidos = pedidosCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${platosCollection.collectionName}`);
}