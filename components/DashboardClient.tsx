// components/DashboardClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/Toast";

export default function DashboardClient() {
  const { data: session } = useSession();
  const [hasShownToast, setHasShownToast] = useState(false);

  const userName = session?.user?.name;

  useEffect(() => {
    if (session && !hasShownToast) {
      toast.success({
        title: `Welcome back, ${userName || "Player"}!`,
        description: "You have successfully logged in.",
      });
      setHasShownToast(true);
    }
  }, [session, userName, hasShownToast]);

  return <div>Welcome, {userName || "Player"}!</div>;
}
