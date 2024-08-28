import TypographyH2 from "@/components/typography/h2";
import TypographyH4 from "@/components/typography/h4";
import TypographyP from "@/components/typography/p";

import { getProductByID } from "@/services/products";
import { formatPrice } from "@/utils/price";
import Image from "next/image";
import SelectQuantity from "./components/SelectQuantity";

import { auth } from "@/utils/auth";

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProductByID(params.id);
  const session = await auth();

  return (
    <div className="container flex items-center justify-center h-[90vh] gap-4">
      <div className="flex items-start gap-4 w-full">
        <Image
          src={"/sky.jpg"}
          width={"600"}
          height={"400"}
          alt={product?.name || "Product image"}
          className="rounded w-1/2 h-[400px]"
        />
        <div className="w-1/2 flex flex-col justify-between h-[400px]">
          <TypographyH2>{product?.name}</TypographyH2>
          <TypographyH4>{formatPrice(product?.price as string)}</TypographyH4>
          <TypographyP>{product?.description}</TypographyP>
          <SelectQuantity session={session} product={product as Product} />
        </div>
      </div>
    </div>
  );
}
