import { createGlobalStyle } from 'styled-components'

export const cores = {
  red: '#E66767',
  background: '#FFF8F2',
  footerBackground: '#FFEBD9',
  white: '#FFF',
  white2: '#FFEBD9'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    color: ${cores.red};
    background-color: ${cores.background};
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`
