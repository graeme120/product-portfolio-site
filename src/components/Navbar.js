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
    </AnimatePresence>
  );
}
