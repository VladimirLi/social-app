"use client";
import { Login } from "@/app/ui/auth/Login";
import { SignUp } from "@/app/ui/auth/SignUp";
import { Card } from "@/app/ui/common/Card";
import React from "react";

export default function AuthPage() {
  const [showLogin, setShowLogin] = React.useState(true);

  return (
    <main className="h-screen flex items-center">
      <Card className="mx-auto min-w-72">
        {showLogin ? (
          <Login changeToSignUp={() => setShowLogin(false)} />
        ) : (
          <SignUp changeToLogin={() => setShowLogin(true)} />
        )}
      </Card>
    </main>
  );
}
