"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };
const handleGoogleSignIn = async () => {
  setError("Not yet implemented");
  setTimeout(() => setError(null), 3000); // clear after 3s
};

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
            {isSignUp ? "Sign Up" : "Login"}
          </CardTitle>
          <CardDescription>
            {isSignUp
              ? "Enter your information to create an account."
              : "Enter your email below to login to your account."}
          </CardDescription>
        </CardHeader>
        <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          <CardContent className="grid gap-4">
            {isSignUp && (
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button className="w-full mt-4" type="submit">
                {isSignUp ? "Create account" : "Sign in"}
              </Button>
              <Button
                className="w-full mt-4"
                variant="outline"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </Button>
              <div className="mt-4 text-center text-sm">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <Link
                      href="#"
                      className="underline"
                      onClick={() => setIsSignUp(false)}
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    Don&apos;t have an account?{" "}
                    <Link
                      href="#"
                      className="underline"
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}