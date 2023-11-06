import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../static/css/services.css';

const services = [
    {
        id: 1,
        name: ' Diego Salete',
        description: 'Creador de contenido experimentado en ecommerce y en el crecimiento de tu marca/producto en las redes sociales',
        link: 'Leer Mas',
    },
    {
        id: 2,
        name: 'Jocelyn Arellano',
        description: 'Una persona espiritual que que busca significado más allá de lo material, interesada en la conexión entre mente, cuerpo y espíritu. Se enfoca en el crecimiento personal, la compasión y la paz interior.',
        link: 'Leer Mas',
    },
    {
        id: 3,
        name: 'Michelle',
        description: 'Influencer que comparte consejos financieros en redes sociales para ayudar a otros a crecer económicamente, brindando tips prácticos sobre ahorro, inversión y presupuesto.',
        link: 'Leer Mas',
    },
];

const Services = () => {
    return (
        <section id="services">
            <Container className="services-container">
                <Row className="services-row">
                    <Col className="main-col">
                        <h2 className="main-heading">What I Do.</h2>
                        <h3 className="sub-heading">
                        Soy un editor de video autodidacta que trabaja Freelance para personas de todo el mundo                        </h3>
                        <Button variant="primary" size="sm" className="main-button">
                            See my work
                        </Button>
                    </Col>
                    <Col className="services-list">
                        {services.map((service) => {
                            const { id, name, description, link } = service;
                            return (
                                <div className="service-item" key={id}>
                                    <div className="service-text">
                                        <h4 className="service-name">{name}</h4>
                                        <p className="service-description">{description}</p>
                                    </div>
                                    <div className="service-link">
                                        <Link to={`/videos/${id}`} className="learn-more-link">
                                            <span className="circle">
                                                <FaArrowUp className="arrow-icon" />
                                            </span>
                                            {link}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;
