import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0%;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size:60%;
    }

    html {
    scroll-behavior: smooth;
    }

    button{
        cursor: pointer;
        border:none;
    }

    :root{
        --primaryColor:#7196FF;
        --primaryColorDark:#3469D0;
    }
`