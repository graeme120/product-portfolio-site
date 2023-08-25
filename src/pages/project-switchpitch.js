import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";
import { easeInOut, motion } from "framer-motion";
import { Script } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/project-page.css";

export function Head() {
  return <title>Project Page Template </title>;
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
          <img
            id="image-header"
            src="https://www.datocms-assets.com/103104/1689701912-ss_cover.png"
            alt="Various screens of the mobile app SnapSave"
            title="Various screens of the mobile app SnapSave"
          ></img>
          <div className="content--block fade-in">
            <div className="content--main">
              <h1>SnapSave</h1>
              <h2>A Spending Tracker Designed for College Students</h2>
              <p className="project-writeup-description">
                As college students, my peers and I are managing our finances
                for the very first time which.. comes with a learning curve. One
                of the biggest issues we face in this pursuit is an unawareness
                of our spending patterns. To solve this, I designed a mobile app
                that makes sorting your past purchases simple and painless,
                which helps to remind students of their purchases, and foster
                long-term insights about their spending patterns. This project
                was completed as a final project for my Brainstation UX design
                bootcamp.
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
                    February - April 2022 <br /> <i>10 Weeks</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="grey">
          <div className="content--block content--next-project fade-in ">
            <div className="content--main footer">
              <h2>
                Thank you for reading about my project!<br></br> Here it is
                again as a<span> </span>
                <a className="explicit-link" href="">
                  <u>slide-deck.</u>
                </a>
              </h2>
              <h3 id="nextProject">
                Next Project →{" "}
                <Link className="explicit-link" to="/project-firebird">
                  <u>Firebird Delivery</u>
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
        <Overlay />
        <div class="overlay" id="overlay">
          <button id="closeButton">Close</button>
          <div class="modal">
            <img src="" alt="Enlarged Image" id="enlargedImage"></img>
            <div class="image-focus-subtitle" id="imageSubtitle"></div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
