import logo from '../../assets/images/logo.svg'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'

import { FooterContainer, Logo, List, Link, Text } from './styles'


const Footer = () => (
  <FooterContainer>
    <div className='container'>
        <Logo src={logo} alt="Efood" />
        <List>
          <li>
            <a href="#"><img src={instagram} alt="" /></a>
          </li>
          <Link>
            <a href="#"><img src={facebook} alt="" /></a>
          </Link>
          <Link>
            <a href="#"><img src={twitter} alt="" /></a>
          </Link>
        </List>
        <Text>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br/>
              dos produtos é toda do estabelecimento contratado.
        </Text>
    </div>
  </FooterContainer>
)

export default Footer
