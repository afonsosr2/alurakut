import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfilesRelations'
import React from 'react';

function ProfileSideBar(propriedades) {
  console.log(propriedades);
  return(
    <Box as="aside"> 
    <img src={`https://github.com/${propriedades.githubUser}.png`} />
    <hr />

    <p>
      <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
      </a>
      <hr />
    </p>

    <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'afonsosr2'
  const [comunidades, setComunidades] = React.useState([{
    id: 'Imagem do Garfield',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    link: 'https://bit.ly/2TfT7QY'
  }]);    // const comunidades = posição[0]; e const setComunidades = posição[1];

  console.log('Nosso teste', );

  const pessoasFavoritas = [
    'afonsosr2',
    'juunegreiros',
    'omariosouto',
    'peas',
    'MonicaHillman',
    'jeniblodev',
  ]
  
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
            console.log(e);

            const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                  link: dadosDoForm.get('link')
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
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
      <ProfileRelationsBoxWrapper> 
        <h2 className="smallTitle">
          Pessoas da comunidade ({pessoasFavoritas.length})
        </h2>

        <ul>
          {pessoasFavoritas.map((itemAtual) => {
            return (
              <li key={itemAtual}>
                <a href={`/users/${itemAtual}`}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>  
      <ProfileRelationsBoxWrapper> 
        <h2 className="smallTitle">
          Minhas comunidades ({comunidades.length})
        </h2>

        <ul>
          {comunidades.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.link} target="_blank">
                  <img src={itemAtual.image} />
                  <span>{itemAtual.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>   
    </div>   
    </MainGrid>
    </>
    
  )
}
