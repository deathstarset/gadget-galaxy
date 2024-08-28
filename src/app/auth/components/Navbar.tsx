import TextH1 from "@/components/typography/h1";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container h-[10vh] flex items-center">
      <Link href={"/store"}>
        <TextH1>GadgetGalaxy</TextH1>
      </Link>
    </div>
  );
}
