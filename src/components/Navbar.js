import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useEffect, useRef } from "react";
import "../styles/global.css";
import "../styles/navbar.css";
import close from "../images/close.svg";
import returnTop from "../images/return.svg";

const Nav = () => {
  const controlsBarRef = useRef(null);

  useEffect(() => {
    const controlsBar = controlsBarRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 800) {
        controlsBar.classList.add("controlsFadeIn");
      } else {
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <header className="header">
        <div className="header-content">
          <div className="name">
            <Link to="/">Graeme Mounsey</Link>
          </div>
          <div className="nav">
            <a className="navbar-link bump-left" href="#work">
              Work
            </a>

            <Link className="navbar-link bump-left" to="/debug">
              About
            </Link>

            <a
              className="navbar-link"
              target="_blank"
              href="https://drive.google.com/file/d/1z3T5yZ0XNUy7sjnPRr-UGjSJis6iCeRN/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </header>
      <motion.div
        key="controls"
        transition={{ delay: 0.1, duration: 0.45, ease: easeInOut }}
        exit={{ opacity: 0 }}
      >
        <div className="controls-bar" ref={controlsBarRef}>
          <a className="controls return" href="#">
            <img src={returnTop} alt="Back to top" title="Back to top" />
          </a>
          <Link className="controls close" to="/">
            <img src={close} alt="Close project" title="Close project" />
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export function Mailto({ mailto, label }) {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
}

export default Nav;
