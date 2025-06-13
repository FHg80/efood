import styled from "styled-components";

import { cores } from "../../styles";

export const Imagem = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
`
export const ImagemOverlay = styled.div`
    background-color: rgb(0, 0, 0, .15);
        content: '';
        width: 100%;
        height: 280px;
        position: absolute;
        left:0;
        top: 0;
        z-index: 1;
`
export const BannerContainer = styled.div`
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Categoria = styled.h2`
    margin-top: 25px;
    font-size: 32px;
    font-weight: 100;
    color: ${cores.white};
    position: relative;
    z-index: 2;
`

export const NomeRestaurante = styled.h1`
    font-weight: 900;
    color: ${cores.white};
    font-size: 32px;
    position: relative;
    z-index: 2;
    margin-bottom: 32px;
`

