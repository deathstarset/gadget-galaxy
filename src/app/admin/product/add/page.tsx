import TypographyH2 from "@/components/typography/h2";
import { Card, CardContent } from "@/components/ui/card";
import AddProductForm from "./components/AddProductForm";
import { getCategories } from "@/services/categories";

export default async function ProductAdd() {
  const categories = await getCategories();
  return (
    <div className="container pt-4">
      <TypographyH2>Add Product</TypographyH2>
      <Card>
        <CardContent className="pt-4">
          <AddProductForm categories={categories} />
        </CardContent>
      </Card>
    </div>
  );
}
