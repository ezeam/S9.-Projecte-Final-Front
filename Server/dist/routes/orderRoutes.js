"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/orderRoutes.ts
const express_1 = require("express");
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const router = (0, express_1.Router)();
// Obtener todas las órdenes
router.get('/', OrderController_1.default.getOrders);
// Crear una nueva orden
router.post('/', OrderController_1.default.createOrder);
// Obtener una orden por ID
router.get('/:id', OrderController_1.default.getOrderById);
// Actualizar una orden
router.put('/:id', OrderController_1.default.updateOrder);
// Eliminar una orden
router.delete('/:id', OrderController_1.default.deleteOrder);
exports.default = router;
