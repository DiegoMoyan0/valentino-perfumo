import React from 'react';
import '../static/css/projects.css'
import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import background from '../static/img/back.jpg';
import hd from '../static/img/hd.png';
import joan from  '../static/img/jv.png';
import ml from  '../static/img/logo-mercado-liebre.svg';

const Projects = () => {
  const projects = [
    {
      title: 'Hotel Divine',
      description: 'Design',
      imgUrl: hd,
    },
    {
      title: 'Joan-Vives-desafio',
      description: 'Design',
      imgUrl: joan,
    },
    {
      title: 'Mercado Liebre',
      description: 'Design',
      imgUrl: ml,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 className='project-title'>Projects</h2>
            <p className='project-description'>Lorem ipsum</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Hotel Divine</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Joan Vives</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Mercado Liebre</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

    </section>
  );
};

export default Projects;
