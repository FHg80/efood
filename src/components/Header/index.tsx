import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

import { Imagem, HeaderContainer, InfosHeader } from './styles'
import { Link } from 'react-router-dom'

const Header = () => (
  <Imagem style={{backgroundImage: `url(${fundo})`}}>
    <div className='container'>
      <HeaderContainer>
        <InfosHeader>Restaurantes</InfosHeader>
        <Link to='/'>
          <img src={logo} alt="Efood" />
        </Link>
        <InfosHeader>0 produto(s) no carrinho</InfosHeader>
      </HeaderContainer>
    </div>
  </Imagem>

)

export default Header
