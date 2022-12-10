import { Header } from "../components/Header";
import { Favoritos } from "./subpages/portfolio/Favoritos";
import { Github } from "./subpages/portfolio/Github";
import portfolioImg from "../assets/portfolio2.svg";

export function Portfolio() {
  return (
    <>
      <Header text="Meus projetos" image={portfolioImg} />
      <Favoritos />
      <Github />
    </>
  );
}
