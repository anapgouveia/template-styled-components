import { CardCar, CardContainer } from "./style";

export function Carro(props) {
  return (
    <CardContainer>
      <h2>Meu carro</h2>
      <CardCar>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex ? "true" : "false"}</li>
        <li>Adicionado: {props.adicionadoPor}</li>
      </CardCar>
    </CardContainer>
  );
}
