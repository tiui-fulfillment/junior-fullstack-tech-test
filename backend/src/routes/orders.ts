import { Router, Request, Response } from 'express';
import { orders } from '../data/orders';

const router = Router();

// GET /api/orders — lista todos los pedidos, con filtro opcional por status
router.get('/', (req: Request, res: Response) => {
  const { status } = req.query;

  if (status && typeof status === 'string') {
    const filtered = orders.filter((o) => o.status === status);
    return res.json(filtered);
  }

  return res.json(orders);
});

// GET /api/orders/:id — obtiene un pedido por id
router.get('/:id', (req: Request, res: Response) => {
  const order = orders.find((o) => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Pedido no encontrado' });
  }
  return res.json(order);
});

// PATCH /api/orders/:id/pay — marca un pedido como pagado
router.patch('/:id/pay', (req: Request, res: Response) => {
  const order = orders.find((o) => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Pedido no encontrado' });
  }

  if (order.incidentReported) {
    return res.status(400).json({
      error: 'El pedido tiene una incidencia, no se puede marcar como pagado'});
  }

  order.status = 'paid';
  return res.json(order);
});

export default router;
