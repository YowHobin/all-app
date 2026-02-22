'use client';

import { signOut } from "next-auth/react";

function SignOutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: '/login' })} className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-800">
      Sign Out
    </button>
  );
}

export default function LogoutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign Out</h2>
          <p className="mt-2 text-gray-600">
            Are you sure you want to sign out?
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}