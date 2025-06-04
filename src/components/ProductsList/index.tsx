import ProductCard from "../ProductCard"

import { ProductsListContainer } from './styles'

const ProductsList = () => (
  <div className="container">
    <ProductsListContainer>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductsListContainer>
  </div>
)

export default ProductsList
