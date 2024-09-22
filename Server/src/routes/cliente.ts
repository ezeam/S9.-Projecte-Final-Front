import { Router } from 'express';
import { deleteCliente, getCliente, getClientes, postCliente, updateCliente } from '../controllers/cliente';

const router = Router();

router.get('/', getClientes);
router.get('/:id', getCliente);
router.delete('/:id', deleteCliente);
router.post('/', postCliente);
router.put('/:id', updateCliente);

export default router;