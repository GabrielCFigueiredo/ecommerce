import React from "react";
import styled from "styled-components";

const ContainerTitulo = styled.div`
background-color: #000000;
width: 100vw;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`

function Header(props) {
  return (
    <ContainerTitulo>
      <img src="https://fontmeme.com/permalink/210826/48a2b88bdfbe1bdb88db99ff6bb3db12.png"></img>

    </ContainerTitulo>
  );
}

export default Header;