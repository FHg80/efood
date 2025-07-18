import { Container, Cartao, Complemento, Overlay, CartContainer, CartItem, Infos, InfosContainer, DeliveryContainer } from './styles'

import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'

import { RootReducer } from '../../store'
import { formataPreco } from '../ProductsList'
import { useState } from 'react'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen,items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [cartOpen, setCartOpen] = useState(true)
  const [deliveryOpen, setDeliveryOpen] = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const navigate = useNavigate()
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiverName: '',
      addressDesc: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: 0,
      expiresMonth: 12,
      expiresYear: 2025
    },
    validationSchema: Yup.object({
      receiverName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      addressDesc: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O CEP precisa ter 8 caracteres')
        .max(8, 'O CEP precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'O número precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O CVV precisa ter 3 caracteres')
        .max(3, 'O CVV precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(1, 'O mês precisa ser válido')
        .max(2, 'O mês precisa ser válido')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O ano precisa ser válido')
        .max(4, 'O ano precisa ser válido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiverName,
          address: {
            description: values.addressDesc,
            city: values.city,
            zipcode: values.zipCode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

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

  const openConfirmation = () => {

    if (isSuccess == true) {
      closeCart()
      setPaymentOpen(false)
      setConfirmationOpen(true)
    } else (
      alert('Preencha os campos corretamente')
    )

  }

  const closeConfirmation = () => {
    setConfirmationOpen(false)
    navigate(0)
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <>
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
        <form onSubmit={form.handleSubmit}>
          <DeliveryContainer className={deliveryOpen ? 'is-open' : ''}>
              <h3>Entrega</h3>
              <label htmlFor="receiverName">Quem irá receber</label>
              <input
                id="receiverName"
                name="receiverName"
                type="text"
                value={form.values.receiverName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(('receiverName'), form.errors.receiverName)}
              </small>
              <label htmlFor="addressDesc">Endereço</label>
              <input
                id="addressDesc"
                name="addressDesc"
                type="text"
                value={form.values.addressDesc}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(('addressDesc'), form.errors.addressDesc)}
              </small>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                name="city"
                type="text"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(('city'), form.errors.city)}
              </small>
              <Complemento>
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="number"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(('zipCode'), form.errors.zipCode)}
                  </small>
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    name="number"
                    type="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(('number'), form.errors.number)}
                  </small>
                </div>
              </Complemento>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                className='margin-bottom'
                id="complement"
                name="complement"
                type="text"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(('complement'), form.errors.complement)}
              </small>
              <button type='button' onClick={() => openPayment()}>Continuar com o pagamento</button>
              <button type='button' onClick={() => openCart()} >Voltar para o carrinho</button>
          </DeliveryContainer>
          <DeliveryContainer className={paymentOpen ? 'is-open' : ''}>
              <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice())}</h3>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage(('cardName'), form.errors.cardName)}
              </small>
              <Cartao>
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(('cardNumber'), form.errors.cardNumber)}
                  </small>
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    id="cardCode"
                    name="cardCode"
                    type="number"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(('cardCode'), form.errors.cardCode)}
                  </small>
                </div>
              </Cartao>
              <Complemento>
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    id="expiresMonth"
                    name="expiresMonth"
                    type="number"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(('expiresMonth'), form.errors.expiresMonth)}
                  </small>
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    className='margin-bottom'
                    id="expiresYear"
                    name="expiresYear"
                    type="number"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(('expiresYear'), form.errors.expiresYear)}
                  </small>
                </div>
              </Complemento>
              <button type='submit' onClick={() => openConfirmation()} >Finalizar Pagamento</button>
              <button type='button' onClick={() => openDelivery()} >Voltar para a edição de endereço</button>
          </DeliveryContainer>
        </form>
      </Container>
      <Container className={confirmationOpen ? 'is-open' : ''} >
          <Overlay />
          <DeliveryContainer className='is-open' >
            {data ? (
              <>
                <h3>Pedido realizado - {data.orderId}</h3>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. <br/> <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br /> <br />
                  Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição. <br /> <br />
                  Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                </p>
                <button type='button' onClick={() => closeConfirmation()} >Concluir</button>
              </>
            ) : (<h3>Carregando...</h3>)}
          </DeliveryContainer>
      </Container>
    </>
  )
}

export default Cart
