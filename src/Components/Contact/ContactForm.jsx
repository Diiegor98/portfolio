import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "react-bootstrap";
import "./contactform.css";

const ContactForm = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = "service_jk48s5k";
    const templateId = "template_s0nno2w";
    const apikey = "a04xra0EMnmJUZF-l";

    emailjs
      .sendForm(serviceID, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form
      ref={refForm}
      onSubmit={handleSubmit}
      className="form-container d-flex flex-column align-items-center"
    >
      <div className="input-container d-flex gap-1">
        <input
          className="forms-input"
          name="username"
          type="text"
          placeholder="Nombre"
          required
        ></input>
        <input
          className="forms-input"
          name="email"
          type="email"
          placeholder="Email"
          required
        ></input>
      </div>
      <textarea
        name="message"
        maxLength={500}
        cols={50}
        placeholder="Escriba aquí"
        required
      ></textarea>
      <button className="form-btn">ENVIAR</button>
    </Form>
  );
};

export default ContactForm;
