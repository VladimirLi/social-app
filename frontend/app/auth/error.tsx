"use client";

import { Card } from "@/app/ui/common/Card";
import { Button } from "../ui/common/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="h-screen flex items-center">
      <Card className="mx-auto ">
        <h2 className="text-center">Something went wrong!</h2>
        <p className="text-center text-sm text-gray-500">{error.message}</p>
        <Button onClick={() => reset()} className="mt-4">
          Try again
        </Button>
      </Card>
    </main>
  );
}
