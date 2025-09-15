"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome, {user.user_metadata?.full_name}</h1>
        <p className="mt-4">This is your dashboard.</p>
        <Button className="mt-8" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}