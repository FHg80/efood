import Card from "../Card"

import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'

import {CardsContainer} from './styles'
import Restaurant from "../../models/Restaurant"

type Props = {
  restaurants : Restaurant[]
}

const CardList = ({ restaurants }: Props) => (
  <CardsContainer>
    {restaurants.map((restaurant) => (
      <Card
      key={restaurant.id}
      title={restaurant.name}
      image={restaurant.image}
      description={restaurant.description}
      rating={restaurant.rating}
      infos={restaurant.infos}
      />
    ))}
  </CardsContainer>
)

export default CardList
