import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import "./index.scss";
// import {
//   FaBars,
//   FaRegUser,
//   FaChalkboard,
//   FaAddressBook,
//   FaCode,
// } from "react-icons/fa";

const NavBar = () => {

  function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
      <li className={isActive === to ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  return (
    // <nav className="app__nav">
    //     <ul className="app__navbar-links">
    //       {["home", "about", "work", "skills", "contact"].map((item) => (
    //         <li className="app__flex p-text" key={`link-${item}`}>
    //           {/* <FaBars /> */}
    //         {/* <FaRegUser /> 
    //         <FaChalkboard /> 
    //         <FaCode /> 
    //         <FaAddressBook /> */}
    //           <a href={`#${item}`}>{item}</a>
    //         </li>
    //       ))}
    //     </ul>
    // </nav>

    <nav className="app__nav">
      <ul className="app__navbar-links">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/skills">Skills</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>

    
  );
};
export default NavBar;
