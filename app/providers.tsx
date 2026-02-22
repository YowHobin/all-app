"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sileo";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster position="top-right" />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}
