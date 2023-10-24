import React from "react";
import "../static/css/contact.css";

const Contact = () => {
    return (
<section id="contact">
    <div className="contact-container">
        <div className="row">
            <div className="col-md-6 contact-info">
                <div>
                    <h4>Get in touch</h4>
                    <h2>Let's work <br /> together!</h2>
                </div>
            </div>
            <div className="col-md-6">
                <form className="contact-form">
                    <input className="form-input" type="text" placeholder="Your Name" />
                    <input className="form-input" type="text" placeholder="Your Email" />
                    <textarea className="form-input" placeholder="Your Message"></textarea>
                    <button className="form-button">Send message</button>
                </form>
            </div>
        </div>
    </div>
</section>

    );
};

export default Contact;
