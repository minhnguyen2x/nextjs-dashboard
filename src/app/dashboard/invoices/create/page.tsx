import { CreateInvoiceForm } from '@features/dashboard/components/create-form';
import { Breadcrumbs } from '@shared/components/breadcrumbs';
import { fetchCustomers } from '@features/dashboard/database/customer';

export default async function CreateInvoicePage() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <CreateInvoiceForm customers={customers} />
    </main>
  );
}
