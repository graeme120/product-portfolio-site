import React from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { easeInOut, motion } from "framer-motion";
import { Script } from "gatsby";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/project-page.css";
import Tester from "../images/tester-images/tester.png";

export function Head() {
  return <title>Project Page Debug</title>;
}

export default function Work() {
  return (
    <div className="scroll-container">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: easeInOut }}
        exit={{ opacity: 0 }}
        className="broad"
      >
        <div className="project-writeup">
          <img id="image-header" src={Tester}></img>
          <div className="content--block fade-in">
            <div className="content--main">
              <h1>SnapSave</h1>
              <h2>A Spending Tracker Designed for Young People</h2>
              <p className="project-writeup-description">
                As college students, many of my peers and I are managing our
                finances for the very first time which… comes with a learning
                curve. Impulse spending,
              </p>
              <div className="content--subdivide">
                <div className="content--subdivision-big">
                  <p>TEAM</p>
                  <p>
                    Graeme Mounsey - UX Designer
                    <br />
                    Emma Grunebaum- Mentor
                    <br /> Lawrence Lee- Mentor
                  </p>
                </div>
                <div id="intro" className="content--subdivision-medium">
                  <p>SKILLS</p>
                  <p>
                    user research, wireframing, usability testing, prototyping,
                    interface design
                  </p>
                </div>
                <div className="content--subdivision-small">
                  <p>TIMELINE</p>
                  <p>
                    June - July 2022 <br /> <i>3 Months</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No Content Below this line, only footer and relevant javascript */}
        {/* <!-- footer, slide deck, next project --> */}
        <div id="grey">
          <div className="content--block content--next-project">
            <div className="fade-in content--main footer">
              <h2>
                Thank you for reading about my project!<br></br> Here it is
                again as a<span> </span>
                <a href="">
                  <u>slide-deck.</u>
                </a>
              </h2>
              <h3 id="nextProject">
                Next Project →{" "}
                <Link to="">
                  <u>Project Project</u>
                </Link>
              </h3>
            </div>
          </div>
        </div>
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
      </motion.main>
      <Footer />
    </div>
  );
}
