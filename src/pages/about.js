import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { easeInOut, motion } from "framer-motion";
import "../styles/global.css";
import "../styles/about.css";
import { Link, Script } from "gatsby";

export function Head() {
  return <title>About | Graeme Mounsey</title>;
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
          <div className="about-container">
            <div className="about-text">
              <h3>Hi! My name is Graeme</h3>
              <br />
              <h3>
                I'm a product designer passionate about building tools that
                improve peoples lives. I've held product design roles
              </h3>
              <br />
              <h3>
                I also run{" "}
                <a href="https://ddap.xyz/">Digital Design @ Parsons</a>, a
                student-led group for designers interested in emerging areas of
                digital design. Founded on the core principle of community-led
                design education, we host weekly student-led demos and guest
                speakers.
              </h3>
            </div>
            <div className="about-profile">
              <img
                className="about-headshot"
                src="https://www.datocms-assets.com/99382/1696258250-2023_01.jpg"
              ></img>
            </div>
          </div>
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
