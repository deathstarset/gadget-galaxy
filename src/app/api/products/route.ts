import { createProduct } from "@/services/products";
import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    // parsing the form data
    const createProductInfo = await request.formData();
    const name = createProductInfo.get("name") as string;
    const description = createProductInfo.get("description") as string;
    const quantity = Number(createProductInfo.get("quantity"));
    const price = createProductInfo.get("price") as string;
    const categoryID = createProductInfo.get("categoryID") as string;

    // constructing the image path
    const image = createProductInfo.get("image") as File;
    const imageBufferArr = await image.arrayBuffer();
    const imageBuffer = new Uint8Array(imageBufferArr);
    const imageExt = image.type.split("/")[1];
    const imageName = `${uuidv4()}.${imageExt}`;
    const uploadDir = "public/uploads/products/";

    // saving the product to the database
    await createProduct({
      name,
      description,
      quantity,
      price,
      categoryID,
      image: imageName,
    });

    // uploading the image
    await fs.mkdir(uploadDir, { recursive: true });
    const imagePath = `${uploadDir}${imageName}`;
    await fs.writeFile(imagePath, imageBuffer);

    // returning a success response
    return NextResponse.json({ status: "success" }, { status: 201 });
  } catch (error) {
    // returning a fail response in case of failure
    return NextResponse.json(
      {
        status: "fail",
        error: (error as Error).message,
      },
      { status: 400 }
    );
  }
}
