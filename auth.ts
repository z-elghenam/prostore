import NextAuth from "next-auth";

import { prisma } from "./lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { config } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },

  callbacks: {
    async session({ session, user, trigger, token }) {
      // Set the user id on the session
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      // If there is an update, set the name on the session
      if (trigger === "update") {
        session.user.name = user.name;
      }
      return session;
    },
  },

  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  ...config,
});
