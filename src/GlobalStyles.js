import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style: none;
        text-decoration: none;
    }
    
    #root {
        min-height: 100vh;
        background-color: #001861;
    }

    :root {
        --text-color: #fff;
        --second-color: #0f0;
    }

    section {
        width: 100%;
        padding: 80px 5%;
    }

    @media screen and (max-width: 1240px) {
        section {
            padding: 60px 2%;
        }
    }

`