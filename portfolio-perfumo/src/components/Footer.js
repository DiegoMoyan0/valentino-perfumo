import { Container, Row, Col } from "react-bootstrap";
import '../static/css/footer.css'

const Footer = () => {
    return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-white">
          <Col size={12} sm={12} className="text-center text-sm">
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;