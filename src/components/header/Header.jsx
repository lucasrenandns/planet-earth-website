import { useEffect, useRef, useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import {Header, 
Logo,
NavBar, 
NavList, 
List,
LinkStyle,
MenuIcon,
} from './styled';

export default function header() {
    const headRef = useRef(null)
    const navRef = useRef(null)
    const [menuIcon, setMenuIcon] = useState(BiMenu)

    const stickyScroll = () => {
        window.addEventListener("scroll", () => {
            headRef.current.classList.toggle("sticky", window.scrollY > 0)
        }) 
    }

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(IoClose)
        }
    }

    const hiddenMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        })
    }

    useEffect(stickyScroll)
    useEffect(hiddenMenu)

    return(
        <Header ref={headRef} onScroll={stickyScroll}>
            <Logo href='/'>Planeta Terra</Logo>

            <NavBar ref={navRef} onScroll={hiddenMenu}>
                <NavList>
                    <List>
                        <Link smooth to={'#home'}><LinkStyle>Home</LinkStyle></Link>
                    </List>
                    
                    <List>
                        <Link smooth to={'#sobre'}><LinkStyle>Característica</LinkStyle></Link>
                    </List>

                    <List>
                        <Link smooth to={'#estrutura'}><LinkStyle>Estrutura</LinkStyle></Link>
                    </List>

                    <List>
                        <Link smooth to={'#formacao'}><LinkStyle>Formação</LinkStyle></Link>
                    </List>

                    <List>
                        <Link smooth to={'#curiosidade'}><LinkStyle>Curiosidade</LinkStyle></Link>
                    </List>
                </NavList>
            </NavBar>

            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
        </Header>
    )
}