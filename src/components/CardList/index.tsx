import Card from "../Card"

import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'

import {CardsContainer} from './styles'
import { Restaurante } from "../../pages/Home"


type Props = {
  restaurantes : Restaurante[]
}

const CardList = ({ restaurantes }: Props) => {

  return (
    <CardsContainer>
      {restaurantes.map((restaurante: Restaurante) => (
        <Card
        key={restaurante.id}
        title={restaurante.titulo}
        image={restaurante.capa}
        description={restaurante.descricao}
        rating={restaurante.avaliacao}
        info={restaurante.tipo}
        destacado={restaurante.destacado}
        />
      ))}
    </CardsContainer>
  )
}

export default CardList
