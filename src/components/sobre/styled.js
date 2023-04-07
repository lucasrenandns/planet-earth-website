import styled from "styled-components";

export const Sobre = styled.section`
`

export const CenterText = styled.header`
    text-align: center;
`

export const CenterH2 = styled.h2`
    font-size: 3rem;
    font-size: 700;
    color: var(--text-color);

    @media screen and (max-width: 400px) {
        font-size: 2.3rem;
    }
`

export const CenterH3 = styled.h3`
    font-size: 15px;
    font-weight: 500;
    margin: 5px 0 0;
    color: var(--second-color);
    line-height: 25px;

    @media screen and (max-width: 400px)  {
        font-size: 13px;
    }
` 

export const SobreContainer = styled.main`
    margin-top: 1rem;
    background-color: var(--text-color);
    padding: 20px;
    border-radius: 5px;
    margin: 2rem 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`

export const Paragraph = styled.p`
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;

    @media screen and (max-width: 400px)  {
        font-size: 13px;
    }
`