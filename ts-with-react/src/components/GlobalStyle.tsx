import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'MBC1961GulimM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/MBC1961GulimM.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
  font-family: "MBC1961GulimM", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul, ol {
  list-style: none;
}
`;

export default GlobalStyle;
