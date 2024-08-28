import TypographySmall from "@/components/typography/small";
import { useState } from "react";

interface CategoriesDisplayProps {
  categories: Category[];
}
export default function CategoriesDisplay({
  categories,
}: CategoriesDisplayProps) {
  const [max, setMax] = useState(5);
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  function showMore() {
    if (max < categories.length) {
      setMax(max + 5);
    }
  }
  function checkCategory(category: string): boolean {
    const categoryExist = categoriesList.find((item) => item === category);
    if (categoryExist) return true;
    return false;
  }
  function filterCategory(category: string) {
    const categoryExist = categoriesList.find((item) => item === category);
    if (!categoryExist) {
      setCategoriesList([...categoriesList, category]);
    } else {
      setCategoriesList(categoriesList.filter((item) => item !== category));
    }
  }
  console.log(categoriesList);
  return (
    <div className="flex flex-col gap-2">
      {categories.slice(0, max).map((category) => {
        return (
          <TypographySmall
            key={category.id}
            classname={`text-sm text-slate-500 font-thin cursor-pointer hover:text-black p-1 ${
              checkCategory(category.name) && "bg-slate-100 rounded"
            }`}
            onClick={() => filterCategory(category.name)}
          >
            {category.name}
          </TypographySmall>
        );
      })}
      {categories.length !== max && (
        <TypographySmall classname="cursor-pointer p-1" onClick={showMore}>
          Show more
        </TypographySmall>
      )}
    </div>
  );
}
