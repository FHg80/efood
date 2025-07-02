import { Comida } from "../../pages/Home"
import ProductCard from "../ProductCard"

import { ProductsListContainer } from './styles'

type Props = {
  cardapio: Comida[]
}

const ProductsList = ({ cardapio }: Props) => (
  <div className="container">
    <ProductsListContainer>
      {cardapio.map((comida) => (
        <li key={comida.id}>
          <ProductCard imagem={comida.foto} nome={comida.nome} descricao={comida.descricao} id={comida.id}/>
        </li>
      ))}
    </ProductsListContainer>
  </div>
)

export default ProductsList
