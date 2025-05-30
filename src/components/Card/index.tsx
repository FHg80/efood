import { ContentContainer, CardContainer, Imagem, UpCard, LowerCard, ImgAvaliacao, RatingContainer, CardTitle, Description, Link } from './styles'

import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  image: string
  description: string
  rating: number
}


const Card = ({ title, image, description, rating }: Props) => (
  <ContentContainer>
    <Imagem src={image} alt="" />
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
