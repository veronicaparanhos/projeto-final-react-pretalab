import { useState, useEffect } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import styles from "../../../styles/pages/portfolio.module.css";

export function Github() {
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
    <section>
      <div className={styles.titleGit}>Outros projetos no meu Github</div>
      <div className={styles.card}>
        {repositories.map((repo) => (
          <div className={styles.cardGit}>
            <h3 key={repo.id}>{repo.name}</h3>
            <br />
            <a href={repo.html_url} target="_blank">
              <BsBoxArrowInUpRight size={16} color="#fff" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
