import { Link } from 'react-router-dom'

import { ContentContainer, CardContainer, Imagem, Infos, UpCard, LowerCard, ImgAvaliacao, RatingContainer, CardTitle, Description, LinkS } from './styles'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  title: string
  image: string
  description: string
  rating: number
  info: string
  destacado: boolean
  id: number
}


const Card = ({ title, image, description, rating, info, destacado, id }: Props) => {

  return (
    <ContentContainer>
      <Imagem src={image} alt="" />
      <Infos>
          {destacado && (
            <Tag>Destaque da semana</Tag>
          )}
          <Tag>{info}</Tag>
      </Infos>
        <CardContainer>
          <UpCard>
            <CardTitle>{title}</CardTitle>
            <RatingContainer>
              <CardTitle>{rating}</CardTitle>
              <ImgAvaliacao src={estrela} alt="" />
            </RatingContainer>
          </UpCard>
          <LowerCard>
            <Description>{description}</Description>
            <Link to={`/profile/${id}`} className="link">
              <LinkS>Saiba mais</LinkS>
            </Link>
          </LowerCard>
        </CardContainer>
    </ContentContainer>
  )
}

export default Card
