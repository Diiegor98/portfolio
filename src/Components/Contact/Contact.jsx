import "./contact.css";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";
import { Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="title">
        <span>CONTACTO</span>
      </h2>
      <Container className="d-flex justify-content-center align-items-center flex-wrap gap-5">
        <img
          className="img-fluid"
          width={300}
          src="https://i.postimg.cc/fTQJVnzR/idea.png"
          alt="idea"
        />

        <div>
          <h4>¡Trabajemos juntos!</h4>
          <ContactForm />
          <hr></hr>
          <div className="form-icons">
            <Button
              variant="link"
              href="mailto:diiegor98@gmail.com"
              target="_blank"
            >
              <FaEnvelope className="hero-icons" />
            </Button>
            <Button
              variant="link"
              href="https://github.com/Diiegor98"
              target="_blank"
            >
              <BsGithub className="hero-icons" />
            </Button>
            <Button
              variant="link"
              href="https://www.linkedin.com/in/diiegorodriguez/"
              target="_blank"
            >
              <FaLinkedin className="hero-icons" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
