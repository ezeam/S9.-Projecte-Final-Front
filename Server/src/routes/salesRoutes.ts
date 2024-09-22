// routes/sales.ts

import { Router, Request, Response, NextFunction } from 'express';
import * as SalesController from '../controllers/salesController';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sales = await SalesController.getSales();
    res.json(sales);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sales = await SalesController.getSales();
    console.log("Sales desde la función get del server:", sales); // Verifica lo que se está devolviendo
    res.json(sales);
  } catch (err) {
    console.error('Error al obtener ventas:', err); // Registra el error
    next(err);
  }
});


router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { mes, importe } = req.body;

    if (!mes || !importe) {
      return res.status(400).json({ error: 'Mes y venta son obligatorios' });
    }

    const sale = await SalesController.createSale(req.body);
    res.status(201).json(sale);
  } catch (err) {
    next(err);
  }
});


router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const [affectedCount, affectedRows] = await SalesController.updateSale(Number(req.params.id), req.body);
    if (affectedCount > 0) {
      res.json(affectedRows);
    } else {
      res.status(404).send('Sale not found');
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await SalesController.deleteSale(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;
