import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Container,
  Alert,
} from "@mui/material";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((user: { email: string; password: string }) => user.email === email);

    if (user && user.password === password) {
      localStorage.setItem("authToken", "validToken");
      setError(null);
      console.log("Login com:", { email, password });
      navigate("/profile");
    } else {
      setError("Usuário não encontrado ou senha incorreta.");
    }
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
          Login
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

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
          onClick={handleLogin}
        >
          Entrar
        </Button>
        <Typography>
          Não tem uma conta?{" "}
          <Link href="/signup" underline="hover">
            Cadastre-se
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
