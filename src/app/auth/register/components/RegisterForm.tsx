"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import z, { set } from "zod";
import { register } from "@/requests/auth";
const registerSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(8),
});
export default function RegisterForm() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [registerError, setRegisterError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const validatedFields = registerSchema.safeParse({
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
    });
    if (!validatedFields.success) {
      setErrors(
        validatedFields.error.errors.reduce(
          (acc, err) => ({ ...acc, [err.path[0]]: err.message }),
          {}
        )
      );
      return;
    }
    const email = validatedFields.data?.email as string;
    const username = validatedFields.data?.username as string;
    const password = validatedFields.data?.password as string;

    try {
      const response = await register({ email, username, password });

      setRegisterError(null);
      setErrors({});
      router.push("/auth/login");
      router.refresh();
    } catch (error) {
      setRegisterError((error as Error).message);
    }
  }
  return (
    <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <Input type="username" name="username" />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <Button type="submit">Register</Button>
      {registerError && <p>{registerError}</p>}
    </form>
  );
}
