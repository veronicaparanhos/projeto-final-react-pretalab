import styles from "../../../styles/pages/contato.module.css";
import { GithubLogo, Envelope, LinkedinLogo } from "phosphor-react";

export function RedesSociais() {
  return (
    <div className={styles.contatoContainer}>
      <div className={styles.cardContainer}>
        <GithubLogo size={70} color="#4c4b59" /> <br />
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
        <LinkedinLogo size={70} color="#4c4b59" /> <br />
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
        <Envelope size={70} color="#4c4b59" /> <br />
        <br />
        <a href="mailto:veronicahp@gmail.com" className={styles.cardLink}>
          Email
        </a>
      </div>
    </div>
  );
}
