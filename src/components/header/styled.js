import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    width: 100%;
    right: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 17px 5%;
    border-bottom: 1px solid transparent;
    transition: all 0.5s ease;
    
    &.sticky {
        padding: 14px 5%;
        background-color: #002bad;
        border-bottom: 1px solid #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 1150px) {
        padding: 17px 2%;
        &.sticky {
            padding: 13px 2%;
        }
    }
`
export const Logo = styled.a`
    font-size: 22px;
    font-weight: 700;
    color: var(--text-color);
`

export const NavBar = styled.nav`
    @media screen and (max-width: 1150px) {
        position: absolute;
        top: -500px;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #0034d5;
        transition: 0.5s ease;

        &.active {
            top: 100%;
        }
    }
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 1150px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
export const List = styled.li`
    padding: 10px 25px;
    margin: 0 5px;

    @media screen and (max-width: 1150px) {
        width: 100%;
        padding: 0;
        margin: 10px 0;
    }
`
export const LinkStyle = styled.a`
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: 0.5s ease;

    &:hover {
        color: #0f0;
    }

    @media screen and (max-width: 1150px) {
        display: block;
        padding: 1rem;

        &:hover {
            background-color: #0f0;
            color: #000;
        }
    }
`

export const MenuIcon = styled.div`
    font-size: 33px;
    color: var(--text-color);
    z-index: 1001;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1150px) {
        display: inline-flex;
        align-items: center;
    }
`