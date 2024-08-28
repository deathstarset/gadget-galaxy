import NextAuth from "next-auth";
import options from "@/next-auth.config";

const handler = NextAuth(options);

export { handler as GET, handler as POST };
