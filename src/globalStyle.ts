import { createGlobalStyle } from "styled-components"
import { colors } from "theme/theme"

export default createGlobalStyle`
  * {
    font-family: Roboto;
    color: ${colors.title_primary}
  }
  
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  section {
    height: calc(100vh - 180px);
    padding: 90px 0;
    background-color: ${colors.background_light};
  }


  /* width */
  ::-webkit-scrollbar {
      width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: rgb(228, 228, 228);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: rgb(192, 192, 192);
      border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: rgb(170, 170, 170);
  }

`
