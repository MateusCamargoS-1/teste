import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const FooterMenu: React.FC = () => {
  return (
    <Navbar id="footer-nav" fixed="bottom" bg="dark" variant="dark">
      <Container className="justify-content-center">
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile">
              <i className="fas fa-user"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/explore">
              <i className="fas fa-compass"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/chat">
              <i className="fas fa-comment-dots"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FooterMenu;
