import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../static/css/contact.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tkrdj5r', 'template_xliw3nb', form.current, 'qBv1F8H1XaE5Nej-0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
<section id="contact">
    <div className="contact-container">
        <div className="row">
            <div className="col-md-6 contact-info">
                <div>
                    <h4 id='title-contact'>Contactate conmigo</h4>
                    <h2 id='subtitle-contact'>Vamos a trabajar<br /> juntos!</h2>
                </div>
            </div>
            <div className="col-md-6">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input className="form-input" type="text" placeholder="Tu Nombre"  name="user_name"/>
                    <input className="form-input" type="email" placeholder="Tu Email" name="user_email"/>
                    <textarea className="form-input" placeholder="Tu Mensaje" name="message"></textarea>
                    <input type='submit' className="form-button" value="Enviar" />
                </form>
            </div>
        </div>
    </div>
</section>

    );
};

export default Contact;
