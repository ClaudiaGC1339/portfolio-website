import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./index.scss";
import {
  FaBars,
  FaRegUser,
  FaChalkboard,
  FaAddressBook,
  FaCode,
} from "react-icons/fa";
import ContactButton from "../ContactButton/Buttons";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive === to ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }

  return (
    <nav className={scrolled ? "scrolled" : ""}>
    <div className="app__navbar">
        <ul className="app__navbar-links">
          <CustomLink to="/">
            <FaBars />
            Home
          </CustomLink>
          <CustomLink to="/about">
            <FaRegUser />
            About
          </CustomLink>
          <CustomLink to="/portfolio">
            <FaChalkboard />
            Portfolio
          </CustomLink>
          <CustomLink to="/skills">
            <FaCode />
            Skills
          </CustomLink>
          <CustomLink to="/contact">
            <FaAddressBook />
            Contact
          </CustomLink>
          <ContactButton/>
        </ul>
        </div>
    </nav>
  );
};
export default NavBar;
