import pizza from '../../assets/images/pizza.png'

import { CardContainer, NomeProduto, DescProduto, Botao } from './styles'

const ProductCard = () => (
  <CardContainer>
    <img src={pizza} alt="Pizza" />
    <NomeProduto>Pizza Margherita</NomeProduto>
    <DescProduto>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</DescProduto>
    <Botao type='button'>Adicionar ao carrinho</Botao>
  </CardContainer>
)

export default ProductCard
