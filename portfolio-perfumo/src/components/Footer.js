import { Container, Row, Col } from "react-bootstrap";
import '../static/css/footer.css'

const Footer = () => {
    return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-white">
          <Col size={12} sm={12} className="text-center copy">
            <p id="copy">© Copyright 2023. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;