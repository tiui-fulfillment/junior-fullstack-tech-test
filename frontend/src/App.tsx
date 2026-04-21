import { useEffect, useState } from 'react';
import { Order } from './types/order';
import { fetchOrders, markOrderAsPaid } from './api/orders';
import OrderTable from './components/OrderTable';
import './App.css';

const STATUS_OPTIONS = [
  { value: '', label: 'Todos' },
  { value: 'pending', label: 'Pendiente' },
  { value: 'paid', label: 'Pagado' },
  { value: 'cancelled', label: 'Cancelado' },
];

export default function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    setLoading(true);
    setError('');
    try {
      const data = await fetchOrders();
      setOrders(data);
    } catch {
      setError('No se pudieron cargar los pedidos. ¿Está corriendo el backend?');
    } finally {
      setLoading(false);
    }
  }

  async function handleMarkAsPaid(id: string) {
    try {
      const updated = await markOrderAsPaid(id);
      setOrders((prev) =>
        prev.map((o) => (o.id === updated.id ? updated : o))
      );
    } catch {
      setError('Error al actualizar el pedido.');
    }
  }

  const filteredOrders = selectedStatus
    ? orders.filter((o) => o.status === selectedStatus)
    : orders;

  return (
    <div className="container">
      <h1>Gestión de Pedidos</h1>

      <div className="filters">
        <label htmlFor="status-filter">Filtrar por estado:</label>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Cargando pedidos...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <OrderTable orders={filteredOrders} onMarkAsPaid={handleMarkAsPaid} />
      )}
    </div>
  );
}
