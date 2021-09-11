import React, { useState } from "react";
import { createTheme, InputLabel, makeStyles, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import Produtos from "./Produtos";
import Filtro from "./components/Filtro";
import Carrinho from "./components/Carrinho";

const useStyles = makeStyles({
  ContainerApp: {
    maxwidth: "100vw",
    maxheight: "100vh",
  },
  Titulo: {
    height: "10vh"
  },
  Container: {
    display: "flex",
  },
  ProdutoFiltrado: {
    background: "#f2f2f2",
    width: "20vw",
    minheight: "100vh"
  },
  Produto: {
    background: "#454545",
    width: "60vw",
    minheight: "100vh"
  },
  ProdutoCarrinho: {
    background: "#f2f2f2",
    width: "20vw",
    minheight: "100vh"
  },
  root: {
    maxWidth: 350,
    marginLeft: 10,
  },
})

const theme = createTheme({

  palette: {
    primary: {
      main: "#69f0ae",
    },
    secondary: {
      main: "#eceff1"
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  typography: {
    fontSize: 18,
  }
});

function App() {


  const [produtos, setProdutos] = useState([
    {
      id: 1,
      name: "Camiseta Drean",
      value: 100,
      imageUrl: "https://www.rockzclub.com.br/wp-content/uploads/2017/10/MR-030.jpg",

    },
    {
      id: 2,
      name: " Camiseta Astronauta",
      value: 70,
      imageUrl: "https://img.elo7.com.br/product/main/25508F4/camiseta-astronauta-masculina.jpg",

    },
    {
      id: 3,
      name: "Astronauta Skate",
      value: 49,
      imageUrl: "https://img.elo7.com.br/product/zoom/2509210/camiseta-astronauta-skate-personalizada.jpg",

    },
    {
      id: 4,
      name: "Camiseta Nasa",
      value: 50,
      imageUrl: "https://static.netshoes.com.br/produtos/camiseta-geek-cool-tees-nasa-vintage/14/HIK-0027-014/HIK-0027-014_zoom1.jpg?ts=1617660310&ims=544x",

    },
    {
      id: 5,
      name: "Astronauta Total blusa",
      value: 65,
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_855797-MLB25693992704_062017-O.jpg",

    },
    {
      id: 6,
      name: "Astronauta Balões",
      value: 70,
      imageUrl: "https://img.elo7.com.br/product/zoom/255085C/camiseta-astronauta-baloes-feminino.jpg",

    },
    {
      id: 7,
      name: "Espaço Cosmos",
      value: 54,
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_870529-MLB46012164584_052021-W.jpg",

    },
    {
      id: 8,
      name: "Espaço Cosmos",
      value: 145,
      imageUrl: "https://www.firmao.com.br/wp-content/uploads/2021/07/nao-ha-limites-para-o-amor-azul-marinho-basica-unissex.jpg",

    },
    {
      id: 9,
      name: "Skatista no Espaço",
      value: 160,
      imageUrl: "https://a-static.mlcdn.com.br/1500x1500/camiseta-astronauta-skatista-do-espaco-di-nuevo/dinuevo/43747/213181058b78fc14179c0683da5c30a3.jpg",
    },
    {
      id: 10,
      name: "Frenso Astronauta",
      value: 110,
      imageUrl: "https://static3.tcdn.com.br/img/img_prod/249009/camiseta_masculina_fresno_astronauta_3215_1_20201116161454.jpg",
    },
  ])
  const [valorMinimo, setValorMinimo] = useState()
  const [valorMaximo, setValorMaximo] = useState()
  const [name, setName] = useState("")

  const onchangeminimo = (e) => {
    setValorMinimo(e.target.value)
  }

  const onchangemaximo = (e) => {
    setValorMaximo(e.target.value)
  }

  const onchangename = (e) => {
    setName(e.target.value)
  }

  const [carrinho, setCarrinho] = useState([])
  const adicionarProduto = (produto) => {
    const produtoCarrinho = carrinho.find((produtoCarrinho) => {
      if (produtoCarrinho.id === produto.id) {
        return true
      } else {
        return false
      }
    })
    if (!produtoCarrinho) {
      const novoProduto = {
        ...produto,
        quantidade: 1
      }
      const copiaProduto = [...carrinho, novoProduto]
      setCarrinho(copiaProduto)
    } else {
      const copiaProduto = carrinho.map((produtoCarrinho) => {
        if (produtoCarrinho.id === produto.id) {
          return {
            ...produtoCarrinho,
            quantidade: produtoCarrinho.quantidade + 1
          }
        } else {
          return produtoCarrinho
        }
      })
      setCarrinho(copiaProduto)
    }
  }
  const remover = (produtoId) => {
    const removido = carrinho.map((produto) => {
      if (produto.id === produtoId) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)
    setCarrinho(removido)
    console.log("removido", removido);
  }

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.ContainerApp}>
        <div className={classes.Titulo}>
          <Header />
        </div>
        <div className={classes.Container}>
          <div className={classes.ProdutoFiltrado}>
            <Filtro
              onchangeminimo={onchangeminimo}
              onchangemaximo={onchangemaximo}
              onchangename={onchangename}
              valorMinimo={valorMinimo}
              valorMaximo={valorMaximo}
              name={name}
            />
          </div>
          <div className={classes.Produto}>
            <Produtos
              produtos={produtos}
              adicionarProduto={adicionarProduto}
              valorMinimo={valorMinimo}
              valorMaximo={valorMaximo}
              name={name}
            />
          </div>
          <div className={classes.ProdutoCarrinho}>
            <div className={classes.root}>
              <Carrinho
                produtos={produtos}
                carrinho={carrinho}
                remover={remover}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
