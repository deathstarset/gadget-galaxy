"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { FormEvent, useState } from "react";
import { addProduct } from "@/requests/products";

const addProductSchema = z.object({
  name: z.string().max(20),
  description: z.string().max(100),
  quantity: z.number().min(0),
  image: z.instanceof(File),
  price: z.number().min(0),
  categoryID: z.string().uuid(),
});

interface AddProductFormProps {
  categories: Category[];
}
export default function AddProductForm({ categories }: AddProductFormProps) {
  const [errors, setErrors] = useState({});
  const [addProductError, setAddProductError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const validatedFields = addProductSchema.safeParse({
      name: formData.get("name"),
      description: formData.get("description"),
      quantity: Number(formData.get("quantity")),
      price: Number(formData.get("price")),
      categoryID: formData.get("categoryID"),
      image: formData.get("image") as File,
    });
    if (!validatedFields.success) {
      setErrors(
        validatedFields.error.errors.reduce(
          (acc, err) => ({ ...acc, [err.path[0]]: err.message }),
          {}
        )
      );
      setLoading(false);
      return;
    }
    /* const name = validatedFields.data.name;
    const description = validatedFields.data.description;
    const quantity = validatedFields.data.quantity;
    const price = validatedFields.data.price;
    const categoryID = validatedFields.data.categoryID;
    const image = validatedFields.data.image; */
    try {
      const response = await addProduct(formData);
      console.log(response);
      setAddProductError(null);
      setErrors({});
    } catch (error) {
      setAddProductError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Product name</label>
        <Input type="text" name="name" />

        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description</label>
        <Textarea name="description" />
        {errors.description && (
          <p className="text-red-500">{errors.description}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="quantity">Quantity</label>
        <Input type="number" name="quantity" />
        {errors.quantity && <p className="text-red-500">{errors.quantity}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="price">Price</label>
        <Input type="text" name="price" />
        {errors.price && <p className="text-red-500">{errors.price}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="categoryID">Category</label>
        <Select name="categoryID">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => {
              return (
                <SelectItem value={category.id as string} key={category.id}>
                  {category.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        {errors.category && <p className="text-red-500">{errors.category}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="image">Image</label>
        <input type="file" name="image" />
        {errors.image && <p>{errors.image}</p>}
      </div>
      <Button type="submit" disabled={loading}>
        Add Product
      </Button>
      {addProductError && <p className="text-red-500">{addProductError}</p>}
    </form>
  );
}
