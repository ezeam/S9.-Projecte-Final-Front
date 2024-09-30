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
exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, email, password } = req.body;
    try {
        // Verificar si el usuario ya existe
        const existingUser = yield user_1.default.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ msg: 'Email ya registrado' });
        }
        // Hash de la contraseña
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Crear un nuevo usuario
        yield user_1.default.create({ name, surname, email, password: hashedPassword });
        console.log("Registro de usuario:", { name, surname, email, password });
        console.log("Hash de la contraseña:", hashedPassword);
        res.status(201).json({ msg: 'Usuario registrado con éxito' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
});
exports.registerUser = registerUser;