import styled from "styled-components";

export const CuriosidadeSection = styled.section`

`
export const CenterText = styled.header`
    text-align: center;
`
export const CenterTextH2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
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
export const CuriosidadeContainer = styled.main`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 887px) {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }
`
export const LeftSide = styled.figure`
    flex: 1;
    text-align: center;
`

export const LeftSideImage = styled.img`
    width: 200px;
    max-width: 100%;
    height: auto;
`

export const RightSide = styled.aside`
    flex: 1;
`
export const RightSideList = styled.ul`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    gap: 1rem;
`
export const List = styled.li`
    list-style: disc;
    list-style-position: inside;
    color: var(--text-color);
    line-height: 30px;
    font-size: 1rem;
    font-weight: 600;

    @media screen and (max-width: 400px)  {
        font-size: 13px;
    }
`