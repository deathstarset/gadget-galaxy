import { auth } from "@/utils/auth";
import ItemsView from "./components/ItemsView";

export default async function Cart() {
  const session = await auth();

  return (
    <div className="container">
      <ItemsView session={session} />
    </div>
  );
}
