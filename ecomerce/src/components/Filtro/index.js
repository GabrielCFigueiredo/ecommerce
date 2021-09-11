import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";



const ContainerForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
`
const Container = styled.div` 
margin: 5px;
margin-top: 40px;
`
const ContainerTitle = styled.div` 
text-align: center;
margin-top: 20px;
`


function Filtro(props) {


  return (

    <ContainerTitle>
      <img src="https://fontmeme.com/permalink/210826/90d993a39bdda2e70f708357bdd5f240.png"></img>
      <ContainerForm noValidate autoComplete="off">
        <Container>
          <TextField id="outlined-basic" label="Digite o nome do produto" variant="outlined" type="text" value={props.name} onChange={props.onchangename} />
        </Container>
        <Container>
          <TextField id="outlined-basic" label="valor minimo" variant="outlined" type="number" value={props.valorMinimo} onChange={props.onchangeminimo} />
        </Container>
        <Container>
          <TextField id="outlined-basic" label="valor maximo" variant="outlined" type="number" value={props.valorMaximo} onChange={props.onchangemaximo} />
        </Container>
      </ContainerForm >
    </ContainerTitle>
  );
}

export default Filtro;