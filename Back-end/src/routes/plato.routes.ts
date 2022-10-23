import express from 'express'
import PlatosController from '../controller/PlatosController.js'


export const platosRouter = express.Router();

platosRouter.use(express.json());


platosRouter.get("/:nombre?", PlatosController.getPlatos)
platosRouter.post("/", PlatosController.crearPlato)
platosRouter.put("/:nombre", PlatosController.modificarPlato)
platosRouter.delete("/:nombre", PlatosController.eliminarPlato)

