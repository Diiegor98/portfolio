//Componente Slider
import Slider from "./Slider/Slider";

//Estilos
import "./certificates.css";

//Certificados Data
import { certificados } from "./certificados";

//React Bootstrap
import { Container, ListGroup } from "react-bootstrap";
import { PiCertificateLight } from "react-icons/pi";

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <h2 className="title">
        <span>CERTIFICADOS</span>
      </h2>
      <Slider />
      <Container className="d-flex justify-content-center ">
        <ListGroup className="col-12 col-md-10">
          {certificados.map((certificado) => (
            <ListGroup.Item className="list-item " key={certificado.id}>
              <div className="d-flex align-items-center ">
                <PiCertificateLight className="cert-icon" />
                <div className="cert-body d-flex flex-column">
                  <span className="cert-name">{certificado.name}</span>
                  <span className="cert-academia">{certificado.academia}</span>
                </div>
              </div>
              <img src={certificado.img} alt={certificado.name} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
};

export default Certificates;
