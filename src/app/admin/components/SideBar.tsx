"use client";
import TextH1 from "@/components/typography/h1";
import TypographyMuted from "@/components/typography/muted";
import { Button } from "@/components/ui/button";
import ToggelableButtons from "./ToggleableButtons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productsNav = ["Add", "List"];
const categoriesNav = ["Add", "List"];
const rolesNav = ["Add", "List"];
const usersNav = ["Add", "List"];
export default function SideBar() {
  const path = usePathname();
  const pathArr = path.split("/").filter((item) => item !== "");
  console.log(pathArr);

  return (
    <div className="w-1/5 container">
      <div className="h-[10vh] flex items-center">
        <Link href={"/store"}>
          <TextH1>GadgetGalaxy</TextH1>
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <TypographyMuted classname="font-medium mb-2">
            MAIN HOME
          </TypographyMuted>
          <Link href={"/admin"}>
            <Button
              variant={"ghost"}
              className={`w-full justify-start ${
                !pathArr[1] && "bg-slate-100"
              }`}
            >
              Dashboard
            </Button>
          </Link>
        </div>
        <div>
          <TypographyMuted classname="font-medium mb-2">
            ALL PAGES
          </TypographyMuted>
          <ToggelableButtons trigger="Products">
            {productsNav.map((item) => {
              return (
                <Link href={`/admin/product/${item.toLowerCase()}`}>
                  <Button
                    variant={"ghost"}
                    className={`w-full justify-start ${
                      pathArr[2] === item.toLowerCase() && "bg-slate-100"
                    }`}
                  >
                    {item}
                  </Button>
                </Link>
              );
            })}
          </ToggelableButtons>
          <ToggelableButtons trigger="Categories">
            {categoriesNav.map((item) => {
              return (
                <Link href={`/admin/category/${item.toLowerCase()}`}>
                  <Button
                    variant={"ghost"}
                    className={`w-full justify-start ${
                      pathArr[2] === item.toLowerCase() && "bg-slate-100"
                    }`}
                  >
                    {item}
                  </Button>
                </Link>
              );
            })}
          </ToggelableButtons>
          <ToggelableButtons trigger="Users">
            {usersNav.map((item) => {
              return (
                <Link href={`/admin/user/${item.toLowerCase()}`}>
                  <Button
                    variant={"ghost"}
                    className={`w-full justify-start ${
                      pathArr[2] === item.toLowerCase() && "bg-slate-100"
                    }`}
                  >
                    {item}
                  </Button>
                </Link>
              );
            })}
          </ToggelableButtons>
          <ToggelableButtons trigger="Roles">
            {productsNav.map((item) => {
              return (
                <Link href={`/admin/role/${item.toLowerCase()}`}>
                  <Button
                    variant={"ghost"}
                    className={`w-full justify-start ${
                      pathArr[2] === item.toLowerCase() && "bg-slate-100"
                    }`}
                  >
                    {item}
                  </Button>
                </Link>
              );
            })}
          </ToggelableButtons>
        </div>
      </div>
    </div>
  );
}
