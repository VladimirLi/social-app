"use client";
import React from "react";
import { Card } from "../ui/Card";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

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
