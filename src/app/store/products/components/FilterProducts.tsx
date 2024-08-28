import TypographyH4 from "@/components/typography/h4";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getCategories } from "@/services/categories";
import FilterForm from "./FilterForm";

export default async function FilterProducts() {
  const categories = await getCategories();
  return (
    <Card className="w-1/4 mb-4">
      <CardHeader>
        <TypographyH4>Filter Options</TypographyH4>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <FilterForm categories={categories} />
      </CardContent>
    </Card>
  );
}
