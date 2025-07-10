import { CartContainer, Overlay, Sidebar, CartItem, Infos, InfosContainer } from './styles'

import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'

import { RootReducer } from '../../store'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen,items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, actual) => {
      return (acc += actual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}/>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
                <button onClick={() => removeItem(item.id)} type="button"/>
              </div>
            </CartItem>
          ))}
        </ul>
        <InfosContainer>
            <Infos>Valor total</Infos>
            <Infos>{formataPreco(getTotalPrice())}</Infos>
        </InfosContainer>
        <button>Continuar com a entrega</button>
      </Sidebar>
  </CartContainer>
  )
}

export default Cart
