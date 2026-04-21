'use client';

import { signOut } from '@/lib/auth/auth-client';
import { DropdownMenuItem } from './ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        await signOut();
        router.push('/sign-in');
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
}
