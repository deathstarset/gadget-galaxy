import { createUser } from "@/services/users";
import { hashPassword } from "@/utils/password";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const createUserInfo: CreateUser = await request.json();
    const hashedPassword = await hashPassword(createUserInfo.password);
    const user = await createUser({
      email: createUserInfo.email,
      username: createUserInfo.username,
      password: hashedPassword,
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
