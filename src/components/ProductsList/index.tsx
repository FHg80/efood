import { useState } from "react"

import { Comida } from "../../pages/Home"
import ProductCard from "../ProductCard"

import fechar from '../../assets/images/fechar.png'

import { ProductsListContainer, Modal, ModalContent } from './styles'

type Props = {
  cardapio: Comida[]
}

const ProductsList = ({ cardapio }: Props) => {

  const [isVisible, setIsVisible] = useState(false)
  const [nome, setNome] = useState('')
  const [imagem, setImagem] = useState('')
  const [descricao, setDescricao] = useState('')
  const [porcao, setPorcao] = useState('')
  const [preco, setPreco] = useState(0)


  const abrirModal = (comida: Comida) => {
    setNome(comida.nome)
    setImagem(comida.foto)
    setDescricao(comida.descricao)
    setPorcao(comida.porcao)
    setPreco(comida.preco)
    setIsVisible(true)
  }

  const fecharModal = () => {
    setIsVisible(false)
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }


  return (
    <div className="container">
      <ProductsListContainer>
        {cardapio.map((comida) => (
          <li key={comida.id}>
            <ProductCard imagem={comida.foto} nome={comida.nome} descricao={comida.descricao} id={comida.id} onClick={() => abrirModal(comida)}/>
          </li>
        ))}
          <Modal className={isVisible ? 'visivel' : ''}>
            <ModalContent>
              <img src={imagem} alt="" />
              <main>
                <img src={fechar} onClick={() => fecharModal()} />
                <h3>{nome}</h3>
                <p>{descricao}<br />Serve: {porcao}</p>
                <button type='button'>Adicionar ao carrinho - {formataPreco(preco)}</button>
              </main>
            </ModalContent>
            <div className="overlay" onClick={() => fecharModal()} ></div>
          </Modal>
      </ProductsListContainer>
    </div>
  )
}

export default ProductsList
