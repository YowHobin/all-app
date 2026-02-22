'use client';

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: '/login'})} className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-800">
      Sign Out
    </button>
  )
}