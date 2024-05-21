'use server';

import { signOut } from '@shared/configs/next-auth/auth';

export async function signOutUser() {
  await signOut();
}
