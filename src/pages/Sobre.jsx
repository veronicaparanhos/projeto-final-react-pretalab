import { Header } from "../components/Header";
import { Historia } from "../pages/subpages/sobre/Historia";
import homeImg from "../assets/sobre2.svg";

export function Sobre() {
  return (
    <>
      <Header text="Minha história" image={homeImg} />
      <Historia />
    </>
  );
}
