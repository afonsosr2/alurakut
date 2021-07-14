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
  },
  {
    id: 'Imagem de abrindo a geladeira',
    title: 'Eu abro a geladeira pra pensar',
    image: 'https://img10.orkut.br.com/community/be757671e0ca3a2ec37680fb349e0e6e.jpg',
    link: 'https://www.easyanddelish.com/moqueca-baiana/'
  },
  {
    id: 'Imagem de Salvador',
    title: 'Sou baiano com muito orgulho',
    image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-salvador-capa2019-01-820x430.jpg',
    link: 'https://open.spotify.com/playlist/13eyUh3c7bqpzTPe9VfdOa?si=fad99b21b1ba4274'
  },
  {
    id: 'Imagem da Alura',
    title: 'Alura',
    image: 'https://yt3.ggpht.com/ytc/AKedOLRszi3O39AB5-uw_1jkrxJppwegjToBgIKFIOqiiA=s900-c-k-c0x00ffffff-no-rj',
    link: 'https://www.alura.com.br/'
  },
  {
    id: 'Imagem do Scuba Team',
    title: 'Scuba Team',
    image: 'data:image/png;base64,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',
    link: 'https://www.linkedin.com/in/afonsosr2/'
  },
  {
    id: 'Imagem do futebol',
    title: 'Saudade de aglomerar jogando futebol',
    image: 'https://super.abril.com.br/wp-content/uploads/2018/08/futebol-brasil.png',
    link: '#'
  },
]);    // const comunidades = posição[0]; e const setComunidades = posição[1];

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
