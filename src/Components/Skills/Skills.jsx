import "./skills.css";
import { Container, Image } from "react-bootstrap";

const Skills = () => {
  return (
    <section className="skills">
      <Container className="container-skills">
        <figure className="img-container">
          <span>HTML</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
            alt="html"
          />
        </figure>
        <figure className="img-container">
          <span>CSS</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
            alt="css"
          />
        </figure>
        <figure className="img-container">
          <span>JAVASCRIPT</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
            alt="javascript"
          />
        </figure>
        <figure className="img-container">
          <span>REACT</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
            alt="react"
          />
        </figure>
        <figure className="img-container">
          <span>BOOTSTRAP</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
            alt="bootstrap"
          />
        </figure>
        <figure className="img-container">
          <span>TAILWIND</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
            alt="tailwind"
          />
        </figure>
        <figure className="img-container">
          <span>GIT</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
            alt="git"
          />
        </figure>
        <figure className="img-container">
          <span>TYPESCRIPT</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
            alt="typescript"
          />
        </figure>
        <figure className="img-container">
          <span>MUI</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
            alt="mui"
          />
        </figure>
        <figure className="img-container">
        <span>NODE</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
            alt="nodejs"
          />
        </figure>
        <figure className="img-container">
        <span>WORDPRESS</span>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg"
            alt="wordpress"
          />
        </figure>
      </Container>
    </section>
  );
};

export default Skills;
