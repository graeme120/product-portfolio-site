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
            src="https://www.datocms-assets.com/103104/1693852021-sp_tentative-web-feature.png"
            alt="Various screens of the mobile app SnapSave"
            title="Various screens of the mobile app SnapSave"
          ></img>
          <div className="content--block fade-in">
            <div className="content--main">
              <h1>SwitchPitch</h1>
              <h2>
                Improving Platform Onboarding for Large-Scale Enterprises{" "}
              </h2>
              <p className="project-writeup-description">
                SwitchPitch is a platform designed to connect enterprises with
                startups and ecosystems. This summer, i'm working as a product
                design intern, helping SwitchPitch to refresh their platform
                onboarding to better suit the needs of large-scale enterprises,
                who make up the majority of SwitchPitch's client base.
                <br /> <br /> As it is currently under development, please
                contact me directly for more information about the project.
              </p>
              <div className="content--subdivide">
                <div className="content--subdivision-big">
                  <p>TEAM</p>
                  <p>
                    Graeme Mounsey - Product Design Intern
                    <br />
                    Coren Feldman - Head of Product
                  </p>
                </div>
                <div id="intro" className="content--subdivision-medium">
                  <p>SKILLS</p>
                  <p>
                    user research, systems design, content design, copywriting,
                    prototyping, interface design
                  </p>
                </div>
                <div className="content--subdivision-small">
                  <p>TIMELINE</p>
                  <p>
                    June - September 2023 <br /> <i>16 Weeks</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="grey">
          <div className="content--block content--next-project fade-in ">
            <div className="content--main footer">
              {/* <h2>
                Thank you for reading about my project!<br></br> Here it is
                again as a<span> </span>
                <a className="explicit-link" href="">
                  <u>slide-deck.</u>
                </a>
              </h2> */}
              <h3 id="nextProject">
                Next Project →{" "}
                <Link className="explicit-link" to="/project-snapsave">
                  <u>SnapSave</u>
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
