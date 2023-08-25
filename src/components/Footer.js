import { AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import "../styles/global.css";
import "../styles/navbar.css";
import Linkedin from "../images/tester-images/li.svg";
import Instagram from "../images/tester-images/ig.svg";

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
          Site designed & coded by me &lt;3
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/graemeswork/">
            <img className="social-links--icon bump-left" src={Instagram}></img>
          </a>
          <a href="https://read.cv/graeme_mounsey">
            <img
              className="social-links--icon"
              src="https://www.datocms-assets.com/99382/1692993497-627012ff5aca2e86fb271203_read-cv.svg"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/graeme-mounsey/">
            <img className="social-links--icon" src={Linkedin}></img>
          </a>
        </div>
      </footer>
    </AnimatePresence>
  );
}
