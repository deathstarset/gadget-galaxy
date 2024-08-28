import LoginForm from "./components/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          Don{"'"}t have an account ?
          <Link href={"/auth/register"} className="ml-2 text-blue-500">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
