import styled from "styled-components";

export const CamadasSection = styled.section`

`
export const CenterText = styled.header`
    text-align: center;
`
export const CenterTextH2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    text-transform: capitalize;
    margin-bottom: 5px;

    @media screen and (max-width: 400px)  {
        font-size: 2.3rem;
    }
`
export const CenterTextH3 = styled.h3`
    font-size: 15px;
    font-weight: 600;
    color: var(--second-color);

    @media screen and (max-width: 400px)  {
        font-size: 13px;
    }
`
export const CamadasContainer = styled.main`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, auto));
    align-items: center;
    gap: 2rem;
`
export const Box = styled.div`
    background-color: var(--text-color);
    padding: 20px 10px;
    height: 100%;
    border-radius: 5px;
    text-align: center;
    transition: all 0.5s ease;

    &:hover {
        transform: translateY(-5px);
        cursor: pointer;
    }

    h4 {
        margin-bottom: 8px;
        font-size: 1rem;
        font-weight: 700;
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