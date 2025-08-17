import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./LoginPage.module.css";
import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../auth/AuthProvider";
import { useForm } from "@mantine/form";

export function LoginPage() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length < 6 ? "Password should include at least 6 characters" : null,
    },
  });

  const [loading, setLoading] = useState(false);
  const { onLogin } = useAuth();

  function handleLogin() {

    const validation = form.validate();
    if (validation.hasErrors) {
      console.log(validation);
    } else {
      setLoading(true);
      onLogin(form.values.email, form.values.password);
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput
          label="Email"
          required
          radius="md"
          value={form.values.email}
          onChange={(e) => form.setFieldValue("email", e.currentTarget.value)}
          error={form.errors.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          radius="md"
          value={form.values.password}
          onChange={(e) =>
            form.setFieldValue("password", e.currentTarget.value)
          }
          error={form.errors.password}
        />
        <Button
          fullWidth
          mt="xl"
          radius="md"
          component={Link}
          loading={loading}
          onClick={handleLogin}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
