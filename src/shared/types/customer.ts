export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};
