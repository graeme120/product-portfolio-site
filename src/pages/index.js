import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RiverComponent from "../components/River";
import { easeInOut, motion } from "framer-motion";
import "../styles/global.css";
import "../styles/home.css";
import { Link, Script } from "gatsby";

export function Head() {
  return <title>Graeme Mounsey, Digital Product Designer</title>;
}

export default function Home() {
  return (
    <div className="scroll-container main-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: easeInOut }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <main className="skinny">
          <section className="hero">
            <div id="phonetic-spelling">( gray-um )</div>
            <div className="intro1">
              <div id="bump">
                Hi, I’m <span id="intro">Graeme.</span>
              </div>
              <div>
                I bring human-centered design to emerging technologies &
                industries.
              </div>
            </div>
            <div className="intro2">
              I’m currently a product design intern at<span> </span>
              <a
                href="https://switchpitch.com/"
                target="_blank"
                rel="noreferrer"
                className="explicit-link"
              >
                SwitchPitch,
              </a>
              <span> </span>
              and a Senior at<span> </span>
              <br className="mobile-gone" />
              <a
                href="https://www.newschool.edu/parsons/"
                target="_blank"
                rel="noreferrer"
                className="explicit-link"
              >
                Parsons School of Design.
              </a>
            </div>
          </section>
          <section>
            <div class="riverSketch">
              <div>
                ────────────────────────────────────────────────────────────────────
              </div>
              <RiverComponent />
            </div>
          </section>
          <section className="work" id="work">
            {/* These should / could be replaced by a forEach datoCMS algo */}
            <div className="project-wrapper fade-in">
              <Link className="project-content" to="/project-snapsave">
                <div className="project-image">
                  <img
                    className="image"
                    src="https://www.datocms-assets.com/103104/1688000309-ss_thumbnail.png"
                    alt="SnapSave thumbnail "
                    title="SnapSave thumbnail "
                  />
                </div>
                <div className="project-text">
                  <div className="project-title">
                    A Spending Tool Designed for College Students
                  </div>
                  <div className="project-subtitle">SnapSave, 2023</div>
                  <div className="project-description module line-clamp">
                    Mobile app designed to help college students visualize their
                    purchase histories and improve spending patterns.
                  </div>
                  <div className="project-skills">
                    user research, wireframing, usability testing, prototyping,
                    interface design
                  </div>
                  <button className="project-button mobile-gone">
                    View Project
                  </button>
                </div>
              </Link>
            </div>

            {/* These should / could be replaced by a forEach datoCMS algo */}

            <div className="project-wrapper fade-in">
              <Link className="project-content" to="/project-firebird">
                <div className="project-image">
                  <img
                    className="image"
                    src="https://www.datocms-assets.com/103104/1691451054-ff_thumbnail.png"
                    alt="Firebird thumbnail  "
                    title="Firebird thumbnail  "
                  />
                </div>
                <div className="project-text">
                  <div className="project-title">
                    Order-Tracking for a Cannabis Delivery Platform
                  </div>
                  <div className="project-subtitle">
                    Firebird Delivery, 2022
                  </div>
                  <div className="project-description module line-clamp">
                    Designing the order-tracking interface for Canada's first
                    online cannabis delivery service.
                  </div>
                  <div className="project-skills">
                    user research, wireframing, design strategy, prototyping,
                    interface design
                  </div>
                  <button className="project-button mobile-gone">
                    View Project
                  </button>
                </div>
              </Link>
            </div>

            {/* These should / could be replaced by a forEach datoCMS algo */}

            <div className="project-wrapper fade-in">
              <Link className="project-content" to="/project-switchpitch">
                <div className="project-image">
                  <img
                    className="image"
                    src="https://www.datocms-assets.com/103104/1693852028-sp_tentative-web-thumbnail.png"
                    alt="SwitchPitch thumbnail "
                    title="SwitchPitch thumbnail "
                  />
                </div>
                <div className="project-text">
                  <div className="project-title">
                    Improving Platform Onboarding for Large-Scale Enterprises
                  </div>
                  <div className="project-subtitle">SwitchPitch, 2023</div>
                  <div className="project-description module line-clamp">
                    Refreshing the onboarding for SwitchPitch, a platform
                    connecting enterprises to relevant startups and ecosystems.
                  </div>
                  <div className="project-skills">
                    user research, systems design, content design, copywriting,
                    prototyping, interface design
                  </div>
                  <button className="project-button mobile-gone">
                    View Project
                  </button>
                </div>
              </Link>
            </div>
          </section>
        </main>

        <Script
          dangerouslySetInnerHTML={{
            __html: `
            if (typeof projectWrapperArray === 'undefined') {
              // Convert the HTMLCollection returned by getElementsByClassName to an array
              const projectWrapperArray = Array.from(
                document.getElementsByClassName("project-wrapper")
              );
              const projectContentArray = Array.from(
                document.getElementsByClassName("project-content")
              );
              const buttonArray = Array.from(
                document.getElementsByClassName("project-button")
              );
              
              const phoneticSpelling = document.getElementById("phonetic-spelling");
              const firstName = document.getElementById("intro");
              
              function revealName() {
                phoneticSpelling.classList.remove("fadeOutAnimation");
                phoneticSpelling.classList.add("fadeInAnimation");
              }
              
              function concealName() {
                phoneticSpelling.classList.remove("fadeInAnimation");
                phoneticSpelling.classList.add("fadeOutAnimation");
              }
              
              firstName.addEventListener("mouseenter", () => {
                revealName();
              });
              
              firstName.addEventListener("mouseleave", () => {
                concealName();
              });
              
              projectWrapperArray.forEach((project, index) => {
                let mouseMoveFlag = false;
                let mouseEnterFlag = false;
              
                function handleMouseMoveAndEnter() {
                  if (mouseMoveFlag && mouseEnterFlag) {
                    // Execute the desired code when both events occur
                    buttonArray[index].classList.remove("button-exit");
                    buttonArray[index].classList.add("button-reveal");
                    project.classList.remove("backgroundOut");
                    project.classList.add("backgroundIn");
                  }
                }
              
                project.addEventListener("mousemove", () => {
                  mouseMoveFlag = true;
                  handleMouseMoveAndEnter();
                });
              
                project.addEventListener("mouseenter", () => {
                  mouseEnterFlag = true;
                  handleMouseMoveAndEnter();
                });
              
                project.addEventListener("mouseleave", () => {
                  // Reset the flags when the mouse leaves the element
                  mouseMoveFlag = false;
                  mouseEnterFlag = false;
              
                  // Check if the backgroundIn class is present before adding backgroundOut class
                  if (project.classList.contains("backgroundIn")) {
                    buttonArray[index].classList.remove("button-reveal");
                    project.classList.remove("backgroundIn");
                    project.classList.add("backgroundOut");
                    buttonArray[index].classList.add("button-exit");
                  }
              
                });
              });

              
              
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


}}
`,
          }}
        />
      </motion.div>
      <Footer />
    </div>
  );
}

// navColour={colours[navColourIndex]}
//onClick={nextColour}
//where do put nextColour() so that both things can run?
