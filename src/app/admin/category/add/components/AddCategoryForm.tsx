"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addCategory } from "@/requests/categories";

const addCategorySchema = z.object({
  name: z.string().max(50),
});

type AddCategorySchemaType = z.infer<typeof addCategorySchema>;

export default function AddCategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setValue,
  } = useForm<AddCategorySchemaType>({
    resolver: zodResolver(addCategorySchema),
  });
  const [addCategoryError, setAddCategoryError] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  async function onSubmit(data: AddCategorySchemaType) {
    try {
      setValue("name", "");
      const response = await addCategory(data);
      console.log(response);
      setAddCategoryError(null);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1000);
    } catch (error) {
      setAddCategoryError((error as Error).message);
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <Input {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <Button type="submit" disabled={isLoading}>
        Add Category
      </Button>
      {addCategoryError && <p className="text-red-500">{addCategoryError}</p>}
      {showSuccessMessage && (
        <p className="text-green-500">Category Added Succefully</p>
      )}
    </form>
  );
}
