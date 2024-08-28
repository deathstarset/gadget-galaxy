"use client";

import CategoriesDisplay from "./CategoriesDisplay";
import FilterPrice from "./FilterPrice";
import { Button } from "@/components/ui/button";
import TypographyH4 from "@/components/typography/h4";

interface FilterFormProps {
  categories: Category[];
}
export default function FilterForm({ categories }: FilterFormProps) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <TypographyH4 classname="text-base">Categories</TypographyH4>
        <CategoriesDisplay categories={categories} />
      </div>
      <FilterPrice />
      <Button>Apply Filters</Button>
    </>
  );
}
