import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    color: black;
    font-size: 18px;
    }

@font-face {
    font-family: 'Dovemayo_gothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.1/Dovemayo_gothic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

.App {
    margin: 0 auto;
    width: 1300px;
    height: calc(var(--vh, 1vh) * 100);
    font-family: 'Dovemayo_gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }

input, button {
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-family: 'Dovemayo_gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }

input {
    ::placeholder{
        font-size: 16px;
        color: #d3d3d3;
    }

}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}

`;
