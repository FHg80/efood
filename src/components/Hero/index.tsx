import { Imagem, HeroContainer, Logo, HeroTitle } from './styles'

import heroImg from '../../assets/images/fundo.png'
import logoEfood from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Hero = () => (
  <Imagem style={{backgroundImage: `url(${heroImg})`}}>
    <div className="container">
      <HeroContainer>
        <Link to='/'>
          <Logo src={logoEfood} alt="Efood" />
        </Link>
        <HeroTitle>Viva experiências gastrônomicas <br/>
        no conforto de sua casa
        </HeroTitle>
      </HeroContainer>
    </div>
  </Imagem>
)

export default Hero
