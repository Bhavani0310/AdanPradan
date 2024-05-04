import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0; 
      line-height: normal;
    }
`;

// Define variables locally within your components or styled-components
export const Fonts = {
  poppins: 'Poppins',
};

export const FontSizes = {
  xl: '24px',
  lg: '18px',
  xxl: '39px',
  xl2: '23px',
  x12l: '31px',
};

export const Colors = {
  darkSlateGray: '#09344e',
  slateGray100: '#3d6680',
  slateGray200: 'rgba(61, 102, 128, 0.09)',
  steelBlue: '#2e6d94',
};

export const Gaps = {
  xl: '20px',
  x12l9: '31.9px',
};

export const Paddings = {
  x5l1: '24.1px',
  x3xs4: '9.4px',
  x7xs: '6px',
  x3xs3: '9.3px',
  x12xs9: '0.9px',
  x12xs1: '0.1px',
  smi1: '12.1px',
  x3xl: '22px',
  xs6: '11.6px',
  xs1: '11.1px',
};

export const BorderRadiuses = {
  x5xs: '8px',
};
