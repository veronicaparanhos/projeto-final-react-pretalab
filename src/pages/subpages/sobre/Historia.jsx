import history from "../../../assets/graficopizza.png";
import styles from "../../../styles/pages/sobre.module.css";

export function Historia() {
  return (
    <>
      <div className={styles.sobreConteiner}>
        <div>
          <img className={styles.img} src={history} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>Verônica Paranhos, prazer!</h1>
          <br />
          <p>
            Sou Carioca, tenho 42 anos e sou formada em Comunicação Social pela
            UFRJ. Sempre fui apaixonada por ciência e tecnologia, atualmente
            estou em transição de carreira para a área de Desenvolvimento Web.
            Fiz um ano de Análise e Desenvolvimento de Sistemas, mas optei por
            me especializar primeiro em front-end. O meu objetivo é me tornar
            uma desenvolvedora Full Stack.
          </p>
        </div>
      </div>
    </>
  );
}
