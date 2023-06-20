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
      <header>
        <div>
          <div className="heading">
            <div className="col">
              <h1>
                <Link to="/">Graeme Mounsey</Link>
                <br />
                <div className="mailTo">
                  <Mailto
                    label="moung091@newschool.edu"
                    mailto="mailto:moung091@newschool.edu"
                  />
                </div>
              </h1>
            </div>
            <div className="col SecondaryCol hide-mobile">
              <h2>
                Digital Designer.
                <br />
                Junior Communication Design
                <br />
                student at{" "}
                <a href="https://www.newschool.edu/parsons/" target="_blank">
                  Parsons.
                </a>
              </h2>
            </div>
          </div>
          <div className="menu">
            <nav className="col">
              <ul className="ul">
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a
                    id="link"
                    href="https://www.instagram.com/graemeswork/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    id="link"
                    href="https://www.linkedin.com/in/graeme-mounsey-7044251b1/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </nav>
            <div className="col copy SecondaryCol">
              <span>©2023</span>
            </div>
          </div>
        </div>
      </header>
    </AnimatePresence>
  );
}
