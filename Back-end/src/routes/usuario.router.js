var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { collections } from '../servicio/datos.servicio.js';
import Pedido from '../models/Pedido.js';
import UsuarioController from '../controller/UsuarioController.js';
export const usuariosRouter = express.Router();
usuariosRouter.use(express.json());
usuariosRouter.get("/:nick?", UsuarioController.getUsuarios);
// usuariosRouter.get("/", async (_req: Request, res: Response) => {
//     try {
//         const usuarios: Usuario[] = (await collections.usuarios?.find({}).toArray()) as unknown as Usuario[];
//         res.status(200).send(usuarios);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });
// usuariosRouter.get("/:id", async (req: Request, res: Response) => {
//     const id = req?.params?.id;
//     try {
//         const query = { nick: id};
//         const usuario = (await collections.usuarios?.findOne(query)) as unknown as Usuario;
//         if (usuario) {
//             res.status(200).send(usuario)
//         }else{
//             throw Error
//         }
//     } catch (error) {
//         res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
//     }
// });
usuariosRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const newUsuario = req.body;
        const result = yield ((_a = collections.usuarios) === null || _a === void 0 ? void 0 : _a.insertOne(newUsuario));
        result
            ? res.status(201).send(`Successfully created a new usuario with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a usuario");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
}));
usuariosRouter.put("/pedidos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    try {
        console.log(req.body);
        const updatedUsuario = req.body;
        const query = { nick: id };
        const result = yield ((_c = collections.usuarios) === null || _c === void 0 ? void 0 : _c.updateOne(query, { $push: { pedidos: new Pedido(updatedUsuario) } }));
        result
            ? res.status(200).send(`Successfully updated Usuario with id ${id}`)
            : res.status(304).send(`Usuario with id: ${id} not updated`);
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
