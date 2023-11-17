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
import classes from "../../app/signin/authentication.module.css";
import { signIn } from "@/auth";
import React, { useState } from "react";

export function AuthenticationImage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={36}>
        <Title order={2} className={classes.title} ta='center' mt='md' mb={50}>
          Authenticate to your account
        </Title>

        <form onSubmit={handleSignIn}>
          <TextInput
            label='Email address'
            placeholder='hello@gmail.com'
            size='md'
            value={email}
            onInput={(event) => setEmail(event.currentTarget.value)}
            required
          />
          <PasswordInput
            label='Password'
            placeholder='Your password'
            mt='md'
            size='md'
            value={password}
            onInput={(event) => setPassword(event.currentTarget.value)}
          />
          <Checkbox label='Keep me logged in' mt='xl' size='md' />
          <Button fullWidth mt='xl' size='md' type='submit'>
            Login
          </Button>
        </form>

        <Text ta='center' mt='md'>
          Don&apos;t have an account?{" "}
          <Anchor<"a">
            href='#'
            fw={700}
            onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
