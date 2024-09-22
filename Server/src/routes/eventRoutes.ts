import { Router } from 'express';
import * as eventController from '../controllers/eventController';

const router = Router();

router.get('/', eventController.getEvents);  // La ruta será /api/events
router.post('/', eventController.addEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

export default router;
