import { CartContainer, Overlay, Sidebar, CartItem, Infos, InfosContainer } from './styles'

import pizza from '../../assets/images/pizza.png'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
            <img src={pizza} />
            <div>
              <h3>Pizza marguerita</h3>
              <p>R$ 60,90</p>
              <button type="button"/>
            </div>
        </CartItem>
        <CartItem>
            <img src={pizza} />
            <div>
              <h3>Pizza marguerita</h3>
              <p>R$ 60,90</p>
              <button type="button"/>
            </div>
        </CartItem>
      </ul>
      <InfosContainer>
          <Infos>Valor total</Infos>
          <Infos>R$ 182,70</Infos>
      </InfosContainer>
      <button>Continuar com a entrega</button>
    </Sidebar>
  </CartContainer>
)

export default Cart
