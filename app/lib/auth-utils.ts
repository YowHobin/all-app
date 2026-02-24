import { signOut } from "next-auth/react";

export const authUtils = {
  signOut: (callbackUrl?: string) => {
    const url = callbackUrl ?? "/login?reason=logged_out";
    signOut({ callbackUrl: url });
  },
};