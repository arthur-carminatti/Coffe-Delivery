import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0px;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme["white-100"]};
    }
    
    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`