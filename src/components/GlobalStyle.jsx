import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  font-size: 16px;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    font-size: 16px;
    font-family: inherit;
    color: inherit;  
}
 ul,h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
main{
  padding:20px 60px;
}

`;
export default GlobalStyle;
