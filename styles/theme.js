import { createGlobalStyle } from "styled-components";

const light = {
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