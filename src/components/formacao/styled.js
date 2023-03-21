import styled from "styled-components";

export const FormacaoSection = styled.section`

`
export const CenterText = styled.header`
    text-align: center;
`
export const CenterH2 = styled.h2`
    color: var(--text-color);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 5px;

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
export const FormacaoContainer = styled.main`
    margin-top: 2rem;
    background-color: var(--text-color);
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
export const Paragraph = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: #000;
    line-height: 30px;

    @media screen and (max-width: 400px)  {
        font-size: 13px;
    }
`