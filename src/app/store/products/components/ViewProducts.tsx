import TypographyMuted from "@/components/typography/muted";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProductsCount, getProductsPaginate } from "@/services/products";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ViewProductsProps {
  page: number;
}
export default async function ViewProducts({ page }: ViewProductsProps) {
  const limit = 5;
  const offset = (page - 1) * limit;

  const productsInfo = await getProductsPaginate(limit, offset);
  const productsCount = (await getProductsCount())[0].count;

  return (
    <div className="w-3/4 flex flex-col gap-4 ">
      <div className="flex items-center justify-between">
        <TypographyMuted>
          Shown {productsInfo.length} items from {productsCount}
        </TypographyMuted>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rating</SelectItem>
            <SelectItem value="price">Highest Price</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {productsInfo.map((product) => {
          return (
            <Link
              href={`/store/products/${product.products?.id}`}
              key={product.products?.id}
            >
              <ProductCard productInfo={product} />
            </Link>
          );
        })}
      </div>
      <Pagination className="mb-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${page > 1 ? page - 1 : page}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1" isActive={page == 1}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" isActive={page == 2}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=3" isActive={page == 3}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`?page=${offset < productsCount ? page + 1 : page}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
