import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !birthDate || !location) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const user = { name, email, password, birthDate, location };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('authToken', 'fake-auth-token');

    navigate('/profile');
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '500px' }}>
      <Row className="justify-content-center">
        <Col md={12}>
          <h2 className="text-center">Cadastro</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group controlId="formBirthDate" className="mb-3">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
                className="form-input"
              />
            </Form.Group>
            
            <Form.Group controlId="formLocation" className="mb-3">
              <Form.Label>Localização</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite sua localização"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="form-input"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Cadastrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
