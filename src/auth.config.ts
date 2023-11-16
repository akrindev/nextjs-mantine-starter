import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "./lib/supabase";

export const authConfig = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "john@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        console.log("authorize supabase");
        console.log(data, error);

        if (error) {
          throw new Error(error.message);
        }

        return data.user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;
