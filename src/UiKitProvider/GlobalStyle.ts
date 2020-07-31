import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://rsms.me/inter/inter.css"); 
body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}
input, div {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
