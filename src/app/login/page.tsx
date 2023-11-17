"use client";

import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "./authentication.module.css";
import { signIn } from "next-auth/react";
import React from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const supabase = createClient();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await signIn("credentials", {
      email,
      password,
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={36}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Authenticate to your account
        </Title>

        <form onSubmit={handleSignIn}>
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
            required
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}
