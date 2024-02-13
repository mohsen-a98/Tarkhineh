import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalizeCss";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  :root {
    //COLORS
    --color-green-100: #E5F2E9;
    --color-green-200: #CAE4D3;
    --color-green-300: #B0D7BD;
    --color-green-400: #96C9A7;
    --color-green-500: #7CBC91;
    --color-green-600: #61AE7B;
    --color-green-700: #4E9968;

    --color-primary: #417F56;

    --color-shade-100: #396F4B;
    --color-shade-200: #315F41;
    --color-shade-300: #294F36;
    --color-shade-400: #21402B;
    --color-shade-500: #183020;
    --color-shade-600: #102016;
    --color-shade-700: #08100B;

    --color-white: #fff;
    --color-black: #0C0C0C;

    --color-grey-100: #F9F9F9;
    --color-grey-200: #E1E1E1;
    --color-grey-300: #EDEDED;
    --color-grey-400: #CBCBCB;
    --color-grey-500: #ADADAD;
    --color-grey-600: #757575;
    --color-grey-700: #717171;
    --color-grey-800: #353535;

    --color-error: #C30000;
    --color-error-light: #ED2E2E;
    --color-error-extraLight: #FFF2F2;
    
    --color-success: #00966D;
    --color-success-light: #00BA88;
    --color-success-extraLight: #F3FDFA;
    
    --color-warning: #A9791C;
    --color-warning-light: #F4B740;
    --color-warning-extraLight: #FFF8E1;

    //BORDER RADIUS
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    --border-radius-xl: 24px;
    --border-radius-2xl: 32px;
    --border-radius-3xl: 64px;

    //SHADOWS
    --shadow-sm: 0 2px 2px #00000040;
    --shadow-md: 0px 4px 4px #00000040;
    --shadow-lg: 0px 6px 6px #00000040;
    --shadow-xl: 0px 8px 8px #00000040;
    --shadow-2xl: 0px 12px 12px #00000040;
    --shadow-3xl: 0 16px 16px #00000040;

    
    
  }

  //FONTS
  @font-face {
      font-family: "estedad";
      font-weight: 100;
      src: url('./fonts/Estedad-Thin.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 200;
      src: url('./fonts/Estedad-ExtraLight.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 300;
      src: url('./fonts/Estedad-Light.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 400;
      src: url('./fonts/Estedad-Regular.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 500;
      src: url('./fonts/Estedad-Medium.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 600;
      src: url('./fonts/Estedad-SemiBold.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 700;
      src: url('./fonts/Estedad-Bold.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 800;
      src: url('./fonts/Estedad-ExtraBold.woff2') format('woff2');
    }
    @font-face {
      font-family: "estedad";
      font-weight: 900;
      src: url('./fonts/Estedad-Black.woff2') format('woff2');
    }

  //BASE
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "estedad",sans-serif;
  }
`;

export default GlobalStyles;
