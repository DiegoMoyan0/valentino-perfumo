import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../static/css/services.css';

const services = [
    {
        id: 1,
        name: ' Gallego',
        description: 'Im Freelance Front-end Developer With over 5 years of experience I m Freelance Front-end Developer With over 5 years of experience',
        link: 'Learn More',
    },
    {
        id: 2,
        name: 'Señora',
        description: 'Im Freelance Front-end Developer With over 5 years of experience I m Freelance Front-end Developer With over 5 years of experience',
        link: 'Learn More',
    },
    {
        id: 3,
        name: 'Michelle',
        description: 'Im Freelance Front-end Developer With over 5 years of experience I m Freelance Front-end Developer With over 5 years of experience',
        link: 'Learn More',
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
                            I'm Freelance Front-end Developer With over 5 years of experience
                        </h3>
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
