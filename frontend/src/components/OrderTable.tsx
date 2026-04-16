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
            {/* BUG: el cast (as string) silencia TypeScript, pero lanza un error en runtime si customerName es null */}
            <td>{(order.customerName as string).toUpperCase()}</td>
            <td>{statusLabel[order.status] ?? order.status}</td>
            <td>${order.amount.toFixed(2)}</td>
            <td>{paymentMethodLabel[order.paymentMethod] ?? order.paymentMethod}</td>
            <td>{order.incidentReported ? 'Sí' : 'No'}</td>
            <td>
              {order.status === 'pending' && (
                <button onClick={() => onMarkAsPaid(order.id)}>
                  Marcar como pagado
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
