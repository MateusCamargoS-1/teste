import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./explore.css";
import perfil from "../../assets/perfil.png";
import FooterMenu from "../FooterMenu";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const users = [
    {
      name: "Gabrielzin",
      bio: "Gosto de viagens e tecnologia. Sempre em busca de novos desafios!",
    },
    {
      name: "Mateuzão",
      bio: "Amante de esportes e sempre disposto a fazer novas amizades.",
    },
    {
      name: "Fulano",
      bio: "Amo música e arte, buscando sempre aprender mais sobre o mundo.",
    },
    {
      name: "Ciclano",
      bio: "Tech geek e gamer. Buscando criar algo inovador na área de IA.",
    },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Container className="mt-4" style={{ marginBottom: 70 }}>
        <Row>
          <Col md={12}>
            <InputGroup className="mb-4">
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Buscar por nome"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </InputGroup>
          </Col>
          <Col md={12}>
            <Row xs={1} sm={2} md={2} lg={2} className="g-4">
              {users
                .filter((user) =>
                  user.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((user, index) => (
                  <Col key={index}>
                    <Card className="shadow-sm border-0 rounded">
                      <Card.Body className="text-center">
                        <div className="mb-3">
                          <img
                            src={perfil}
                            alt={user.name}
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text
                          className="text-muted"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {user.bio}
                        </Card.Text>
                        <Button variant="primary" className="w-100">
                          Conectar
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterMenu />
    </>
  );
};

export default Explore;
