import styled from "styled-components";
import { cores } from "../../styles";

export const ProductsListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 32px;
    padding-top: 56px;
    padding-bottom: 120px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 340px;
  position: relative;
  z-index: 1;
  background-color: ${cores.red};
  display: flex;
  padding: 32px;

  main {
    margin-left: 24px;

    img {
      height: 16px;
      width: 16px;
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 8px;
      margin-right: 8px;
    }
  }

  h3, p {
    color: ${cores.white};
    margin-bottom: 16px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }


  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }

  button {
    background-color: ${cores.white};
    color: ${cores.red};
    padding: 3px;
    border: none;
    font-weight: bold;
    font-size: 14px;
  }
`
