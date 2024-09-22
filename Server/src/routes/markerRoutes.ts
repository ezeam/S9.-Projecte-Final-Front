import { Router } from 'express';
import { getMarkers, addMarker } from '../controllers/markerController'; // Asegúrate de tener los controladores

const router = Router();

// Ruta para obtener todos los marcadores
router.get('/', getMarkers);

// Ruta para añadir un nuevo marcador
router.post('/', addMarker);

export default router;

