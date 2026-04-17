import { Order } from '../types/order';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function fetchOrders(status?: string): Promise<Order[]> {
  const url = status ? `${BASE_URL}/orders?status=${status}` : `${BASE_URL}/orders`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error al obtener pedidos');
  return res.json();
}

export async function markOrderAsPaid(id: string): Promise<Order> {
  const res = await fetch(`${BASE_URL}/orders/${id}/pay`, { method: 'PATCH' });
  if (!res.ok) throw new Error('Error al marcar pedido como pagado');
  return res.json();
}
