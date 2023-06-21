import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { easeInOut, motion } from "framer-motion";
import "../styles/global.css";
import "../styles/home.css";
import loadable from "@loadable/component";
import { graphql, Link, Script } from "gatsby";
import p5 from "p5";
import Instagram from "../images/tester-images/ig.svg";
import Linkedin from "../images/tester-images/li.svg";
import Tester1 from "../images/tester-images/tester1.png";

const LoadableP5 = loadable(() => import("react-p5-wrapper"), {
  resolveComponent: ({ ReactP5Wrapper }) => ReactP5Wrapper,
});

export function Head() {
  return <title>Graeme Mounsey, Digital Product Designer</title>;
}

// p5.js section in case its needed

export default function Home() {
  // const bodyRef = React.createRef();

  function sketch(p5) {
    p5.setup = () => {};

    p5.draw = () => {};

    p5.windowResized = () => {};
  }

  return (
    <div className="scroll-container">
      <div>
        <Navbar />
      </div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: easeInOut }}
        exit={{ opacity: 0 }}
      >
        <section className="hero">
          <div id="phonetic-spelling">( gray-um )</div>
          <div className="intro1">
            <div id="bump">
              Hi 👋 I’m <span id="intro">Graeme.</span>
            </div>
            <div>
              I design products that make emerging technologies accessible and
              user-friendly.
            </div>
          </div>
          <div className="intro2">
            I’m currently a product design intern at<span> </span>
            <a href="" className="explicit-link">
              SwitchPitch,
            </a>
            <span> </span>
            and a Junior at<span> </span>
            <br className="mobile-gone" />
            <a href="" className="explicit-link">
              Parsons School of Design.
            </a>
          </div>
        </section>
        <section className="work" id="work">
          {/* These should / could be replaced by a forEach datoCMS algo */}

          <div className="project-wrapper fade-in">
            <Link className="project-content" to="/template">
              <div className="project-image">
                <img className="image" src={Tester1} />
              </div>
              <div className="project-text">
                <div className="project-title">SnapSave</div>
                <div className="project-subtitle">UX Bootcamp Final, 2023</div>
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
            <Link className="project-content" to="/template">
              <div className="project-image">
                <img className="image" src={Tester1} />
              </div>
              <div className="project-text">
                <div className="project-title">Firebird Delivery</div>
                <div className="project-subtitle">
                  UX Design Internship, 2022
                </div>
                <div className="project-description module line-clamp">
                  Improving Canada's first cannabis delivery platform. Projects
                  centered around
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
            <Link className="project-content" to="/template">
              <div className="project-image">
                <img className="image" src={Tester1} />
              </div>
              <div className="project-text">
                <div className="project-title">SwitchPitch</div>
                <div className="project-subtitle">
                  UX Design Internship, 2023
                </div>
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
        </section>
        <Footer />

        {/* <div>
              <LoadableP5 sketch={sketch} />
            </div> */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
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
              
                  buttonArray[index].classList.add("button-exit");
                  buttonArray[index].classList.remove("button-reveal");
                  project.classList.remove("backgroundIn");
                  project.classList.add("backgroundOut");
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

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
}`,
          }}
        />
      </motion.main>
    </div>
  );
}

// navColour={colours[navColourIndex]}
//onClick={nextColour}
//where do put nextColour() so that both things can run?
