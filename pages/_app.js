import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: sans-serif;
    background-image: url(https://i.pinimg.com/originals/54/dd/2a/54dd2a6c17f894e233848e18eaa242d9.jpg);
  }

  #__next {
    display:flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
