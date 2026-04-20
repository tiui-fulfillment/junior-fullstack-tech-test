import { Order } from '../types/order';

interface Props {
  orders: Order[];
  onMarkAsPaid: (id: string) => void;
}

const statusLabel: Record<string, string> = {
  pending: 'Pendiente',
  paid: 'Pagado',
  cancelled: 'Cancelado',
};

const paymentMethodLabel: Record<string, string> = {
  credit_card: 'Tarjeta de crédito',
  debit_card: 'Tarjeta de débito',
  cash: 'Efectivo',
  transfer: 'Transferencia',
};

export default function OrderTable({ orders, onMarkAsPaid }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Estado</th>
          <th>Monto</th>
          <th>Método de pago</th>
          <th>Incidencia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>
              {order.customerName?.toUpperCase() || 'SIN NOMBRE'}

              {order.incidentReported && (
  <span className="incident-badge">
    ⚠
  </span>
)}
            </td>
            <td>
              <span className={`status-badge status-${order.status}`}>
                {statusLabel[order.status] ?? order.status}
              </span>
            </td>
            <td>${order.amount.toFixed(2)}</td>
            <td>{paymentMethodLabel[order.paymentMethod] ?? order.paymentMethod}</td>
            <td>{order.incidentReported ? 'Sí' : 'No'}</td>
            <td  className="actions-cell">
                {order.status === 'pending' ? (
                  <button onClick={() => onMarkAsPaid(order.id)}>
                    Marcar como pagado
                  </button>
                ) : (
                  '-'
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
