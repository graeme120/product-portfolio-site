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
        className="broad"
      >
        <div className="project-writeup">
          <img
            id="image-header"
            src="https://www.datocms-assets.com/103104/1688000501-ss_cover.png"
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

        <div className="content--block">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text-2">
              <h2 className="snapsave-h2-style">
                <span>A Painless Way to Review Transactions</span>
              </h2>
              <ul className="big-bullet-points">
                <li>Sort your purchases in 3 quick taps</li>

                <li>Improve spending by identifying problem areas</li>
                <li>
                  Create custom categories that reflect your spending habits
                </li>
              </ul>
            </div>
            <div className="content--half-2">
              <video
                className="content--image-wrapper-full content--iphone-video"
                src="https://www.datocms-assets.com/103104/1687810847-ss_solution1.mov"
                playsInline
                muted
                autoPlay
                loop
              ></video>
            </div>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-2">
              <video
                className="content--image-wrapper-full content--iphone-video"
                src="https://www.datocms-assets.com/103104/1687810863-ss_solution2.mov"
                playsInline
                muted
                autoPlay
                loop
              ></video>
            </div>
            <div className="content--half-text-2">
              <h2 className="snapsave-h2-style">
                <span>Clearly Visualize Your Spending</span>
              </h2>
              <ul className="big-bullet-points">
                <li>View categories as % of total spending</li>

                <li>See how spending breaks down over weeks, months, years</li>

                <li>Develop intuitive insight about spending habits</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text-2">
              <h2 className="snapsave-h2-style">
                <span>Track Purchases Across All Platforms</span>
              </h2>
              <ul className="big-bullet-points">
                <li>
                  Connect multiple payment platforms, including Venmo and Cash
                  App
                </li>

                <li>
                  Stay accountable for money in wallets outside your bank
                  account{" "}
                </li>
              </ul>
            </div>
            <div className="content--half-2">
              <img
                className="content--image-wrapper-full "
                src="https://www.datocms-assets.com/103104/1687811430-ss_solution3.png"
              ></img>
            </div>
          </div>
        </div>
        <div>
          <div className="content--block">
            <div className="content--section-title">DEFINING THE PROBLEM</div>
            <div className="content--main">
              <h2 className="fade-in">
                Students Don’t Like to be Reminded of their Spending
              </h2>
              <img
                className="fade-in content--image-wrapper-full bump-2point5"
                src="https://www.datocms-assets.com/103104/1687461295-ss_tiktok.png"
              ></img>
              <p className="fade-in bump-2point5">
                My interest in this problem stems from a situation i've been in
                more times than I'd like to admit- my friends and I spend
                without hesitation all day, and surprise ourselves when checking
                the damange to our balances. Based on this anecdotal evidence,
                my initial hypothesis was that students spend too much because
                we forget about past purchases. While doing research however, I
                stumbled across an interesting psychological effect that may
                better explain the problem:
              </p>
              <h2 className="bump-2point5 big-quote">
                <strong>
                  <a
                    className="explicit-link"
                    href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/cognitive-overload"
                  >
                    Cognitive Overload:
                  </a>
                </strong>{" "}
                <i>
                  As problems become more complex, they require greater
                  cognitive resources to analyze and solve. This overload can
                  lead to decision paralysis or avoidance of the problem
                  altogether.
                </i>
              </h2>
              <p>
                This insight led me to consider that students may be willfully
                avoiding their transaction history, offering mental peace but
                also causing them to spend more. Therein was the problem- how
                could students improve their spending patterns if they weren’t
                aware of them to begin with?
              </p>
            </div>
          </div>
        </div>
        <div className="content--block" id="grey">
          <div className="content--section-title">PROBLEM</div>
          <div className="content--main">
            <h2 className="fade-in no-padding">
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
            <img
              className="fade-in content--image-wrapper-full no-padding bump-2point5"
              src="https://www.datocms-assets.com/103104/1687461908-ss.gif"
            ></img>
            <h4>
              $37 for every colour of sticky note at Staples... I need this app
              more than anyone!
            </h4>
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
                  <strong> don’t review their purchases,</strong> or even know
                  exactly how much they’ve spent in a given month, citing
                  anxiety as a disuasive factor. Instead, they mostly use their
                  overall balance to gauge whether they’re in a good or bad
                  place financially.
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
            <h2 className="fade-in bump-2point5">
              Existing Platforms Don’t Account for Student Needs
            </h2>
            <img
              className="fade-in content--image-wrapper-full bump-2point5"
              src="https://www.datocms-assets.com/103104/1687463496-ss_competitors.png"
            ></img>
            <p className="fade-in">
              My interviewees also indicated a frustration with other mobile
              saving platforms. I analyzed the most popular budgeting apps to
              understand where they were falling short.
            </p>
            <p>
              In the process, I realized these platforms were{" "}
              <strong>automating user’s spending breakdown,</strong> sorting
              user purchases into predefined categories without the user ever
              having to review them. This allows students to continue avoiding
              their transactions, and in turn, valuable insight.
            </p>
          </div>
        </div>
        <div id="grey">
          <div className="content--block">
            <div className="content--section-title">DESIGN GOALS</div>
            <div className="content--main">
              <h2 className="fade-in">
                I set 3 main design goals for my project, based on my research
                (and limited timeframe)
              </h2>

              <div className="fade-in content--main ">
                <h3>
                  #1: Make sorting purchases <strong>easy and painless.</strong>
                </h3>
                <div className="content--two-columns">
                  <div className="content--half ">
                    <video
                      className="content--image-wrapper-full "
                      src="https://www.datocms-assets.com/103104/1687899230-ss_wireframe1-1.mov"
                      playsInline
                      muted
                      autoPlay
                      loop
                    ></video>
                    <h4>
                      Users can sort ‘purchase cards’ , transactions pulled in
                      from your bank account’s API.
                    </h4>
                  </div>
                  <div className="content--half">
                    <video
                      className="content--image-wrapper-full "
                      src="https://www.datocms-assets.com/103104/1687899237-ss_wireframe1-2.mov"
                      playsInline
                      muted
                      autoPlay
                      loop
                    ></video>
                    <h4>
                      Weekly, monthly and yearly visualization of transactions
                      and spending categories.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="fade-in content--main ">
                <h3>
                  #2: Account for <strong>every</strong> payment platform
                </h3>
                <div className="content--two-columns">
                  <div className="content--half">
                    <video
                      className="content--image-wrapper-full "
                      src="https://www.datocms-assets.com/103104/1687899432-ss_wireframe2-1.mov"
                      playsInline
                      muted
                      autoPlay
                      loop
                    ></video>
                    <h4>
                      Onboarding will prompt the connecting of multiple payment
                      platforms.
                    </h4>
                  </div>
                  <div className="content--half">
                    <video
                      className="content--image-wrapper-full "
                      src="https://www.datocms-assets.com/103104/1687899435-ss_wireframe2-2.mov"
                      playsInline
                      muted
                      autoPlay
                      loop
                    ></video>
                    <h4>
                      Purchase cards support incoming funds and display the
                      source of transaction details.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="fade-in content--main ">
                <h3>
                  #3: Encourage long-term, <strong>habitual</strong> usage
                </h3>
                <div className="content--two-columns">
                  <div className="content--half">
                    <video
                      className="content--image-wrapper-full "
                      src="https://www.datocms-assets.com/103104/1687899447-ss_wireframe3-1.mov"
                      playsInline
                      muted
                      autoPlay
                      loop
                    ></video>
                    <h4>
                      Streak based system that rewards users based on continual
                      usage.
                    </h4>
                  </div>
                  <div className="content--half">
                    <video
                      className="content--image-wrapper-full "
                      src="https://www.datocms-assets.com/103104/1687899454-ss_wireframe3-2.mov"
                      playsInline
                      muted
                      autoPlay
                      loop
                    ></video>
                    <h4>
                      Trophy-based system that game-ifies engagement through
                      intermittent rewards.
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
              I conducted a few usbility testing sessions with my initial
              wireframes, including an A/B test of the habitual-use feature, and
              one round of usability testing for the entire platform with four
              students as participants. These tests led me to a number of
              significant improvements to my design:
            </p>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text">
              <h3 className="snapsave-header-style">
                Users Control the
                <br /> Spending Breakdown
              </h3>
              <ul>
                <li>
                  Usability testing revealed a desire to focus only on relevant
                  purchases, control which transactions are sorted
                </li>

                <li>
                  Sorting page was updated to let users both exclude
                  transactions and log custom ones
                </li>
              </ul>
            </div>
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src="https://www.datocms-assets.com/103104/1687807337-ss_improvement1.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src="https://www.datocms-assets.com/103104/1687807349-ss_improvement2.png"
              ></img>
            </div>
            <div className="content--half-text">
              <h3 className="snapsave-header-style">A Gameified Approach</h3>
              <ul>
                <li>
                  Users responded better to a rewards system than a streak-based
                  feature
                </li>

                <li>
                  ‘Trophies’ added to reward users based on money saved,
                  encourage long-term usage
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content--block addition">
          <div className="fade-in content--main content--two-columns content--text-and-image">
            <div className="content--half-text">
              <h3 className="snapsave-header-style">Suggested Labels</h3>
              <ul>
                <li>
                  Suggested purchase labels now appear as buttons when re-naming
                  a purchase
                </li>

                <li>
                  Simplifies the most tedious aspect of the primary user flow{" "}
                </li>
              </ul>
            </div>
            <div className="content--half">
              <img
                className="content--image-wrapper-full"
                src="https://www.datocms-assets.com/103104/1687807376-ss_improvement3.png"
              ></img>
            </div>
          </div>
        </div>
        <div id="grey" className="content--block">
          <div className="content--section-title">FINAL PRODUCT</div>
          <div className="content--main">
            <img
              className="fade-in content--image-wrapper-full"
              src="https://www.datocms-assets.com/103104/1687461270-ss_final-product.png"
            ></img>
            <div className="figma-iframe">
              <iframe
                className="iframe"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcLl9gF4hJGEChgsAv13EJb%2FSnapSave%3Fpage-id%3D476%253A59732%26type%3Ddesign%26node-id%3D476-62145%26viewport%3D778%252C1298%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D476%253A62145%26mode%3Ddesign"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div id="grey" className="content--block">
          <div className="content--section-title">STYLE GUIDE</div>
          <div className="content--main">
            <img
              className="fade-in content--image-wrapper-full black-border"
              src="https://www.datocms-assets.com/103104/1687807638-ss_style-guide.png"
            ></img>
          </div>
        </div>

        <div>
          <div className="content--block">
            <div className="fade-in content--section-title">CONCLUSION</div>
            <div className="content--main">
              <h2 className="fade-in">Takeaways + What I'd Do Differently</h2>
              <p className="fade-in">I'm very proud of</p>
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
                  <h3 className="content--point-title">
                    🎨 Every Design Decision Should Improve the Product**
                  </h3>
                  <p>
                    Coming from a graphic design background, it can be easy to
                    get wrapped up in aesthetics, which ultimately distracts
                    from the end goal. Throughout this project, I had to
                    constantly put myself in the position of the user to remind
                    myself what would and wouldn’t help the project succeed.
                  </p>
                </div>
              </div>
              <div className="fade-in content--point-section">
                <div className="content--point">
                  <h3 className="content--point-title">
                    🧭 Consider all Possibilities to Solve the Problem
                  </h3>
                  <p>
                    My project was partially guided by my own desire to design a
                    standalone mobile app, which caused me to ignore other
                    possibilities for a design solution that may have been more
                    effective (e.g. a new feature in an existing platform). In
                    future projects, I’d like to invest more time in
                    understanding where the best fit for my solution might be,
                    especially in relation to other products currently on the
                    market.
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
                <Link to="/project-firebird">
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
      </motion.main>
      <Footer />
    </div>
  );
}
