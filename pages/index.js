import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfilesRelations'

function ProfileSideBar(propriedades) {
  return(
    <Box as="aside"> 
      <img src={`https://github.com/${propriedades.githubUser}.png`} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      

    <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {propriedades.items.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`https://github.com/${itemAtual.login}`}>
                <img src={itemAtual.avatar_url} />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <a className="verMais" href="#">Ver mais</a>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home(props) {
  const usuarioAleatorio = props.githubUser;
  const [comunidades, setComunidades] = React.useState([]);
  // const comunidades = posição[0]; e const setComunidades = posição[1];

  const [pessoasFavoritas, setPessoasFavoritas] = React.useState([]);
  // const pessoasFavoritas = posição[0]; e const pessoasFavoritas = posição[1];

  const [seguidores, setSeguidores] = React.useState([]);
   // const seguidores = posição[0]; e const seguidores = posição[1];

  // Pegando o array de dados dos meus seguidores do Github 
  React.useEffect(function() {
    // GET
    fetch('https://api.github.com/users/afonsosr2/followers')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSeguidores(respostaCompleta);
    })

    // Pegando o array de dados de quem sigo no Github 
    fetch('https://api.github.com/users/afonsosr2/following')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setPessoasFavoritas(respostaCompleta);
    })

    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': 'c9a598fab5b5da95bcc81874672fd5',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id
          title
          imageUrl
          link
          creatorSlug
        }
      }` })
    })
    .then((response) => response.json()) // .then(function (response) { return response.json() }) // Pega o retorno do response.json() e já retorna        
    .then((respostaCompleta) => {
      const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      // console.log(comunidadesVindasDoDato)
      setComunidades(comunidadesVindasDoDato)
    })
    
  }, [])
  
  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      {/* <Box style="grid-area: profileArea;" */}
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSideBar githubUser={usuarioAleatorio}/>
      </div>     
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box> 
          <h1 className="title">
            Bem-vindo(a) 
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={ function handleCriaComunidade (e) {
            e.preventDefault();

            const dadosDoForm = new FormData(e.target);
            const comunidade = {
              title: dadosDoForm.get('title'),
              imageUrl: dadosDoForm.get('image'),
              link: dadosDoForm.get('link'),
              creatorSlug: usuarioAleatorio,
            }

            fetch('/api/comunidades', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(comunidade)
            })
            .then(async (response) => {
              const dados = await response.json();
              console.log(dados.registroCriado);
              const comunidade = dados.registroCriado;
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas)
            })
          }}>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"             
              />
            </div>
            <div>
              <input 
                placeholder="Coloque uma URL para usarmos de capa" 
                name="image"
                aria-label="Coloque uma URL para usarmos de capa"
                type="text"             
              />
            </div>
            <div>
            <input 
                placeholder="Coloque o link para a comunidade" 
                name="link"
                aria-label="Coloque o link para a comunidade"
                type="text"             
              />
            </div>

            <button>
              Criar comunidade
            </button>       
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      
      {/* Criando o box que vai ter o map, baseado nos items do array que pegamos do GitHub */}      
      <ProfileRelationsBox title="Seguidores" items={seguidores} />
      <ProfileRelationsBox title="Seguindo" items={pessoasFavoritas} /> 
      {/* Exibindo as comunidades, baseado nos items do array que pegamos do Dato + a que adicionamos no site*/}
      <ProfileRelationsBoxWrapper> 
        <h2 className="smallTitle">
          Minhas comunidades ({comunidades.length})
        </h2>

        <ul>
          {comunidades.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.link} target="_blank">
                  <img src={itemAtual.imageUrl} />
                  <span>{itemAtual.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <a className="verMais" href="#">Ver mais</a>
      </ProfileRelationsBoxWrapper>   
    </div>   
    </MainGrid>
    </>
    
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch("https://alurakut-afonsosr2.vercel.app/api/auth", {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
}