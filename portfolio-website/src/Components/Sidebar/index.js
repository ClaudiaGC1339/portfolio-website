// import './index.css'
// // import { Link } from 'react-router-dom'


// const Sidebar = () => (
//     <div className='nav-bar'>
//     <Link className='logo' to='/'>
//         <img src={}
//     </Link>

//     </div>
// )

import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElems';
import { FaBars, FaRegUser, FaChalkboard, FaAddressBook, FaCode } from 'react-icons/fa';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            <FaRegUser /> About
          </SidebarLink>
          <SidebarLink
            to='portfolio'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            <FaChalkboard /> Portfolio
          </SidebarLink>
          <SidebarLink
            to='skills'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            <FaCode /> Skills
          </SidebarLink>
          <SidebarLink
            to='contact'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            <FaAddressBook /> Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;