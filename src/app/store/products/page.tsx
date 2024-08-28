import FilterProducts from "./components/FilterProducts";
import ViewProducts from "./components/ViewProducts";

export default function Products({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = parseInt(searchParams.page as string) || 1;
  return (
    <div className="container flex gap-3">
      <FilterProducts />
      <ViewProducts page={page} />
    </div>
  );
}
