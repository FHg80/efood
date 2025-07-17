import { Container, Cartao, Complemento, Overlay, CartContainer, CartItem, Infos, InfosContainer, DeliveryContainer } from './styles'

import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'

import { RootReducer } from '../../store'
import { formataPreco } from '../ProductsList'
import { useState } from 'react'

const Cart = () => {
  const { isOpen,items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [cartOpen, setCartOpen] = useState(true)
  const [deliveryOpen, setDeliveryOpen] = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)

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

  const openDelivery = () => {
    setCartOpen(false)
    setDeliveryOpen(true)

    if (paymentOpen) {
      setPaymentOpen(false)
    }
  }

  const openCart = () => {
    setCartOpen(true)
    setDeliveryOpen(false)
  }

  const openPayment = () => {
    setDeliveryOpen(false)
    setPaymentOpen(true)
  }

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}/>
      <CartContainer className={cartOpen ? 'is-open' : ''}>
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
          <button onClick={() => openDelivery()} >Continuar com a entrega</button>
      </CartContainer>
      <DeliveryContainer className={deliveryOpen ? 'is-open' : ''}>
        <h3>Entrega</h3>
        <label htmlFor="">Quem irá receber</label>
        <input type="text" />
        <label htmlFor="">Endereço</label>
        <input type="text" />
        <label htmlFor="">Cidade</label>
        <input type="text" />
        <Complemento>
          <div>
            <label htmlFor="">CEP</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Número</label>
            <input type="text" />
          </div>
        </Complemento>
        <label htmlFor="">Complemento (opcional)</label>
        <input className='margin-bottom' type="text" />
        <button onClick={() => openPayment()}>Continuar com o pagamento</button>
        <button onClick={() => openCart()} >Voltar para o carrinho</button>
      </DeliveryContainer>
      <DeliveryContainer className={paymentOpen ? 'is-open' : ''}>
        <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
        <label htmlFor="">Nome no cartão</label>
        <input type="text" />
        <Cartao>
          <div>
            <label htmlFor="">Número do cartão</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">CVV</label>
            <input type="text" />
          </div>
        </Cartao>
        <Complemento>
          <div>
            <label htmlFor="">Mês de vencimento</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Ano de vencimento</label>
            <input className='margin-bottom' type="text" />
          </div>
        </Complemento>
        <button >Finalizar Pagamento</button>
        <button onClick={() => openDelivery()} >Voltar para a edição de endereço</button>
      </DeliveryContainer>
    </Container>
  )
}

export default Cart
