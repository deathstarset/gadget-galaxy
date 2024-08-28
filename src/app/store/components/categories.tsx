import TextH1 from "@/components/typography/h1";
import { getCategories } from "@/services/categories";
import CategoriesSlider from "./categoriesSlider";

export default async function Categories() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="container h-[50vh]">
      <TextH1 classname="">Categories</TextH1>
      <CategoriesSlider categories={categories} />
    </div>
  );
}
