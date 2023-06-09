import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import variables from './variables';
import NanumJangMiCe from '../assets/fonts/NanumJangMiCe.ttf';
import NanumJungHagSaeng from '../assets/fonts/NanumJungHagSaeng.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${variables}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  @font-face {
  font-family: 'rose';
  src: url(${NanumJangMiCe}) format('truetype');
  }

  @font-face {
  font-family: 'junghagsaeng';
  src: url(${NanumJungHagSaeng}) format('truetype');
  }
  
  html, body {
    background-color: var(--light-pink);
    background-image: url('https://velog.velcdn.com/images/youa7878/post/59da6e5f-c4c2-4a52-a347-468b019f9a4b/image.png');
    background-repeat : repeat;
    font-family: 'junghagsaeng';
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'rose';
    background-color: transparent;
  }
  
  input {
    border: none;
    outline: none;
  }
  
`;

export default GlobalStyle;
