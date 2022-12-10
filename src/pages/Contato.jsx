import { Header } from "../components/Header";
import { Form } from "./subpages/contato/Form";
import { RedesSociais } from "./subpages/contato/RedesSociais";
import contatoImg from "../assets/contato2.svg";

export function Contato() {
  return (
    <>
      <Header text="Entre em contato" image={contatoImg} />
      <Form />
      <RedesSociais />
    </>
  );
}
