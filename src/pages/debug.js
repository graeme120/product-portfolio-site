import React from "react";
import Layout from "../components/Layout.js";
import { graphql, Link, Script } from "gatsby";
import Navbar from "../components/Navbar";
import { easeInOut, motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/project-page.css";
import tester3 from "../images/tester-images/tester3.jpeg";
import sixteenbynine from "../images/tester-images/16x9.png";
import threebyfour from "../images/tester-images/3x4.png";
import fourbythree from "../images/tester-images/4x3.png";
import threebytwo from "../images/tester-images/3x2.png";
import svg1 from "../images/tester-images/svg1.svg";
import svg2 from "../images/tester-images/svg2.svg";
import svg3 from "../images/tester-images/svg3.svg";

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
      >
        <div className="project-writeup">
          <img id="image-header" src={tester3}></img>
          <div className="content--block fade-in">
            <div className="content--main">
              <h1>SnapSave</h1>
              <h2>A Spending Tracker Designed for Young People</h2>
              <p className="project-writeup-description">
                I absolutely LOVE 🌱 plants ✨, and was so excited to be the
                primary UX designer for the HerbUX Project, aiming to make
                herbarium data easily accessible to the public online. In this
                ambitious project I was tasked with creating a proposal for a
                new interface rebuilding the plant specimen discovery mechanism
                from the ground up.
              </p>
              <div className="content--subdivide">
                <div className="content--subdivision-big">
                  <p>TEAM</p>
                  <p>
                    Andrew Simons - Senior UX Designer
                    <br />
                    Graeme Mounsey - UX Design Intern
                    <br />
                  </p>
                </div>
                <div className="content--subdivision-medium">
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
        {/* <!-- Section with Picture and Description --> */}
        <div id="grey">
          <div className="content--block">
            <div className="content--section-title">SUBTITLE</div>
            <div className="content--main">
              <h2 className="fade-in">So What the Fuck is a User Research</h2>
              <p className="fade-in">
                As college students, myself and many of my peers are managing
                our finances for the very first time which… comes with a
                learning curve. We are prone to impulse spending, As college
                students, myself and many of my peers are managing our finances
                for the very first time which… comes with a learning curve. We
                are prone to impulse spending,As college students, myself and
                many of my peers are managing our finance As college students,
                myself and many of my peers are managing our finances for the
                very first time which… comes with a learning curve. We are prone
                to impulse spending,
              </p>
              <img
                className="fade-in content--image-wrapper-full"
                src={sixteenbynine}
              ></img>
            </div>
          </div>
        </div>
        {/* <!-- Two by two video or image with title and caption, addition --> */}
        <div className="content--block addition" id="grey">
          <div className="fade-in content--main content--two-columns">
            <div className="content--half">
              <h3>Iteration One</h3>
              <img
                className="content--image-wrapper-full"
                src={threebytwo}
              ></img>
              <h4>
                This is the caption of the image, it is so small and teeny oo
                aaa
              </h4>
            </div>
            <div className="content--half">
              <h3>Iteration Two</h3>
              <img
                className="content--image-wrapper-full"
                src={threebytwo}
              ></img>
              <h4>
                This is the caption of the image, it is so small and teeny oo
                aaa
              </h4>
            </div>
          </div>
        </div>
        {/* <!-- Addition, same as above exept it has bottom padding --> */}
        <div className="content--block addition-bottom" id="grey">
          <div className="fade-in content--main content--two-columns">
            <div className="content--half">
              <h3>Iteration One</h3>
              <img
                className="content--image-wrapper-full"
                src={fourbythree}
              ></img>
              <h4>
                This is the caption of the image, it is so small and teeny oo
                aaa
              </h4>
            </div>
            <div className="content--half">
              <h3>Iteration Two</h3>
              <img
                className="content--image-wrapper-full"
                src={fourbythree}
              ></img>
              <h4>
                This is the caption of the image, it is so small and teeny oo
                aaa
              </h4>
            </div>
          </div>
        </div>
        {/* <!-- The next three make up like a three-feature section --> */}
        {/* <!-- Text and image side by side, text on left side --> */}
        <div className="content--block">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text">
              <h3>Feature One</h3>
              <p>
                This feature is a feature that is really cool and helpful and so
                unique wow omg amazing love
              </p>
            </div>
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src={threebytwo}
              ></img>
            </div>
          </div>
        </div>
        {/* <!-- Text and image side by side, text on right side --> */}
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src={fourbythree}
              ></img>
            </div>
            <div className="content--half-text">
              <h3>Feature One</h3>
              <p>
                This feature is a feature that is really cool and helpful and so
                unique wow omg amazing love
              </p>
            </div>
          </div>
        </div>
        {/* 
       <!-- Text and image side by side, text on left side --> */}
        <div className="content--block addition-bottom">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text">
              <h3>Feature One</h3>
              <p>
                This feature is a feature that is really cool and helpful and so
                unique wow omg amazing love
              </p>
            </div>
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src={fourbythree}
              ></img>
            </div>
          </div>
        </div>
        {/* <!-- Section with Title, text and three 'bullet points', i'd use for pain points / findings? --> */}
        <div id="grey">
          <div className="content--block">
            <div className="content--section-title">SUBTITLE</div>
            <div className="content--main">
              <h2 className="fade-in">Key User Insights</h2>
              <p className="fade-in">
                I found that three main user insights will drive my design
                decisions and that usability research confirmed the analysis
                that. I found that three main user insights will drive my design
                decisions and that usability research confirmed the analysis
                that.
              </p>
              <div className="fade-in content--point-section">
                <img className="content--point-icon" src={svg1}></img>
                <div className="content--point">
                  <h3 className="content--point-title">Point One</h3>
                  <p>
                    Description of the point.As college students, myself and
                    many of my peers are managing our finances for the very
                    first time which… comes with a learning curve.
                  </p>
                </div>
              </div>
              <div className="fade-in content--point-section">
                <img className="content--point-icon" src={svg2}></img>
                <div className="content--point">
                  <h3 className="content--point-title">Point One</h3>
                  <p>
                    Description of the point.As college students, myself and
                    many of my peers are managing our finances for the very
                    first time which… comes with a learning curve.
                  </p>
                </div>
              </div>
              <div className="fade-in content--point-section">
                <img className="content--point-icon" src={svg3}></img>
                <div className="content--point">
                  <h3 className="content--point-title">Point One</h3>
                  <p>
                    Description of the point.As college students, myself and
                    many of my peers are managing our finances for the very
                    first time which… comes with a learning curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section with Title, description and small picture to the right --> */}
        <div id="white">
          <div className="fade-in content--block">
            <div className="content--section-title">SUBTITLE</div>
            <div className="content--main">
              <h2>So What the Fuck is a User Research</h2>
              <div className="content--point-section">
                <div className="content--section-60">
                  <p>
                    As college students, myself and many of my peers are
                    managing our finances for the very first time which… comes
                    with a learning curve. We are prone to impulse spending, As
                    college students, myself and many of my peers are managing
                    our finances for the very first time which… comes with a
                    learning curve.
                  </p>
                </div>
                <div className="content--section-35">
                  <img
                    className="content--image-wrapper-full"
                    src={threebytwo}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section with Title, text and three subject section, no icons, takeaways maybe? --> */}
        <div id="grey">
          <div className="content--block">
            <div className="fade-in content--section-title">SUBTITLE</div>
            <div className="content--main">
              <h2 className="fade-in">Key User Insights</h2>
              <p className="fade-in">
                I found that three main user insights will drive my design
                decisions and that usability research confirmed the analysis
                that. I found that three main user insights will drive my design
                decisions and that usability research confirmed the analysis
                that.
              </p>
              <div className="fade-in content--point-section">
                <div className="content--point">
                  <h3 className="content--point-title">🌊 Point One</h3>
                  <p>
                    Description of the point.As college students, myself and
                    many of my peers are managing our finances for the very
                    first time which… comes with a learning curve.
                  </p>
                </div>
              </div>
              <div className="fade-in content--point-section">
                <div className="content--point">
                  <h3 className="content--point-title">📊 Point One</h3>
                  <p>
                    Description of the point.As college students, myself and
                    many of my peers are managing our finances for the very
                    first time which… comes with a learning curve.
                  </p>
                </div>
              </div>
              <div className="fade-in content--point-section">
                <div className="content--point">
                  <h3 className="content--point-title">✅ Point One</h3>
                  <p>
                    Description of the point.As college students, myself and
                    many of my peers are managing our finances for the very
                    first time which… comes with a learning curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section with Title, text and two bullet point sections, pros & cons ? --> */}
        <div>
          <div className="content--block">
            <div className="content--section-title">SUBTITLE</div>
            <div className="content--main">
              <h2 className="fade-in">Key User Insights</h2>
              <p className="fade-in">
                I found that three main user insights will drive my design
                decisions and that usability research confirmed the analysis
                that. I found that three main user insights will drive my design
                decisions and that usability research confirmed the analysis
                that.
              </p>
              <div className="fade-in content--two-columns">
                <div className="content--half">
                  <h3>Pros</h3>
                  <li className="content--bullet-point">
                    Good enou-u-ugh good enou-u-ugh
                  </li>
                  <li className="content--bullet-point">
                    Good enou-u-ugh good enou-u-ugh
                  </li>
                  <li className="content--bullet-point">
                    Good enou-u-ugh good enou-u-ugh
                  </li>
                </div>
                <div className="content--half">
                  <h3>Cons</h3>
                  <li className="content--bullet-point">
                    Good enou-u-ugh good enou-u-ugh
                  </li>
                  <li className="content--bullet-point">
                    Good enou-u-ugh good enou-u-ugh
                  </li>
                  <li className="content--bullet-point">
                    Good enou-u-ugh good enou-u-ugh
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section with section title, full-width paragraph and image, no headline --> */}
        <div id="white">
          <div className="fade-in content--block">
            <div className="content--section-title">SUBTITLE</div>
            <div className="content--main no-headline">
              <div className="content--point-section">
                <div className="content--section-60 no-headline">
                  <p>
                    As college students, myself and many of my peers are
                    managing our finances for the very first time which… comes
                    with a learning curve. We are prone to impulse spending, As
                    college students, myself and many of my peers are managing
                    our finances for the very first time which… comes with a
                    learning curve.
                  </p>
                </div>
              </div>
              <img
                className="fade-in content--image-wrapper-full"
                src={sixteenbynine}
              ></img>
            </div>
          </div>
        </div>
        {/* <!-- Section with full-width images, no headline --> */}
        <div id="white">
          <div className="fade-in content--block">
            <div className="content--section-title">SUBTITLE</div>
            <div className="content--main no-headline">
              <img
                className="fade-in content--image-wrapper-full"
                src={sixteenbynine}
              ></img>
              <img
                className="fade-in content--image-wrapper-full"
                src={sixteenbynine}
              ></img>
              <img
                className="fade-in content--image-wrapper-full"
                src={sixteenbynine}
              ></img>
            </div>
          </div>
        </div>
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
        />{" "}
      </motion.main>
      <Footer />
    </div>
  );
}
