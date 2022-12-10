import { useState, useEffect } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Header } from "../components/Header";
import styles from "../styles/pages/portfolio.module.css";
import portfolioImg from "../assets/portfolio2.svg";
import todolistGif from "../assets/todolist.gif";
import rocketpayGif from "../assets/rocketpay.gif";
import portfolioGif from "../assets/portfolio.gif";

export function Portfolio() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.github.com/users/veronicaparanhos/repos"
      );
      const data = await response.json();

      setRepositories(data);
    }
    getData();
  }, []);

  return (
    <>
      <Header text="Meus projetos" image={portfolioImg} />
      <section>
        <div className={styles.titleFav}>Meus favoritos</div>
        <div className={styles.fav}>
          <div>
            <h4>Site Pessoal</h4>
            <img className={styles.imgFav} src={portfolioGif} />
            <p className={styles.textFav}>
              Projeto desenvolvido durante o módulo de HTML e CSS do Curso
              Formativo Pretalab
            </p>
            <a
              href="https://portfolio-veronicaparanhos.netlify.app"
              className={styles.linkFav}
              target="_blank"
            >
              Ver projeto
            </a>
          </div>
          <div>
            <h4>To Do List</h4>
            <img className={styles.imgFav} src={todolistGif} />
            <p className={styles.textFav}>
              Projeto desenvolvido durante o módulo de JavaScript do Curso
              Formativo Pretalab
            </p>
            <a
              href="https://todo-list-veronica.netlify.app"
              className={styles.linkFav}
              target="_blank"
            >
              Ver projeto
            </a>
          </div>
          <div>
            <h4>RocketPay</h4>
            <img className={styles.imgFav} src={rocketpayGif} />
            <p className={styles.textFav}>
              Projeto guiado desenvolvido durante o ExplorerLab da RocketSeat
            </p>
            <a
              href="https://explorerlab-rocketpay.netlify.app"
              className={styles.linkFav}
              target="_blank"
            >
              Ver projeto
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.textContainer}>Outros projetos no Github</div>
        <div className={styles.cardContainer}>
          {repositories.map((repo) => (
            <div className={styles.card}>
              <h3 key={repo.id}>{repo.name}</h3>
              <br />
              <a
                href={repo.html_url}
                target="_blank"
                className={styles.enterRepo}
              >
                <BsBoxArrowInUpRight size={16} color="#fff" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
