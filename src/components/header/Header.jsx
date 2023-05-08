import { useEffect, useRef, useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import {BiMenu} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'
import {Header, 
Logo,
NavBar, 
NavList, 
List,
MenuIcon,
} from './styled';

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>)
    const headerRef = useRef(null)
    const navRef = useRef(null)

    const stickyScroll = () => {
        window.addEventListener("scroll", () => {
            headerRef.current.classList.toggle("sticky", window.scrollY > 0)
        }) 
    }

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(<IoClose/>)
        }
    }

    const hiddenMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(<BiMenu/>)
        })
    }

    useEffect(stickyScroll)
    useEffect(hiddenMenu)

    return(
        <Header ref={headerRef} onScroll={stickyScroll}>
            <Logo href='/'>Planeta Terra</Logo>

            <NavBar ref={navRef} onScroll={hiddenMenu}>
                <NavList>
                    <List>
                        <Link className='nav-link' smooth to={'#home'}>Home</Link>
                    </List>
                    
                    <List>
                        <Link className='nav-link' smooth to={'#sobre'}>Característica</Link>
                    </List>

                    <List>
                        <Link className='nav-link' smooth to={'#camadas'}>Camadas</Link>
                    </List>

                    <List>
                        <Link className='nav-link' smooth to={'#estrutura'}>Estrutura</Link>
                    </List>

                    <List>
                        <Link className='nav-link' smooth to={'#formacao'}>Formação</Link>
                    </List>

                    <List>
                        <Link className='nav-link' smooth to={'#curiosidade'}>Curiosidade</Link>
                    </List>
                </NavList>
            </NavBar>

            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
        </Header>
    )
}