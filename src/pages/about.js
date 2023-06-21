import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout.js";
import pen from "../images/Stylo.png";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/about.css";
import tape1 from "../images/tape3.png";
import tape2 from "../images/tape2.png";
import head from "../images/Headshot.jpg";
import { Script } from "gatsby";

export function Head() {
  return <title>About | Graeme Mounsey</title>;
}

export default function About() {
  return (
    <div>
      <Layout>
        <section className="about">
          <div className="aboutWrap">
            <div className="aboutText">
              <p className="aboutLine">Hello World!</p>
              <p className="aboutLine">
                My name is Graeme Mounsey. I’m a digital product designer from
                Toronto, Canada.
              </p>
              <p className="aboutLine">
                I’m currently an honors B.F.A. student, majoring in
                Human-Computer Interaction at{" "}
                <a href="https://www.newschool.edu/parsons/">
                  Parsons School of Design.
                </a>
              </p>
              <p>
                {" "}
                Last summer I interned at{" "}
                <a href="https://hifyreretail.com/">Hifyre,</a> and developed
                the first online delivery platform for the Canadian cannabis
                industry.
              </p>
              <p className="aboutLine">
                I am a product designer with a strong background in visual
                communication and creative coding, interested in building
                products that embody human-centered design. I also{" "}
                <a href="https://www.instagram.com/eggsbenedictreview/">
                  review eggs benedict
                </a>
                , arguably the most delicious form of human-centered design.
              </p>
              <p className="aboutLine">
                <a href="https://drive.google.com/file/d/1445QKHAml-_1TKAyXUy4LWTYJeCnemF_/view?usp=sharing">
                  <span className="resume">Resume.pdf</span>
                </a>
              </p>
            </div>
            <div className="headShot">
              <div id="penZone">
                <img id="tape1" alt="" src={tape1}></img>
                <img id="tape2" alt="" src={tape2}></img>
              </div>
              <div id="portrait">
                <div className="frame"></div>
              </div>
              <div className="clearButton" id="clearButton"></div>
            </div>
          </div>
        </section>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            if (typeof faders === 'undefined') {
                const faders = document.querySelectorAll(".fade-in");
  
  const appearOptions = {
    threshold: 0.9,
  };
  
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  }`,
          }}
        />
      </Layout>
    </div>
  );
}
