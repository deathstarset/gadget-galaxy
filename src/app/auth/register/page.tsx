import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "./components/RegisterForm";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          Already have an account ?
          <Link href={"/auth/login"} className="ml-2 text-blue-500">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
