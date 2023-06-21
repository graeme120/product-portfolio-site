import { AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import "../styles/global.css";
import "../styles/navbar.css";
import linkedin from "../images/tester-images/li.svg";
import instagram from "../images/tester-images/ig.svg";

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
      <footer>
        <div>
          ©2023 Graeme Mounsey
          <br />
          Site designed & coded by yours truly.
        </div>
        <div className="social-links">
          <a href="">
            <img className="social-links--icon" src={instagram}></img>
          </a>
          <a href="">
            <img className="social-links--icon" src={linkedin}></img>
          </a>
        </div>
      </footer>
    </AnimatePresence>
  );
}
