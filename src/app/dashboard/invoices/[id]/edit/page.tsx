import { EditInvoiceForm } from '@features/dashboard/components/edit-form';
import { Breadcrumbs } from '@shared/components/breadcrumbs';
import { fetchCustomers } from '@features/dashboard/database/customer';
import { fetchInvoiceById } from '@features/dashboard/database/invoice';

type EditInvoicePageProps = { params: { id: string } };

export default async function EditInvoicePage({
  params,
}: EditInvoicePageProps) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </main>
  );
}
