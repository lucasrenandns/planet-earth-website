import styled from "styled-components";

export const Footer = styled.footer`
    text-align: center;
    padding: 15px;
`

export const Paragraph = styled.p`
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: var(--second-color);

    @media screen and (max-width: 400px)  {
        font-size: 13px;
    }
`