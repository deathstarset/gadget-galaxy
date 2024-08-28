import TypographyH4 from "@/components/typography/h4";
import TypographyMuted from "@/components/typography/muted";
import TypographyP from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";

const footerLinks = [
  {
    id: 1,
    title: "Rapid Links",
    options: [
      "Delivery Places",
      "Privacy Policy",
      "Return Policy",
      "Delivery Policy",
    ],
  },
  {
    id: 2,
    title: "Categories",
    options: ["Products", "Browse Categories", "Cart"],
  },
];
const socialMediaLinks = [<Instagram />, <Facebook />, <Twitter />];

export default function Footer() {
  return (
    <div className="bg-slate-100 py-8">
      <div className="container flex justify-between">
        <div className="flex flex-col items-center w-fit gap-4">
          <TypographyH4>Gadget Galaxy</TypographyH4>
          <nav className="flex items-center w-fit">
            {socialMediaLinks.map((link, index) => {
              return (
                <Icon key={index} classname="hover:bg-slate-200">
                  {link}
                </Icon>
              );
            })}
          </nav>
        </div>
        {footerLinks.map((link) => {
          return (
            <div key={link.id}>
              <TypographyP classname="mb-4 text-lg font-semibold">
                {link.title}
              </TypographyP>
              <nav className="flex flex-col gap-4">
                {link.options.map((option, index) => {
                  return (
                    <TypographyMuted key={index}>{option}</TypographyMuted>
                  );
                })}
              </nav>
            </div>
          );
        })}
        <div className="w-[400px]">
          <TypographyP classname="mb-4 text-lg font-semibold">
            Newsletter
          </TypographyP>
          <div className="flex flex-col gap-2 items-start">
            <TypographyMuted>
              Subscribe to our newsletter to be notified of product launches,
              special offers and new arrivals.
            </TypographyMuted>
            <Input placeholder="example@exmple.com" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
