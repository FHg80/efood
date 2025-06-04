import CardList from "../../components/CardList"
import Hero from "../../components/Hero"
import Restaurant from "../../models/Restaurant"

import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'
import spaghetti from '../../assets/images/spaghetti.png'

export const restaurantes: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Shushi',
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    profileImage: '',
    rating: 4.9,
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    profileImage: spaghetti,
    rating: 4.6,
    infos: ['Italiana']
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    profileImage: spaghetti,
    rating: 4.6,
    infos: ['Italiana']
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    profileImage: spaghetti,
    rating: 4.6,
    infos: ['Italiana']
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    profileImage: spaghetti,
    rating: 4.6,
    infos: ['Italiana']
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: trattoria,
    profileImage: spaghetti,
    rating: 4.6,
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <CardList restaurants={restaurantes} />
    </div>
  </>
)

export default Home
