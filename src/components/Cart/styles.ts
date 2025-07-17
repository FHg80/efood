import styled from "styled-components";
import { cores } from "../../styles";

import lixeira from '../../assets/images/lixeira.png'

export const Container = styled.div`
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

  form {
    z-index: 1;
    height: 100%;
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

  &.is-closed {
    display: none;
  }
`

export const CartContainer = styled.aside`
  z-index: 1;
  background-color: ${cores.red};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  display: none;

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

  &.is-open {
    display: block;
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
export const DeliveryContainer = styled.aside`
  z-index: 1;
  background-color: ${cores.red};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  display: none;
  height: 100%;

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

  &.is-open {
    display: block;
  }

  h3 {
    margin-bottom: 16px;
  }

  h3, label {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.white2};
  }

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    border: none;
    background-color: ${cores.white2};
    color: ${cores.input};
    font-weight: bold;
    font-size: 14px;
    padding: 8px;
    margin-bottom: 8px;

    &.margin-bottom {
      margin-bottom: 24px;
    }
  }

  button {
    margin-bottom: 6px;
  }

  p {
    color: ${cores.white2};
    font-size: 14px;
    margin-bottom: 24px;
  }

`
export const Complemento = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;
`

export const Cartao = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 34px;
`
export const ConfirmationContainer = styled.div`
  display: none;

  &.is-open {
    display: block
  }
`

