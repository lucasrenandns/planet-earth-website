import styled from "styled-components";

export const EstruturaSection = styled.section`

`

export const CenterText = styled.header`
    text-align: center;
`

export const CenterH2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    text-transform: capitalize;
    margin: 0 0 5px;

    @media screen and (max-width: 400px)  {
        font-size: 2.3rem;
    }
`
export const CenterH3 = styled.h3`
    font-size: 15px;
    font-weight: 600;
    color: var(--second-color);
    line-height: 25px;

    @media screen and (max-width: 400px)  {
        font-size: 13px;
    }
`
export const EstruturaContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;
`
export const Box = styled.div`
    background-color: var(--text-color);
    height: 100%;
    padding: 20px 10px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.03) translateY(5px);
        cursor: pointer;
    }

    & h4 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    &:hover h4 {
        color: #0a4edf;
    }
`
export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;

    @media screen and (max-width: 400px) {
        font-size: 13px;
    }
`