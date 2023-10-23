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
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
<section className='banner' id='home'>
    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <Button className="custom-button mt-4">Bienvenido a mi portafolio</Button>
                <h1 id='title'>
                    {`Diego Moyano`}
                    <br />
                    <span className='wrap gradient-text'>Soy {text}</span>
                </h1>
                <p className="white-text">Estoy comprometido a crear soluciones web robustas y elegantes que impulsen el éxito de mis clientes. ¡Emocionado de contribuir con mis habilidades y experiencia a tu próximo proyecto!</p>
            </Col>
            <Col xs={12} md={6} xl={5} className="text-center mt-4 mb-4">
                <img src={headerImg} alt="Header img" width={300} height={300} className="custom-image img-fluid" />
            </Col>
            <Col className="d-flex align-items-center mb-4">
            <FaInstagram className="gradient-icons mr-3" size={20} />
                <FaLinkedin className="gradient-icons mr-3" size={20} />
                <FaGithub className="gradient-icons mr-3" size={20} />
                <FaTiktok className="gradient-icons mr-3" size={20} />
                <a className="gradient-text ref" onClick={() => console.log('connect')}>Mi Curriculum <FaCloudDownloadAlt className='gradient-icons ml-2'  size={20}/></a>
            </Col>
        </Row>
    </Container>
</section>

    );
};
export default Banner;
