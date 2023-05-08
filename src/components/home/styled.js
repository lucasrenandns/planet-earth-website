import styled from "styled-components";

export const Home = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 931px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 4rem;
        height: 100%;
    }
`

export const HomeText = styled.div`
    .button {
        display: inline-block;
        margin-top: 2rem;
        padding: 8px 20px;
        border: 1px solid transparent;
        outline: none;
        background-color: var(--text-color);
        color: #000;
        font-size: 1rem;
        font-weight: 500;
        text-transform: capitalize; 
        border-radius: 5px;
        transition: 0.5s ease;

        &:hover {
            cursor: pointer;
            background-color: transparent;
            border: 1px solid #0f0;
            box-shadow: 0 0 10px #0f0;
            color: var(--text-color);
            transform: translateY(-5px);
        }
    }

    @media screen and (max-width: 931px) {
        padding-top: 4rem;
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    font-size: 700;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: var(--text-color);

    @media screen and (max-width: 432px) {
        font-size: 3.3rem;
    }
`

export const Paragraph = styled.p`
    color: var(--second-color);
    font-size: 1rem;
    font-weight: 500;
    line-height: 30px;

    @media screen and (max-width: 432px) {
        font-size: 14px;
    }
`

export const HomeImage = styled.figure`
    text-align: center;
`

export const Image = styled.img`
    width: 400px;
    max-width: 100%;
    height: auto;
    border-radius: 5px;
`