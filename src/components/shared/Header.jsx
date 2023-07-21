import { Col, Container, Navbar, Row } from "react-bootstrap";

function Header({ title }) {
  return (
    <Navbar expand="lg">
      <Container>
        <Row className="mx-auto">
          <Col>
            <Navbar.Brand className="text-light">{title}</Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
