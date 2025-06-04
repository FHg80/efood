import logo from '../../assets/images/logo.svg'
import fundo from '../../assets/images/fundo.png'

import { Imagem, HeaderContainer, InfosHeader } from './styles'

const Header = () => (
  <Imagem style={{backgroundImage: `url(${fundo})`}}>
    <div className='container'>
      <HeaderContainer>
        <InfosHeader>Restaurantes</InfosHeader>
        <img src={logo} alt="Efood" />
        <InfosHeader>0 produto(s) no carrinho</InfosHeader>
      </HeaderContainer>
    </div>
  </Imagem>

)

export default Header
