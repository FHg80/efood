import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

import { Imagem, HeaderContainer, InfosHeader } from './styles'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
     <Imagem style={{backgroundImage: `url(${fundo})`}}>
      <div className='container'>
        <HeaderContainer>
          <InfosHeader>Restaurantes</InfosHeader>
          <Link to='/'>
            <img src={logo} alt="Efood" />
          </Link>
          <InfosHeader onClick={openCart}>
            {items.length} produto(s) no carrinho
          </InfosHeader>
        </HeaderContainer>
      </div>
    </Imagem>
  )
}

export default Header
