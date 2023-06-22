import { AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import "../styles/global.css";
import "../styles/navbar.css";

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

export default function Nav() {
  return (
    <AnimatePresence>
      <header className="header">
        <div className="header-content">
          <div className="name">
            <Link to="/index">Graeme Mounsey</Link>
          </div>
          <div className="nav">
            <a className="link" href="#work">
              Work
            </a>
            <Link className="link" to="/about">
              About
            </Link>
            <a
              className="link"
              href="https://drive.google.com/file/d/1kNz9SKjWGtPajaAZNsrUgjL_c2as4Vp5/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </header>
    </AnimatePresence>
  );
}
