import "./projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { proyectos } from "./data";
import { Container } from "react-bootstrap";

const Projects = () => {

  return (
    <section id="projects" className="projects">
      <h2 className="title">
        <span>PROYECTOS</span>
      </h2>
      <Container className="d-flex justify-content-center flex-wrap">
        {proyectos.map((proyecto, index) => (
          <Card key={index} className="proyect-card">
            <Card.Img variant="top" src={proyecto.image} className="card-img" />
            <Card.Body className="card-body d-flex flex-column justify-content-between">
              <Card.Title className="card-title">{proyecto.name}</Card.Title>
              <div>
                <div className="card-tech-container">
                  {proyecto.tech.map((tec, index) => (
                    <span key={index}>{tec}</span>
                  ))}
                </div>
                <div className="card-btn-container d-flex gap-2">
                  <Button variant="primary" className="card-btn">
                    <a href={proyecto.deploy} target="_blank">Visitar</a>
                  </Button>
                  <Button variant="primary" className="card-btn">
                  <a href={proyecto.portfolio} target="_blank">Portfolio</a>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default Projects;
