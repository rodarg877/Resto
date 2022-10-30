import express from "express";
import { connectToDatabase} from "./servicio/datos.servicio.js"
import { platosRouter } from "./routes/plato.routes.js";
import { usuariosRouter } from "./routes/usuario.router.js";
import { deliveryRouter } from "./routes/delivery.router.js";
import cors from 'cors'
import { pedidosRouter } from "./routes/pedido.routes.js";

const app = express()
app.use(cors())
const port = 8080

connectToDatabase() //Lo podemos guardar todo esto en una capa aparte e importarla acá?
    .then(() => {
        app.use("/platos", platosRouter);
        app.use("/usuarios", usuariosRouter);
        app.use("/pedidos", pedidosRouter);
        app.use("/delivery",deliveryRouter);
    

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });