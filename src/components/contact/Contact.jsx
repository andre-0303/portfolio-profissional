import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Atualiza os valores do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar e-mail
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nmyl098", // Substitua pelo seu Service ID
        "template_ygzwr5q", // Substitua pelo seu Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "g0rMbVZH0mNrcnyzQ" // Substitua pelo seu Public Key
      )
      .then(
        () => {
          setStatus("✅ E-mail enviado com sucesso!");
          setForm({ name: "", email: "", message: "" }); // Resetar formulário
        },
        (error) => {
          setStatus("❌ Erro ao enviar. Tente novamente.");
          console.error("Erro:", error);
        }
      );
  };

  return (
    <section className="contact">
      <div className="container2">
        <h2 className="text-2xl font-bold">Contato</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
        <p className="status-message">{status}</p>

        {/* Links para redes sociais com ícones */}
        <div className="social-links">
          <a href="https://github.com/andre-0303" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-bandeira/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:bandeiradev.ti@gmail.com">
            <FaEnvelope /> E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
