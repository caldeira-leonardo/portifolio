import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    font-family: Roboto;
  }

  body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  section {
    height: 100vh;
    padding: 90px 0;
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
