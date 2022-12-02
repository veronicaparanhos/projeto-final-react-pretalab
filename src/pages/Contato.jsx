import { useState } from "react";
import { Header } from "../components/Header";
import { GithubLogo, Envelope, LinkedinLogo } from "phosphor-react";
import contatoImg from "../assets/contato.svg";
import styles from "../styles/pages/contato.module.css";
import { database } from "../service/firebase";
import { ref, push, set } from 'firebase/database'

export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputName(event) {
    setNome(event.target.value);
  }

  function handleInputEmail(event) {
    setEmail(event.target.value);
  }

  function handleInputMessage(event) {
    setMensagem(event.target.value);
  }

  function createMessage(event) {
    event.preventDefault();

    console.log("nome: ", nome);
    console.log("email: ", email);
    console.log("mensagem: ", mensagem);

    const mensagensListRef = ref(database, 'mensagens')
    const novaMensagemRef = push(mensagensListRef)

    set(novaMensagemRef, {
      nome: nome,
      email: email,
      texto: mensagem
    })

    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <>
      <Header text="Chama no contatinho" image={contatoImg} />
      <div className={styles.formContainer}>
        <form onSubmit={createMessage} className={styles.form}>
          <input
            onChange={handleInputName}
            placeholder="Digite seu nome"
            className={styles.formInput}
            value={nome}
          />
          <input
            onChange={handleInputEmail}
            placeholder="Digite seu e-mail"
            className={styles.formInput}
            value={email}
          />
          <textarea
            onChange={handleInputMessage}
            placeholder="Digite sua mensagem"
            className={styles.formTextArea}
            value={mensagem}
          />
          <button className={styles.formButton} type="submit">
            Enviar mensagem
          </button>
        </form>
      </div>
      <div className={styles.contatoContainer}>
        <div className={styles.cardContainer}>
          <GithubLogo size={70} color="#584280" /> <br />
          <br />
          <a
            href="https://github.com/veronicaparanhos"
            className={styles.cardLink}
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className={styles.cardContainer}>
          <LinkedinLogo size={70} color="#584280" /> <br />
          <br />
          <a
            href="https://www.linkedin.com/in/veronicahp/"
            className={styles.cardLink}
            target="_blank"
          >
            Linkedin
          </a>
        </div>
        <div className={styles.cardContainer}>
          <Envelope size={70} color="#584280" /> <br />
          <br />
          <a href="mailto:veronicahp@gmail.com" className={styles.cardLink}>
            Email
          </a>
        </div>
      </div>
    </>
  );
}
