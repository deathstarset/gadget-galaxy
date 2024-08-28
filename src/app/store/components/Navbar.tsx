import TextH1 from "@/components/typography/h1";
import { Search, ShoppingCart, User } from "lucide-react";
import Theme from "./theme";
import Icon from "@/components/ui/icon";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="container h-[10vh] flex items-center justify-between">
      <Link href={"/store"}>
        <TextH1>GadgetGalaxy</TextH1>
      </Link>
      <div className="flex items-center">
        <Icon>
          <Search />
        </Icon>
        <Link href={"/auth/login"}>
          <Icon>
            <User />
          </Icon>
        </Link>

        <Theme />
        <Link href={"/store/cart"}>
          <Icon>
            <ShoppingCart />
          </Icon>
        </Link>
      </div>
    </nav>
  );
}
