import TypographyH4 from "@/components/typography/h4";
import TypographySmall from "@/components/typography/small";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { formatPrice } from "@/utils/price";

interface ProductCardProps {
  productInfo: ProductInfo;
}
export default function ProductCard({ productInfo }: ProductCardProps) {
  return (
    <Card className="w-[300px] h-[350px] flex flex-col gap-4 min-h-auto">
      <Image
        alt="product"
        height={"200"}
        width={"300"}
        src={"/sky.jpg"}
        className="rounded-md h-[200px] w-[300px]"
      />
      <CardContent className="flex flex-col justify-between h-full">
        <TypographyH4>{productInfo.products?.name}</TypographyH4>
        <TypographySmall>
          {formatPrice(productInfo.products?.price as string)}
        </TypographySmall>
      </CardContent>
    </Card>
  );
}
