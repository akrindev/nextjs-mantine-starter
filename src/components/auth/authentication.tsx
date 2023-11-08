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

export function AuthenticationImage() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={36}>
        <Title order={2} className={classes.title} ta='center' mt='md' mb={50}>
          Authenticate to your account
        </Title>

        <TextInput
          label='Email address'
          placeholder='hello@gmail.com'
          size='md'
        />
        <PasswordInput
          label='Password'
          placeholder='Your password'
          mt='md'
          size='md'
        />
        <Checkbox label='Keep me logged in' mt='xl' size='md' />
        <Button fullWidth mt='xl' size='md'>
          Login
        </Button>

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
