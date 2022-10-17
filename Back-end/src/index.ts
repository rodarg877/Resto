import express from "express";
import { connectToDatabase, client } from "./servicio/datos.servicio.js"
import { platosRouter } from "./routes/plato.routes.js";
import { usuariosRouter } from "./routes/usuario.router.js";
import cors from 'cors'

const app = express()
app.use(cors())
const port = 8080

connectToDatabase()
    .then(() => {
        app.use("/platos", platosRouter);
        app.use("/usuarios", usuariosRouter);
    

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    }).finally(()=>client.close());