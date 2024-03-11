//Componente Slider
import Slider from "./Slider/Slider";

//Estilos
import "./certificates.css";
import { accHeader } from "./estilos";

//Certificados Data
import { certificados } from "./certificados";

//React Bootstrap
import { Container } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";

//Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <h2 className="title">
        <span>CERTIFICADOS</span>
      </h2>
      <Slider />
      <Container>
        {certificados.map((certificado) => (
          <Accordion
            className="accordion-container col-12"
            key={certificado.id}
          >
            <AccordionSummary
              className="accordion-header"
              sx={accHeader}
              expandIcon={<FaCaretDown className="text-white" />}
              aria-controls={`${certificado.id}-content`}
              id={`${certificado.id}-header`}
            >
              {certificado.name}
              <span className="accordion-academia">{certificado.academia}</span>
            </AccordionSummary>
            <AccordionDetails className="accordion-body">
              {certificado.text}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </section>
  );
};

export default Certificates;
