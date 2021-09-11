import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import styled from "styled-components";
import { IoMdTrash } from "react-icons/io"
import { Button, Card } from "@material-ui/core";
import { MdShoppingCart } from "react-icons/md"


const Imagem = styled.img` 
width: 50px;
height: 50px;
`
const ContainerImagem = styled.div`  
display: flex;
justify-content: space-around;
margin-top: 10px;
`
const ContainerButton = styled.div`  
margin: 0;
margin-top: 10px;
display: flex;
justify-content: space-around;
align-items: center;
`
const ImagemIcon = styled.p` 
font-size: 150px;
color: #69f0ae;
text-align: center;
margin: 0;
margin-top: 20px;
`
const ImagemDelete = styled.p` 
font-size: 50px;
color: #CD0000;
text-align: center;
`
const Titulo = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 800;
font-size: 18px;
`
const Contagem = styled.p`
text-align: center;
`
const Valor = styled.p`
font-size: 26px;
font-weight: 800;
color: #CD0000;
`

function Carrinho(props) {

  const [contagem, setContagem] = useState(1)

  const valorTotal = () => {
    let valor = 0
    for (let produto of props.carrinho) {
      valor += produto.value * contagem
    }
    return valor
  }


  const increment = () => {
    setContagem(anterior => anterior + 1)
  }

  const decrement = () => {
    setContagem(anterior => anterior - 1)
  }
  return (

    <div>
      <div>
        <ImagemIcon><MdShoppingCart /></ImagemIcon>
      </div>
      {props.carrinho.map((produto) => {
        return (
          <Card variant="outlined">
            <ContainerImagem>
              <Imagem src={produto.imageUrl}></Imagem>
              <Titulo>
                {produto.name} - R${produto.value * contagem} {" "}
              </Titulo>
            </ContainerImagem>
            <ContainerButton>
              <Button onClick={decrement} variant="contained" color="primary" href="#contained-buttons">-</Button> <Contagem>{contagem}</Contagem>
              <Button onClick={increment} variant="contained" color="primary" href="#contained-buttons">+</Button>
              <ImagemDelete onClick={() => props.remover(produto.id)}><IoMdTrash /></ImagemDelete>
            </ContainerButton>
          </Card>
        );
      })}
      <div>
        <Valor><img src="https://fontmeme.com/permalink/210826/fdd379bb2e8f77fee781617fa563091d.png" ></img>                {valorTotal()},00</Valor>
      </div>
    </div>
  );
}

export default Carrinho;