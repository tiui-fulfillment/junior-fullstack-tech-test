export interface Order {
  id: string;
  customerName: string | null;
  status: 'pending' | 'paid' | 'cancelled';
  amount: number;
  paymentMethod: 'credit_card' | 'debit_card' | 'cash' | 'transfer';
  incidentReported: boolean;
}
