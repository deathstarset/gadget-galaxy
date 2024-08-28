import { createCategory } from "@/services/categories";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const createCategoryInfo: CreateCategory = await request.json();
    await createCategory(createCategoryInfo);
    return NextResponse.json({ status: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ status: "fail" }, { status: 400 });
  }
}
