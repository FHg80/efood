import { useParams } from "react-router-dom"

import Header from "../../components/Header"
import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"
import { useEffect, useState } from "react"
import { Restaurante } from "../Home"

const Profile = () => {

  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if(!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
        <Header />
        <Banner imagem={restaurante.capa} categoria={restaurante.tipo} nome={restaurante.titulo} />
        <ProductsList cardapio={restaurante.cardapio}/>
    </>
  )
}

export default Profile
