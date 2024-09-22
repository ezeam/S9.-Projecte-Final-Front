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
exports.addMarker = exports.getMarkers = void 0;
const marker_1 = __importDefault(require("../models/marker"));
// Obtener todos los marcadores de la base de datos
const getMarkers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const markers = yield marker_1.default.findAll();
        res.json(markers);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al obtener los marcadores' });
    }
});
exports.getMarkers = getMarkers;
// Añadir un nuevo marcador
const addMarker = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lng, description } = req.body;
    try {
        const newMarker = yield marker_1.default.create({ lat, lng, description });
        res.json(newMarker);
    }
    catch (err) {
        res.status(500).json({ error: 'Error al añadir el marcador' });
    }
});
exports.addMarker = addMarker;
