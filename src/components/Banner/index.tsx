import spaghetti from '../../assets/images/spaghetti.png'

import { Imagem, ImagemOverlay, Categoria, BannerContainer, NomeRestaurante } from './styles'

const Banner = () => (
  <Imagem style={{backgroundImage: `url(${spaghetti})`}}>
    <ImagemOverlay />
    <div className="container">
      <BannerContainer>
        <Categoria>Italiana</Categoria>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </BannerContainer>
    </div>
  </Imagem>
)

export default Banner
