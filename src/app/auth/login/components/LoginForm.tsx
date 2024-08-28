"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const validatedFields = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const email = validatedFields.data?.email as string;
    const password = validatedFields.data?.password as string;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response?.error) {
        throw new Error("Failed login");
      }

      router.refresh();
      router.push("/admin");
      setLoginError(null);
      setErrors({});
    } catch (error) {
      setLoginError((error as Error).message);
    }
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <Button type="submit">Login</Button>
      {loginError && <p>{loginError}</p>}
    </form>
  );
}
