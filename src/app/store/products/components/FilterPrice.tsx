import TypographyH4 from "@/components/typography/h4";
import { Input } from "@/components/ui/input";

export default function FilterPrice() {
  return (
    <div className="flex flex-col gap-4">
      <TypographyH4 classname="text-base">Price Value</TypographyH4>
      <div className="flex flex-col gap-2">
        <Input placeholder="Set min price" />
        <Input placeholder="Set max price" />
      </div>
    </div>
  );
}
