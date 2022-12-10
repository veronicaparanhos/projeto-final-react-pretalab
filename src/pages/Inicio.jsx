import { Header } from "../components/Header";
import { Home } from "../pages/subpages/inicio/Home";
import homeImg from "../assets/home2.svg";

export function Inicio() {
  return (
    <>
      <Header text="Meu site pessoal" image={homeImg} />
      <Home />
    </>
  );
}
