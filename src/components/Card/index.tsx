import { ContentContainer, CardContainer, Imagem, Infos, UpCard, LowerCard, ImgAvaliacao, RatingContainer, CardTitle, Description, Link } from './styles'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  title: string
  image: string
  description: string
  rating: number
  infos: string[]
}


const Card = ({ title, image, description, rating, infos }: Props) => (
  <ContentContainer>
    <Imagem src={image} alt="" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
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
          <Link href="">Saiba mais</Link>
        </LowerCard>
      </CardContainer>
  </ContentContainer>
)

export default Card
