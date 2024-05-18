import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteInvoice } from '@features/dashboard/actions/invoice';

type DeleteInvoiceProps = {
  id: string;
};

export function DeleteInvoiceButton({ id }: DeleteInvoiceProps) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
