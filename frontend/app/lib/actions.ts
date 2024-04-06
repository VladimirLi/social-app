"use server";

import { z } from "zod";

const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function createUser(formData: FormData) {
  
  const { email, password } = CreateUserSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  const response = await fetch(`${process.env.API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const responseBody = await response.json();
    throw new Error(responseBody.message);
  }
}
