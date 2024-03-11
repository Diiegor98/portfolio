import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdScreenshotMonitor } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-me">
      <h2 className="title text-center">
        <span>SOBRE MI</span>
      </h2>
      <Container className="about-container d-flex justify-content-center flex-wrap gap-3">
        <Card.Body className="about-description col-12 col-md-5">
          <BsPersonBoundingBox className="about-icon" />
          <div>
            <span>Quien soy</span>
            <p>
              Soy Diego, un apasionado de la tecnología con enfoque en el
              desarrollo front-end. Mi interés por la resolución de problemas y
              la creatividad me ha llevado al mundo del desarrollo web. Estoy
              constantemente buscando nuevas oportunidades de aprendizaje y
              colaboración con otros profesionales.
            </p>
          </div>
        </Card.Body>

        <Card.Body className="about-description col-12 col-md-5">
          <MdScreenshotMonitor className="about-icon" />
          <div>
            <span>Responsive Design</span>
            <p>
              Diseños responsivos que se adaptan de manera fluida a cualquier
              dispositivo, brindando una experiencia de usuario consistente y
              atractiva. Mi enfoque se centra en la versatilidad, asegurando que
              tu presencia digital se vea impecable tanto en pantallas de
              escritorio como en dispositivos móviles.
            </p>
          </div>
        </Card.Body>

        <Card.Body className="about-description col-12 col-md-5">
          <FaPeopleGroup className="about-icon" />
          <div>
            <span>Soft Skills</span>
            <p>
              Gestión de proyectos ágiles utilizando la metodología SCRUM. Mi
              capacidad para trabajar en equipos ágiles se refleja en mi
              habilidad para adaptarme rápidamente a los cambios, colaborar de
              manera efectiva con los miembros del equipo y cumplir con los
              plazos de manera consistente.
            </p>
          </div>
        </Card.Body>

        <Card.Body className="about-description col-12 col-md-5">
          <FaBook className="about-icon" />
          <div>
            <span>Estudios</span>
            <p>
              Como profesional, me destaco por mi naturaleza autodidacta y mi
              firme compromiso con el aprendizaje continuo. La búsqueda
              constante de conocimiento y la exploración de las últimas
              tendencias en diseño y tecnología son aspectos fundamentales en mi
              carrera.
            </p>
          </div>
        </Card.Body>
      </Container>
    </section>
  );
};

export default About;
