import { CardContainer, Imagem, UpCard, LowerCard, ImgAvaliacao, RatingContainer, CardTitle, Description, Link } from './styles'

import sushi from '../../assets/images/imagem.png'
import estrela from '../../assets/images/estrela.png'


const Card = () => (
  <div className='container'>
    <Imagem src={sushi} alt="" />
      <CardContainer>
        <UpCard>
          <CardTitle>Hioki Sushi</CardTitle>
          <RatingContainer>
            <CardTitle>4,9</CardTitle>
            <ImgAvaliacao src={estrela} alt="" />
          </RatingContainer>
        </UpCard>
        <LowerCard>
          <Description>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</Description>
          <Link href="">Saiba mais</Link>
        </LowerCard>
      </CardContainer>
  </div>
)

export default Card
