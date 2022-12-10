import styles from "../../../styles/pages/portfolio.module.css";
import todolistGif from "../../../assets/todolist.gif";
import rocketpayGif from "../../../assets/rocketpay.gif";
import portfolioGif from "../../../assets/portfolio.gif";

export function Favoritos() {
  return (
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
  );
}
