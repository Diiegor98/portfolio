import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaEnvelope } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container className="hero-container flex-wrap d-flex justify-content-center align-items-center">
        <div className="text-hero col-12 col-md-6">
          <h1> <span>&#60;</span> DIEGO RODRIGUEZ <span>&#47;&#62;</span> </h1>
          <h2>Front-End Developer</h2>
          <div className="hero-icons-container">
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
            <Button
              variant="outline-light"
              href="https://drive.google.com/file/d/19UofH5gzOjCyiH5DUg_zFQIBk9ytjAkS/view?usp=drive_link"
              target="_blank"
              className="btn-cv"
            >
               DESCARGAR CV
            </Button>
          </div>
        </div>

        <img width={330} className="img-fluid" src="https://i.postimg.cc/xTGqHx8y/profile.png" />
      </Container>
    </section>
  );
};

export default Hero;
