"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const markerController_1 = require("../controllers/markerController"); // Asegúrate de tener los controladores
const router = (0, express_1.Router)();
// Ruta para obtener todos los marcadores
router.get('/', markerController_1.getMarkers);
// Ruta para añadir un nuevo marcador
router.post('/', markerController_1.addMarker);
exports.default = router;
