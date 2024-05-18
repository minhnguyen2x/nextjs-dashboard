import { z } from 'zod';

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

export const CreateInvoiceSchema = InvoiceSchema.omit({ id: true, date: true });

export const UpdateInvoiceSchema = InvoiceSchema.omit({ id: true, date: true });
