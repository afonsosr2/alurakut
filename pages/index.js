import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfilesRelations'

function ProfileSideBar(propriedades) {
  console.log(propriedades);
  return(
    <Box> 
    <img src={`https://github.com/${propriedades.githubUser}.png`} />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'afonsosr2'
  const pessoasFavoritas = [
    'afonsosr2',
    'juunegreiros',
    'omariosouto',
    'peas',
    'MonicaHillman',
    'jeniblodev'
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
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper> 
        <h2 className="smallTitle">
          Pessoas da comunidade ({pessoasFavoritas.length})
        </h2>

        <ul>
          {pessoasFavoritas.map((itemAtual) => {
            return (
              <li>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
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
