import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Theme from "@/app/store/components/theme";

import { auth } from "@/utils/auth";
export default async function NavBar() {
  const session = await auth();
  console.log(session);
  return (
    <div className="h-[10vh] bg-white container flex items-center justify-between">
      <div className="relative w-2/5">
        <Input type="text" placeholder="Search" />
        <Search className="absolute top-[50%] right-4 translate-y-[-50%]" />
      </div>
      <div className="flex items-center gap-2">
        <Theme />
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
