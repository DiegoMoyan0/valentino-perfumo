import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import '../static/css/services.css';

const services = [
    {
        name: 'UI/UX Design',
        description: 'Im Freelance Front-end Developer With over 5 years of experience I m Freelance Front-end Developer With over 5 years of experience',
        link: 'Learn More',
    },
    {
        name: 'Development',
        description: 'Im Freelance Front-end Developer With over 5 years of experience I m Freelance Front-end Developer With over 5 years of experience',
        link: 'Learn More',
    },
    {
        name: 'Digital Marketing',
        description: 'Im Freelance Front-end Developer With over 5 years of experience I m Freelance Front-end Developer With over 5 years of experience',
        link: 'Learn More',
    },
    {
        name: 'Product Branding',
        description: ' Im Freelance Front-end Developer With over 5 years of experience I m Freelance Front-end Developer With over 5 years of experience',
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
                        {services.map((service, index) => {
                            const { name, description, link } = service;
                            return (
                                <div className="service-item" key={index}>
                                    <div className="service-text">
                                        <h4 className="service-name">{name}</h4>
                                        <p className="service-description">{description}</p>
                                    </div>
                                    <div className="service-link">
                                        <a href="#" className="learn-more-link">
                                            <span className="circle">
                                                <FaArrowUp className="arrow-icon" />
                                            </span>
                                            Learn More
                                        </a>
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
