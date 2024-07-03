import React, { useState } from "react"
import "./ContactForm.sass"
import emailjs from '@emailjs/browser'
import logo from "../../assets/img/logo.png"
import empreendimentoImg from "../../assets/img/02.png"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_t12cv3l", "template_o7jsft5", templateParams, "QBw4lR--gv5dJ200Z")
      .then((response) => {
        console.log("Email enviado com sucesso", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log("Erro: ", err)
      })
  }

  return (
    <section className="container">
      <section className="formImageContainer">
        <section className="imageContainer">
          <img className="imgForm" src={empreendimentoImg} alt="Empreendimento IPA Studios Design" />
        </section>
        <section className="formContainer">
          
          <img className="logo" src={logo} alt="IPA Studios Design Logo" />
          <h1 className="title">Entre em contato</h1>
          <p className="subtitle">Descubra o luxo do IPA Studios Design. Entre em contato e encontre seu imóvel dos sonhos.</p>

          <form className="form" onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              className="input"
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <textarea
              className="textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <input className="button" type="submit" value="Enviar" />
          </form>
        </section>
      </section>
    </section>
  )
}

export default ContactForm
