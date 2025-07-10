import styled from "styled-components";
import { cores } from "../../styles";

import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${cores.red};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
    border: none;
    background-color: ${cores.white2};
    padding: 4px 0;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.red};
  }
`

export const Infos = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.white2};
`

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
`

export const CartItem = styled.li`
  background-color: ${cores.white2};
  display: flex;
  padding: 8px;
  gap: 8px;
  position: relative;
  margin-bottom: 24px;

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 8px 8px 0;
  }

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }
`
