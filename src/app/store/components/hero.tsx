import TextH1 from "@/components/typography/h1";
import TextP from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="w-full h-[90vh] container flex items-center">
      <div className="flex flex-col gap-4">
        <TextH1 classname="lg:text-5xl">
          Discover the Future of Technology
        </TextH1>
        <TextP className="mt-0 w-1/3">
          Welcome to Gadget Galaxy, your top destination for the latest tech.
          Find cutting-edge laptops, desktops, peripherals, and accessories to
          keep you ahead.
        </TextP>
        <Link href={"/store/products"}>
          <Button className="w-fit">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
}
