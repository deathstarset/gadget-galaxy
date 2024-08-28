import TypographyH2 from "@/components/typography/h2";
import AddCategoryForm from "./components/AddCategoryForm";
import { Card, CardContent } from "@/components/ui/card";

export default function AddCategory() {
  return (
    <div className="container pt-4">
      <TypographyH2>Add Category</TypographyH2>
      <Card>
        <CardContent className="pt-4">
          <AddCategoryForm />
        </CardContent>
      </Card>
    </div>
  );
}
