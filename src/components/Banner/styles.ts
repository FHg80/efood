import styled from "styled-components";

import { cores } from "../../styles";

export const Imagem = styled.div`
    padding-top: 220px;
    padding-bottom: 220px;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    z-index: 0;
`
export const ImagemOverlay = styled.div`
    background-color: rgb(0, 0, 0, .15);
        content: '';
        width: 100%;
        height: 390px;
        position: absolute;
        left:0;
        top: 0;
        z-index: 1;
`
export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    margin-top: 25px;
`

export const NomeRestaurante = styled.h1`
    font-size: 32px;
    font-weight: 900;
    color: ${cores.white};
    position: relative;
    z-index: 2;
`

export const Categoria = styled.h2`
    font-size: 32px;
    font-weight: 100;
    color: ${cores.white};
    position: relative;
    z-index: 2;
    margin-bottom: 250px;
`
