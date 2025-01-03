import { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import perfil from "../assets/perfil.png";
import FooterMenu from "./FooterMenu";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [recado, setRecado] = useState('Eu sou muito inteligente também, porque eu quero!');
  const [newRecado, setNewRecado] = useState('');
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleShowEditModal = () => {
    setNewRecado(recado);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  const handleChangePassword = () => {
    console.log('Alterar Senha');
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    console.log('Sair');
    navigate("/login");
    handleClose(); 
  };

  const handleDeleteAccount = () => {
    localStorage.clear();

    console.log('Conta apagada');
    navigate("/login");
    handleClose(); 
  };

  const handleSaveRecado = () => {
    setRecado(newRecado);
    handleCloseEditModal();
  };

  return (
    <>
      <Container className="mt-4" style={{ marginBottom: 70 }}>
        <Row>
          <Col md={4}>
            <Card className="text-center border-0">
              <Card.Body className="perfil">
                <img
                  src={perfil}
                  alt="Profile"
                  className="rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h4 className="mt-3">Tadalafela</h4>
                <p className="text-muted">
                  {recado}
                </p>
                <Button variant="primary" size="sm" className="w-100" onClick={handleShowEditModal}>
                  Editar Perfil
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5>Informações Pessoais</h5>
                <p>
                  <strong>Email:</strong> tadalafela@example.com
                </p>
                <p>
                  <strong>Data de nascimento:</strong> 01 de Janeiro de 1990
                </p>
                <p>
                  <strong>Localização:</strong> Campo Mourão, Paraná, Brasil
                </p>
              </Card.Body>
            </Card>

            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5>Conexões Recentes</h5>
                <ul className="list-unstyled">
                  <li>Conectou-se com Gabrielzin.</li>
                  <li>Conectou-se com Mateuzão.</li>
                  <li>Conectou-se com Fela.</li>
                </ul>
              </Card.Body>
            </Card>

            <Button variant="secondary" size="lg" className="w-100" onClick={handleShow}>
              Configurações de Conta
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRecado">
              <Form.Label>Recado</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newRecado}
                onChange={(e) => setNewRecado(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="w-100 mt-3" onClick={handleSaveRecado}>
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Configurações de Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary" className="w-100 mb-2" onClick={handleChangePassword}>
            Alterar Senha
          </Button>
          <Button variant="danger" className="w-100 mb-2" onClick={handleLogout}>
            Sair
          </Button>
          <Button variant="danger" className="w-100" onClick={handleDeleteAccount}>
            Apagar Conta
          </Button>
        </Modal.Body>
      </Modal>

      <FooterMenu />
    </>
  );
};

export default Profile;
