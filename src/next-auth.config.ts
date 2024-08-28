import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "@/services/users";
import { comparePassword } from "@/utils/password";

const options = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials, req) {
        console.log("authorize");
        try {
          const user = await getUserByEmail(credentials?.email as string);
          if (!user) {
            throw new Error("user not found");
          }
          const match = await comparePassword(
            credentials?.password as string,
            user.password as string
          );
          if (!match) {
            throw new Error("Wrong credentials");
          }
          const editedUser = {
            id: user.id,
            role: user.role,
          } as User;
          return editedUser;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async function ({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async function ({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
} satisfies AuthOptions;

export default options;
