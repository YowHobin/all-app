// components/DashboardClient.tsx
"use client";

import { useState, useEffect } from "react";
import { toast } from "@/components/ui/Toast";

interface DashboardClientProps {
  userName?: string | null;
}

const SESSION_STORAGE_KEY = "dashboard_welcome_shown";

export default function DashboardClient({ userName }: DashboardClientProps) {
  const [hasShownToast, setHasShownToast] = useState(false);

  // Show toast only on fresh login (not on page refresh or revisit)
  useEffect(() => {
    const hasShownWelcome = sessionStorage.getItem(SESSION_STORAGE_KEY);
    
    if (!hasShownToast && userName && !hasShownWelcome) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      toast.success({
        title: `Welcome, ${userName}!`,
        description: "You have successfully logged in.",
      });
      setTimeout(() => setHasShownToast(true), 0);
    }
  }, [userName, hasShownToast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome, {userName ?? "Player"}!
        </h1>
        <p className="text-gray-600">
          You have successfully logged in to your dashboard.
        </p>
      </div>
    </div>
  );
}
