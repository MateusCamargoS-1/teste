import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Container,
} from "@mui/material";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some((user: { email: string }) => user.email === email);

    if (userExists) {
      alert("email indisponivel!");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Cadastro com:", { name, email, password });
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Cadastro
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
          onClick={handleSignup}
        >
          Cadastrar
        </Button>
        <Typography>
          Já tem uma conta?{" "}
          <Link href="/login" underline="hover">
            Faça login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;
