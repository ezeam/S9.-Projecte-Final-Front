"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCliente = exports.postCliente = exports.deleteCliente = exports.getCliente = exports.getClientes = void 0;
const cliente_1 = __importDefault(require("../models/cliente"));
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClientes = yield cliente_1.default.findAll();
    res.json(listClientes);
});
exports.getClientes = getClientes;
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield cliente_1.default.findByPk(id);
    if (cliente) {
        res.json({ cliente });
    }
    else {
        res.status(404).json({ msg: `No existe un cliente con el ID ${id}` });
    }
});
exports.getCliente = getCliente;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield cliente_1.default.findByPk(id);
    if (cliente) {
        yield cliente.destroy();
        res.json({ msg: `El cliente con el ID ${id} fue eliminado con éxito` });
    }
    else {
        res.status(404).json({ msg: `No existe un cliente con el ID ${id}` });
    }
});
exports.deleteCliente = deleteCliente;
const postCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield cliente_1.default.create(body);
        res.json({ msg: `El cliente fue agregado con éxito` });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: `Upsss....ha ocurrido un error, comuníquese con soporte` });
    }
});
exports.postCliente = postCliente;
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const cliente = yield cliente_1.default.findByPk(id);
        if (cliente) {
            yield cliente.update(body);
            res.json({ msg: `El cliente con el ID ${id} fue actualizado con éxito` });
        }
        else {
            res.status(404).json({ msg: `No existe un cliente con el ID ${id}` });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: `Upsss....ha ocurrido un error, comuníquese con soporte` });
    }
});
exports.updateCliente = updateCliente;
