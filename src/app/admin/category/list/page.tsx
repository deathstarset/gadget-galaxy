import TypographyH2 from "@/components/typography/h2";
import { DataTable } from "./components/data-table";
import { getCategories } from "@/services/categories";
import { columns } from "./components/category-columns";

export default async function ListCategories() {
  const categories = await getCategories();
  const categoriesTableData = categories.map((category) => {
    return {
      name: category.name,
      creation: category.createdAt,
    };
  });
  return (
    <div className="container pt-4">
      <TypographyH2>List Categories</TypographyH2>
      <DataTable columns={columns} data={categoriesTableData} />
    </div>
  );
}
