import { createGlobalStyle } from "styled-components";

const sharedTheme = {
  borderRadius: {
    primary: "10px"
  },
  padding: {
    primary: "1rem"
  },
  gap: {
    primary: "1rem"
  },
} 

const light = {
  ...sharedTheme,
  type: 'light',
  color: {
    primary: {
      name: "dark_blue",
      value: "#001730"
    },
    secondary: {
      name: "sea_green",
      value: "#4AD7D1"
    },
    terciary: {
      name: "red",
      value: "#FE4A49"
    },
    white: "#fff",
    black: "#000"
  }
};

const dark = {
  ...sharedTheme,
  type: 'dark',
  color: {
    primary: {
      name: "",
      value: ""
    }
  }

};

export const theme = {
  light,
  dark
}

export const GlobalStyles = createGlobalStyle`
  /* add global styles here */
`