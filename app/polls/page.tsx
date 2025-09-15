"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PollsPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Polls</h1>
        <Button asChild>
          <Link href="/polls/create">Create Poll</Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {/* This will be replaced with a dynamic list of polls */}
        <Card>
          <CardHeader>
            <CardTitle>Example Poll</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
