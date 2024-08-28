import TypographyH2 from "@/components/typography/h2";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/services/products";
import Link from "next/link";
import { DataTable } from "./components/data-table";
import type { Product } from "./components/product-columns";
import { columns } from "./components/product-columns";

export default async function ProductsList({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const limit = parseInt(searchParams.max as string) || 5;
  const offset = parseInt(searchParams.skip as string) || 0;
  const result = await getProducts();

  const productsTableData: Product[] = result.map((item) => {
    return {
      name: item.products?.name as string,
      description: item.products?.description as string,
      quantity: item.products?.quantity as number,
      price: Number(item.products?.price),
      category: item.categories.name,
    };
  });
  return (
    <div className="container pt-4">
      <TypographyH2>List Products</TypographyH2>
      <DataTable columns={columns} data={productsTableData} />
      {/* {products.map((product) => {
        return <p key={product.id}>{product.name}</p>;
      })}
      <div className="flex items-center gap-4">
        {offset > 0 && (
          <Link
            href={
              offset === 5
                ? "/admin/product/list"
                : `?max=${limit}&skip=${offset - 5}`
            }
          >
            <Button>Previous</Button>
          </Link>
        )}
        {limit <= products.length && (
          <Link href={`?max=${limit}&skip=${offset + 5}`}>
            <Button>Next</Button>
          </Link>
        )}
      </div> */}
    </div>
  );
}
