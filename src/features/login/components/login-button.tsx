import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@app/ui/button';
import { useFormStatus } from 'react-dom';

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" disabled={pending} aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
