import styled from "styled-components";

import { cores } from "../../styles";

export const CardContainer = styled.div`
  background-color: ${cores.red};
  padding: 8px;
  color: ${cores.white2};
  font-size: 14px;
`
export const NomeProduto = styled.h4`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`
export const DescProduto = styled.p`
  font-weight: 400;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  padding: 8px 84px;
  text-align: center;
  background-color: ${cores.white2};
  color: ${cores.red};
  font-weight: 700;
  border: none;
  cursor: pointer;
`
