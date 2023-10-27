import React from 'react';
import { useState, useEffect } from "react"
import { Col, Container, Row, Button } from 'react-bootstrap';
import  headerImg  from "../static/img/yo.png"
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok, FaCloudDownloadAlt} from 'react-icons/fa';
import '../static/css/banner.css'


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 50);
    const period = 250 - Math.random() * 50;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(period);
        }
    }


    return (
<section className='banner' id='home'>
    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <Button className="custom-button mt-4">Bienvenido a mi portafolio</Button>
                <h1 id='title'>
                    {`Valentino Perfumo`}
                    <br />
                </h1>
                    <span id='subtitle' className='wrap gradient-text'>Soy {text}</span>
                <p className="white-text paragraph">Estoy comprometido a crear soluciones web robustas y elegantes que impulsen el éxito de mis clientes. ¡Emocionado de contribuir con mis habilidades y experiencia a tu próximo proyecto!</p>
            </Col>
            <Col xs={12} md={6} xl={5} className="text-center mt-4 mb-4">
                <img src={headerImg} alt="Header img" width={400} height={400} className="custom-image img-fluid" />
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start mb-4">
                        <a href="https://www.instagram.com/diegomoyan0/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaInstagram className="gradient-icons mr-3" size={35} />
                        </a>
                        <a href="https://www.linkedin.com/in/diegomoyan0/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaLinkedin className="gradient-icons mr-3" size={35} />
                        </a>
                        <a href="https://github.com/DiegoMoyan0" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaGithub className="gradient-icons mr-3" size={35} />
                        </a>
                    </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start mb-4">
  <a 
    className="gradient-text ref" 
    href="/static/Perfumo-Valentino-CV.pdf" 
    download="Perfumo-Valentino-CV.pdf"
  >
    Mi Curriculum <FaCloudDownloadAlt className='gradient-icons ml-2'  size={35}/>
  </a>
</Col>
    </Row>
    </Container>
</section>

    );
};
export default Banner;
