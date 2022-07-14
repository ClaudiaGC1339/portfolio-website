import React, {useState, useEffect} from 'react'
import './index.css'
import { 
    MobileIcon,
    Nav,
    NavBarContainer,
    NavLinks,
    NavMenu,
    NavItem,
    NavBtn,
    NavBtnLink,
    NavSpan
     } from './NavbarElems'
import { FaBars, FaRegUser, FaChalkboard, FaAddressBook, FaCode } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';


const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
      
    useEffect(() => {
      window.addEventListener('scroll', changeNav);
    }, []);
            

    return (
            <IconContext.Provider value={{ color: '#fff' }} >
                <Nav scrollNav={scrollNav} >
                    <NavBarContainer>
                            <FaBars />
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                > 
                                    <FaRegUser /> About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='portfolio'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                > 
                                    <FaChalkboard /> Portfolio
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='skills'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                > 
                                    <FaCode /> Skills
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                 > 
                                    <FaAddressBook /> Contact
                                 </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
    )
}

export default NavBar