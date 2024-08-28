import TypographyH1 from "@/components/typography/h1";
import TypographyH4 from "@/components/typography/h4";
import TypographyP from "@/components/typography/p";
import TypographySmall from "@/components/typography/small";
import { Trophy, MonitorSmartphone, Truck } from "lucide-react";

const storeFeatures = [
  {
    icon: <Trophy size={40} />,
    title: "Excelent Quality",
    content: "The best quality in the market",
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Dedicated support",
    content: "Rapid response 24/7",
  },
  {
    icon: <Truck size={40} />,
    title: "Express Delivery",
    content: "Delivery available anywhere",
  },
];

export default function Features() {
  return (
    <div className="container h-[50vh]">
      <TypographyH1 classname="mb-16">Features</TypographyH1>
      <div className="flex items-center justify-between w-[90%] m-auto">
        {storeFeatures.map((feature, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <>{feature.icon}</>
              <div className="">
                <TypographyH4 classname="mb-0">{feature.title}</TypographyH4>
                <TypographySmall classname="m-0">
                  {feature.content}
                </TypographySmall>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
