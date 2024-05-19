'use server';

import { signOut } from '@root/auth';

export async function signOutUser() {
  await signOut();
}
