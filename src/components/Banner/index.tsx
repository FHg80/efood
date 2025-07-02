import { Imagem, ImagemOverlay, Categoria, BannerContainer, NomeRestaurante } from './styles'

type Props = {
  imagem: string
  categoria: string
  nome: string
}

const Banner = ({ imagem, categoria, nome }: Props) => (
  <Imagem style={{backgroundImage: `url(${imagem})`}}>
    <ImagemOverlay />
    <div className="container">
      <BannerContainer>
        <Categoria>{categoria}</Categoria>
        <NomeRestaurante>{nome}</NomeRestaurante>
      </BannerContainer>
    </div>
  </Imagem>
)

export default Banner
