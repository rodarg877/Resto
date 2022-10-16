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
import { ObjectId } from 'mongodb';
export const platosRouter = express.Router();
platosRouter.use(express.json());
platosRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const platos = (yield ((_a = collections.platos) === null || _a === void 0 ? void 0 : _a.find({}).toArray()));
        res.status(200).send(platos);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
platosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const query = { _id: new ObjectId(id) };
        const plato = (yield ((_c = collections.platos) === null || _c === void 0 ? void 0 : _c.findOne(query)));
        if (plato) {
            res.status(200).send(plato);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}));
platosRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const newPlato = req.body;
        const result = yield ((_d = collections.platos) === null || _d === void 0 ? void 0 : _d.insertOne(newPlato));
        result
            ? res.status(201).send(`Successfully created a new plato with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a Plato");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
}));
