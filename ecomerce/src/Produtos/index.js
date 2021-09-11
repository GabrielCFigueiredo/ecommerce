import React, { useState } from "react";
import styled from "styled-components";
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import Button from '@material-ui/core/Button';
import { InputLabel, Typography } from "@material-ui/core";


const Lista = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const ContainerQantity = styled.div`  
    margin-top: 20px;
    text-align: center;
`
const ContainerOrder = styled.div`  
     margin-top: 20px;
    text-align: center;
`
const Container = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`

const ContainerImagem = styled.div` 
  margin-top: 80px;
  
`
const Imagem = styled.img` 
    width: 280px;
    height: 400px;
    border-radius: 10px;
`
const CardNameValue = styled.div` 
    display: flex;
    justify-content: center;
`
const ContainerButton = styled.div` 
    display: flex;
    justify-content: center;
`
const Order = styled.div` 
display: flex;
`
function Produtos(props) {


  const [sort, setSort] = useState("decrescente")


  const listaFiltrada = props.produtos.filter((produto) => {
    if (!props.valorMinimo || (produto.value > props.valorMinimo)) {
      return true
    } else {
      return false
    }
  })
    .filter((produto) => {
      if (!props.valorMaximo || (produto.value < props.valorMaximo)) {
        return true
      } else {
        return false
      }
    })
    .filter((produto) => {
      if (produto.name.toLowerCase().includes(props.name.toLowerCase())) {
        return true
      } else {
        return false
      }
    })
    .sort((a, b) => sort === "CRESCENTE" ? a.value - b.value : b.value - a.value)
  const onChangeSort = (e) => {
    setSort(e.target.value)
  }

  const lista = listaFiltrada.map((produto) => {
    return (
      <ContainerImagem >
        <Zoom>
          <Imagem src={produto.imageUrl} width="500" />
        </Zoom>
        <CardNameValue>
          <Typography color="secondary">{produto.name} - {produto.value}</Typography>
        </CardNameValue>
        <ContainerButton>
          <Button onClick={() => props.adicionarProduto(produto)}
            variant="contained"
            color="primary"
          >
            Adicionar Produto
          </Button>
        </ContainerButton>
      </ContainerImagem >
    )
  })
  return (
    <Lista>
      <Container>
        <ContainerQantity>
          <Typography color="secondary">Quantidade de produto:   {listaFiltrada.length}</Typography>
        </ContainerQantity>
        <ContainerOrder>
          <InputLabel color="secondary">
            <Order>
              <Typography color="secondary">Ordenação:</Typography>
              <select value={sort} onChange={onChangeSort}>
                <option value={'CRESCENTE'}>Crescente</option>
                <option value={'DECRESCENTE'}>Decrescente</option>
              </select>
            </Order>
          </InputLabel>
        </ContainerOrder>
      </Container>
      {lista}
    </Lista>
  );
}

export default Produtos;