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
import svg1 from "../images/tester-images/svg1.svg";
import svg2 from "../images/tester-images/svg2.svg";
import svg3 from "../images/tester-images/svg3.svg";
import sixteenbynine from "../images/tester-images/16x9.png";
import threebyfour from "../images/tester-images/3x4.png";
import fourbythree from "../images/tester-images/4x3.png";
import threebytwo from "../images/tester-images/3x2.png";

export function Head() {
  return <title>SnapSave | Graeme Mounsey </title>;
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
          <img id="image-header" src={Tester}></img>
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
        <div>
          <div className="content--block">
            <div className="content--section-title">DEFINING THE PROBLEM</div>
            <div className="content--main">
              <h2 className="fade-in">
                Students Don’t Realize How Much They Spend
              </h2>
              <img
                className="fade-in content--image-wrapper-full"
                src="https://www.datocms-assets.com/103104/1687461295-ss_tiktok.png"
              ></img>
              <p className="fade-in">
                My initial hypothesis was that students have trouble budgeting
                because they simply don’t know how much they’re spending in the
                first place.
              </p>
              <p>
                To improve and develop healthier spending habits, students first
                need to understand them.
              </p>
            </div>
          </div>
        </div>
        <div className="content--block" id="grey">
          <div className="content--section-title">PROBLEM</div>
          <div className="content--main">
            <h2 className="fade-in">
              How might we help college students better understand their
              spending patterns?
            </h2>
          </div>
        </div>
        <div className="content--block">
          <div className="content--section-title">INTERVIEWS</div>
          <div className="content--main">
            <img
              className="fade-in content--image-wrapper-full"
              src="https://www.datocms-assets.com/103104/1687462021-ss_user-interviews.png"
            ></img>
            <p className="fade-in">
              To learn more about student spending habits, I conducted
              interviews with 8 college students actively trying to limit their
              spending. I asked them the questions below to identify other
              roadblocks they’ve encountered while trying to budget.
            </p>
            <p>
              <ol start="1">
                <li>
                  Tell me about a time you tried to budget or limit your
                  spending. What steps did you take? What worked and what
                  didn’t?
                </li>
                <li>What kind of spending has been the toughest to limit?</li>
                <li>What motivated you to budget in the first place?</li>
                <li>
                  What methods do you use to pay for things? (card, cash,
                  digital wallet, etc.) Does the method of payment you use
                  affect the feeling of spending?
                </li>
                <li>
                  What apps do you use that involve your spending? In what ways
                  do they influence your spending?
                </li>
              </ol>
            </p>
          </div>
        </div>

        <div className="content--block" id="grey">
          <div className="content--section-title">FINDINGS</div>
          <div className="content--main">
            <h2 className="fade-in">
              Students are AFRAID of their Transaction History
            </h2>
            <p className="fade-in">
              My main takeaway from the student interviews was that technology
              plays a huge role in incentivizing students to spend, and
              obscuring student’s true spending patterns. My findings can be
              summarized in three key points:
            </p>
            <div className="fade-in content--point-section">
              <img className="content--point-icon" src={svg1}></img>
              <div className="content--point">
                <h3 className="content--point-title">
                  Fear of Transaction History
                </h3>
                <p>
                  An overwhelming majority of students confessed that they
                  <b>don’t review their purchases,</b> or even know exactly how
                  much they’ve spent in a given month, citing anxiety as a
                  disuasive factor. Instead, they mostly use their overall
                  balance to gauge whether they’re in a good or bad place
                  financially.
                </p>
              </div>
            </div>
            <div className="fade-in content--point-section">
              <img className="content--point-icon" src={svg2}></img>
              <div className="content--point">
                <h3 className="content--point-title">
                  Frictionless Payment Services
                </h3>
                <p>
                  Students primarily made purchases via Apple Pay or tap-based
                  payments, which they say diminishes the psychological imprint
                  of each purchase, making it easier to spend impulsively.
                </p>
              </div>
            </div>
            <div className="fade-in content--point-section">
              <img className="content--point-icon" src={svg3}></img>
              <div className="content--point">
                <h3 className="content--point-title">Alternative Balances</h3>
                <p>
                  Students possess multiple alternative balances, sources of
                  money outside their main bank account (e.g. Venmo balance).
                  Since these accounts don’t affect their primary balance,
                  students see this as ‘free money’ to spend without
                  consequence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content--block">
          <div className="content--section-title">COMPETITOR ANALYSIS</div>
          <div className="content--main">
            <h2 className="fade-in">
              Existing Platforms Don’t Account for Student Needs
            </h2>
            <img
              className="fade-in content--image-wrapper-full"
              src="https://www.datocms-assets.com/103104/1687463496-ss_competitors.png"
            ></img>
            <p className="fade-in">
              My interviewees also indicated a frustration with other mobile
              saving platforms. I analyzed the most popular budgeting apps to
              understand where they were falling short.
            </p>
            <p>
              In the process, I realized these platforms were automating user’s
              spending breakdown, sorting user purchases into predefined
              categories without the user ever having to review them. This
              allows students to continue avoiding their transactions, and in
              turn, valuable insight.
            </p>
          </div>
        </div>
        <div id="grey">
          <div className="content--block">
            <div className="content--section-title">DESIGN GOALS</div>
            <div className="content--main">
              <p className="fade-in">
                Based on my research, and limited timeframe, I set 3 main design
                goals for my project:
              </p>

              <div className="fade-in content--main ">
                <h3>
                  Make sorting purchases <b>easy and painless.</b>
                </h3>
                <div className="content--two-columns">
                  <div className="content--half">
                    <img
                      className="content--image-wrapper-full"
                      src={threebytwo}
                    ></img>
                    <h4>
                      This is the caption of the image, it is so small and teeny
                      oo aaa
                    </h4>
                  </div>
                  <div className="content--half">
                    <img
                      className="content--image-wrapper-full"
                      src={threebytwo}
                    ></img>
                    <h4>
                      This is the caption of the image, it is so small and teeny
                      oo aaa
                    </h4>
                  </div>
                </div>
              </div>
              <div className="fade-in content--main ">
                <h3>
                  Account for <b>every</b> payment platform
                </h3>
                <div className="content--two-columns">
                  <div className="content--half">
                    <img
                      className="content--image-wrapper-full"
                      src={threebytwo}
                    ></img>
                    <h4>
                      This is the caption of the image, it is so small and teeny
                      oo aaa
                    </h4>
                  </div>
                  <div className="content--half">
                    <img
                      className="content--image-wrapper-full"
                      src={threebytwo}
                    ></img>
                    <h4>
                      This is the caption of the image, it is so small and teeny
                      oo aaa
                    </h4>
                  </div>
                </div>
              </div>
              <div className="fade-in content--main ">
                <h3>Encourage long-term, habitual usage</h3>
                <div className="content--two-columns">
                  <div className="content--half">
                    <img
                      className="content--image-wrapper-full"
                      src={threebytwo}
                    ></img>
                    <h4>
                      This is the caption of the image, it is so small and teeny
                      oo aaa
                    </h4>
                  </div>
                  <div className="content--half">
                    <img
                      className="content--image-wrapper-full"
                      src={threebytwo}
                    ></img>
                    <h4>
                      This is the caption of the image, it is so small and teeny
                      oo aaa
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content--block">
          <div className="content--section-title">TESTING + IMPROVEMENTS</div>
          <div className="content--main">
            <h2 className="fade-in">3 Major Improvements to My Design </h2>
            <p className="fade-in">
              I conducted a few rounds of testing with my initial wireframes,
              including an A/B test of the habitual-use feature, and two rounds
              of usability testing for the entire platform. These tests led me
              to a number of significant improvements to my design:
            </p>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text">
              <h3>Users Control the Spending Breakdown</h3>
              <li>
                Usability testing revealed a desire to focus only on relevant
                purchases, control which transactions are sorted
              </li>
              <li>
                Sorting page was updated to let users both exclude transactions
                and log custom ones
              </li>
            </div>
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src={threebytwo}
              ></img>
            </div>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src={fourbythree}
              ></img>
            </div>
            <div className="content--half-text">
              <h3>A Gameified Approach</h3>
              <li>
                Users responded better to a rewards system than a streak-based
                feature
              </li>
              <li>
                ‘Trophies’ added to reward users based on money saved, encourage
                long-term usage
              </li>
            </div>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text">
              <h3>Suggested Labels</h3>
              <li>
                Suggested purchase labels now appear as buttons when re-naming a
                purchase
              </li>
              <li>
                Simplifies the most tedious aspect of the primary user flow{" "}
              </li>
            </div>
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src={threebytwo}
              ></img>
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
