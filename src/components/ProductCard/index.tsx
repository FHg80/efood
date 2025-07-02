import pizza from '../../assets/images/pizza.png'

import { CardContainer, NomeProduto, DescProduto, Botao } from './styles'

type Props = {
  imagem: string
  nome: string
  descricao: string
  id: number
}


const ProductCard = ({ imagem, nome, descricao, id }: Props) => {

  const getDescricao = (descricao: string) => {
    if(descricao.length > 132) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <CardContainer>
      <img src={imagem} alt="Pizza" />
      <NomeProduto>{nome}</NomeProduto>
      <DescProduto>{getDescricao(descricao)}</DescProduto>
      <Botao type='button'>Adicionar ao carrinho</Botao>
    </CardContainer>
  )

}

export default ProductCard
