import styled from "styled-components";
import { cores } from "../../styles";

export const CardContainer = styled.div`
  padding: 8px;
  border: 1px solid ${cores.red};
  border-top: none;
`
export const Imagem = styled.img`
  display: block;
  width: 100%;
`
export const UpCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ImgAvaliacao = styled.img`
  display: block;
  margin-left: 8px;
  width: 100%;
  margin-bottom: 2px;
`
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
`

export const LinkS = styled.a`
  text-decoration: none;
  color: white;
  background-color: ${cores.red};
  padding: 4px 6px;
  font-size: 14px;
`

export const LowerCard = styled.div`
  margin-bottom: 8px;
`

export const ContentContainer = styled.div`
  margin-bottom: 40px;
  position: relative;
`

export const Infos = styled.div`
  position: absolute;
  top: 22px;
  right: 18px;
`
