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
  return <title>SnapSave | Graeme Mounsey </title>;
}

export default function Work() {
  return (
    <div className="scroll-container">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.45, ease: easeInOut }}
        exit={{ opacity: 0 }}
        className="broad"
      >
        <Navbar />
        <div className="project-writeup">
          <div className="image-container">
            <img
              id="image-header"
              src="https://image-gosting.s3.amazonaws.com/ss_images/SS_cover.png"
              alt="Various screens of the mobile app SnapSave"
              title="Various screens of the mobile app SnapSave"
            ></img>
          </div>
          <div className="content--block">
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
        <div className="content--block desktop-gone">
          <h2>
            To read more about this project, please{" "}
            <span id="shareButton" className="explicit-link">
              open this site on desktop!
            </span>
          </h2>
        </div>
        <div className="mobile-gone">
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
                  src="https://image-gosting.s3.amazonaws.com/ss_images/SS_Solution1.mov"
                  alt="Iphone screen showcasing the sorting functionality of SnapSave"
                  title="Iphone screen showcasing the sorting functionality of SnapSave"
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
                  src="https://image-gosting.s3.amazonaws.com/ss_images/SS_Solution2.mov"
                  alt="Iphone screen showcasing the spending-visualization function of SnapSave"
                  title="Iphone screen showcasing the spending-visualization function of SnapSave"
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

                  <li>
                    See how spending breaks down over weeks, months, years
                  </li>

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
                <div className="image-container">
                  <img
                    className="content--image-wrapper-full "
                    src="https://image-gosting.s3.amazonaws.com/ss_images/SS_Solution3.png"
                    alt="Iphone screen showcasing the multi-wallet compatibility of SnapSave"
                    title="Iphone screen showcasing the multi-wallet compatibility of SnapSave"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="content--block ">
              <div className="content--section-title">DEFINING THE PROBLEM</div>
              <div className="content--main ">
                <h2>Students Don’t Like to be Reminded of their Spending</h2>
                <div className="image-container">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://image-gosting.s3.amazonaws.com/ss_images/SS_tiktok.png"
                    alt="Tiktok screenshots of students who've spent more than they planned"
                    title="Tiktok screenshots of students who've spent more than they planned"
                  ></img>
                </div>
                <p className="bump-2point5">
                  My interest in this problem stems from a situation i've been
                  in more times than I'd like to admit- my friends and I spend
                  without hesitation all day, and surprise ourselves when
                  checking the damange to our balances. Based on this anecdotal
                  evidence, my initial hypothesis was that students spend too
                  much because we forget about past purchases. While doing
                  research however, I stumbled across an interesting
                  psychological effect that may better explain the problem:
                </p>
                <div className="big-quote ">
                  <h3>
                    <strong>
                      <a
                        className="explicit-link"
                        href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/cognitive-overload"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Cognitive Overload
                      </a>
                      <br></br>
                    </strong>{" "}
                  </h3>
                  <i>
                    As problems become more complex, they require greater
                    cognitive resources to analyze and solve. This overload can
                    lead to decision paralysis or avoidance of the problem
                    altogether.
                  </i>
                </div>
                <p>
                  This insight led me to consider that students may be
                  <strong> willfully avoiding</strong> their transaction
                  histories, ignoring the facts to allow themselves to spend
                  more. There was the issue- how can students improve their
                  spending patterns if they aren't aware of them to begin with?
                </p>
              </div>
            </div>
          </div>
          <div className="content--block " id="grey">
            <div className="content--section-title">PROBLEM</div>
            <div className="content--main">
              <h2 className="  no-padding">
                How might we help college students better understand their
                spending patterns?
              </h2>
            </div>
          </div>
          <div className="content--block">
            <div className="content--section-title">INTERVIEWS</div>
            <div className="content--main">
              <div className="image-container">
                <img
                  className="content--image-wrapper-full"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/SS_user-interviews.png"
                  alt="Compilation of screenshots from my user interview Zoom calls"
                  title="Compilation of screenshots from my user interview Zoom calls"
                ></img>
              </div>
              <p className="">
                To learn more about student spending habits, I conducted
                interviews with 8 college students actively trying to limit
                their spending. I asked them the questions below to identify
                other roadblocks they’ve encountered while trying to budget.
              </p>

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

              <div className="image-container">
                <img
                  className="  content--image-wrapper-full no-padding bump-2point5"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/SS.gif"
                  alt="Animated GIF of my findings from user interviews"
                  title="Animated GIF of my findings from user interviews"
                ></img>
              </div>
              <h4>
                $37 for every colour of sticky note.. yes I do see the irony.
              </h4>
            </div>
          </div>

          <div className="content--block" id="grey">
            <div className="content--section-title">FINDINGS</div>
            <div className="content--main">
              <h2 className=" ">
                Students are AFRAID of their Transaction History
              </h2>
              <p className=" ">
                My main takeaway from the student interviews was that technology
                plays a huge role in incentivizing students to spend, and
                obscuring student’s true spending patterns. My findings can be
                summarized in three key points:
              </p>
              <div className="  content--point-section">
                <img
                  className="content--point-icon"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/finding_1.svg"
                  alt="Receipt icon"
                  title="Receipt icon"
                ></img>

                <div className="content--point">
                  <h3 className="content--point-title">
                    Fear of Transaction History
                  </h3>
                  <p>
                    An overwhelming majority of students confessed that they
                    <strong> don’t review their purchases,</strong> or even know
                    exactly how much they’ve spent in a given month, citing
                    anxiety as a disuasive factor. Instead, they mostly use
                    their overall balance to gauge whether they’re in a good or
                    bad place financially.
                  </p>
                </div>
              </div>
              <div className="  content--point-section">
                <img
                  className="content--point-icon"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/finding_2.svg"
                  alt="Iphone icon"
                  title="Iphone icon"
                ></img>

                <div className="content--point">
                  <h3 className="content--point-title">
                    Frictionless Payment Services
                  </h3>
                  <p>
                    Students primarily made purchases via Apple Pay or tap-based
                    payments, which they say diminishes the psychological
                    imprint of each purchase, making it easier to{" "}
                    <strong> spend impulsively.</strong>
                  </p>
                </div>
              </div>
              <div className="  content--point-section">
                <img
                  className="content--point-icon"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/finding_3.svg"
                  alt="Coins icon"
                  title="Coins icon"
                ></img>

                <div className="content--point">
                  <h3 className="content--point-title">Alternative Balances</h3>
                  <p>
                    Students possess multiple alternative balances, sources of
                    money outside their main bank account (e.g. Venmo balance).
                    Since these accounts don’t affect their primary balance,
                    students see this as <strong>‘free money’</strong> to spend
                    without consequence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content--block  ">
            <div className="content--section-title">COMPETITOR ANALYSIS</div>
            <div className="content--main">
              <h2 className="bump-2point5">
                Existing Platforms Don’t Account for Student Needs
              </h2>
              <div className="image-container">
                <img
                  className="  content--image-wrapper-full bump-2point5"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/SS_competitors.png"
                  alt="Five existing platforms examined during my competitive audit"
                  title="Five existing platforms examined during my competitive audit"
                ></img>
              </div>
              <p className="">
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
                <h2 className="bump-2point5">
                  I set 3 main design goals for my project, based on my research
                  (and limited timeframe)
                </h2>

                <div className="  content--main ">
                  <h3>
                    #1: Make sorting purchases{" "}
                    <strong>easy and painless.</strong>
                  </h3>
                  <div className="content--two-columns">
                    <div className="content--half ">
                      <video
                        className="content--image-wrapper-full "
                        src="https://image-gosting.s3.amazonaws.com/ss_images/SS_wireframe1.1.mov"
                        alt="Wireframe of sorting mechanism"
                        title="Wireframe of sorting mechanism"
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
                        src="https://image-gosting.s3.amazonaws.com/ss_images/SS_wireframe1.2.mov"
                        alt="Wireframe of spending visualization"
                        title="Wireframe of spending visualization"
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
                <div className="  content--main ">
                  <h3>
                    #2: Account for <strong>every</strong> payment platform
                  </h3>
                  <div className="content--two-columns">
                    <div className="content--half">
                      <video
                        className="content--image-wrapper-full "
                        src="https://image-gosting.s3.amazonaws.com/ss_images/SS_wireframe2.1.mov"
                        alt="Wireframe of platform onboarding"
                        title="Wireframe of platform onboarding"
                        playsInline
                        muted
                        autoPlay
                        loop
                      ></video>
                      <h4>
                        Onboarding will prompt the connecting of multiple
                        payment platforms.
                      </h4>
                    </div>
                    <div className="content--half">
                      <video
                        className="content--image-wrapper-full "
                        src="https://image-gosting.s3.amazonaws.com/ss_images/SS_wireframe2.2.mov"
                        alt="Wireframe of purchase cards"
                        title="Wireframe of purchase cards"
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
                <div className="  content--main ">
                  <h3>
                    #3: Encourage long-term, <strong>habitual</strong> usage
                  </h3>
                  <div className="content--two-columns">
                    <div className="content--half">
                      <video
                        className="content--image-wrapper-full "
                        src="https://image-gosting.s3.amazonaws.com/ss_images/SS_wireframe3.1.mov"
                        alt="Wireframe of streak system functionality"
                        title="Wireframe of streak system functionality"
                        playsInline
                        muted
                        autoPlay
                        loop
                      ></video>
                      <h4>
                        Streak based system that rewards users based on
                        continual usage.
                      </h4>
                    </div>
                    <div className="content--half">
                      <video
                        className="content--image-wrapper-full "
                        src="https://image-gosting.s3.amazonaws.com/ss_images/SS_wireframe3.2.mov"
                        alt="Wireframe of trophy system functionality"
                        title="Wireframe of trophy system functionality"
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
              <h2 className=" ">3 Major Improvements to My Design </h2>
              <p>
                I conducted a few usability testing sessions with my initial
                wireframes, including an A/B test of the habitual-use feature,
                and one round of usability testing for the entire platform with
                four students as participants. These tests led me to a number of
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
                    Usability testing revealed a desire to focus only on
                    relevant purchases, control which transactions are sorted
                  </li>

                  <li>
                    Sorting page was updated to let users both exclude
                    transactions and log custom ones
                  </li>
                </ul>
              </div>
              <div className="content--half">
                <div className="image-container">
                  <img
                    className="content--image-wrapper-full"
                    src="https://image-gosting.s3.amazonaws.com/ss_images/SS_improvement1.png"
                    alt="First major improvement"
                    title="First major improvement"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="content--block addition">
            <div className="fade-in content--main content--two-columns content--text-and-image">
              <div className="content--half">
                <div className="image-container">
                  <img
                    className="content--image-wrapper-full"
                    src="https://image-gosting.s3.amazonaws.com/ss_images/SS_improvement2.png"
                    alt="Second major improvement"
                    title="Second major improvement"
                  ></img>
                </div>
              </div>
              <div className="content--half-text">
                <h3 className="snapsave-header-style">A Gameified Approach</h3>
                <ul>
                  <li>
                    Users responded better to a rewards system than a
                    streak-based feature
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
                    Suggested purchase labels now appear as buttons when
                    re-naming a purchase
                  </li>

                  <li>
                    Simplifies the most tedious aspect of the primary user flow{" "}
                  </li>
                </ul>
              </div>
              <div className="content--half">
                <div className="image-container">
                  <img
                    className="content--image-wrapper-full"
                    src="https://image-gosting.s3.amazonaws.com/ss_images/SS_improvement3.png"
                    alt="third major improvement"
                    title="third major improvement"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div id="grey" className="content--block">
            <div className="content--section-title bump-2point5">
              FINAL PRODUCT
            </div>
            <div className="content--main">
              <div className="image-container">
                <img
                  className="content--image-wrapper-full"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/SS_Final+Product.png"
                  alt="Screenshots of the platform's final version"
                  title="Screenshots of the platform's final version"
                ></img>
              </div>
              <div className="figma-iframe">
                <iframe
                  className="iframe"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcLl9gF4hJGEChgsAv13EJb%2FSnapSave%3Fpage-id%3D476%253A59732%26type%3Ddesign%26node-id%3D476-62109%26viewport%3D660%252C1201%252C0.15%26t%3D7VN9H0RHXZ5Ta0sS-1%26scaling%3Dscale-down%26starting-point-node-id%3D476%253A61863%26mode%3Ddesign"
                  allowFullScreen
                  alt="Interactive Figma prototype"
                  title="Interactive Figma prototype"
                ></iframe>
              </div>
            </div>
            <div className="content--section-title bump-2point5">
              STYLE GUIDE
            </div>
            <div className="content--main">
              <div className="image-container">
                <img
                  className="content--image-wrapper-full black-border"
                  src="https://image-gosting.s3.amazonaws.com/ss_images/SS_style-guide.png"
                  alt="Style Guide"
                  title="Style Guide"
                ></img>
              </div>
            </div>
          </div>

          <div>
            <div className="content--block">
              <div className="content--section-title">CONCLUSION</div>
              <div className="content--main">
                <h2 className="bump-2point5">
                  Takeaways + What I'd Do Differently
                </h2>
                <p className="  ">
                  In designing, iterating, testing and building this platform, I
                  gained so much valuble insight into the process of product
                  design- from start to finish (but are we ever really
                  finished?). Here are a few of the most valuble notes I took
                  from the experience:
                </p>
                <div className="   content--point-section">
                  <div className="content--point">
                    <h3 className="content--point-title">
                      🧪 User Research & Testing is Key
                    </h3>
                    <p>
                      This project challenged me to collect primary data via
                      interviews for the first time, which ended up providing
                      crucial insight into how other platforms were failing to
                      serve our target audience. Identifying patterns across
                      various interviews also helped prioritize feature
                      development, and ensure the product was serving the needs
                      of the largest possible user base.
                    </p>
                  </div>
                </div>
                <div className="   content--point-section">
                  <div className="content--point">
                    <h3 className="content--point-title">
                      🎨 Every Design Decision Should Improve the Product
                    </h3>
                    <p>
                      Coming from a graphic design background, it can be easy to
                      get wrapped up in visuals and appearance, which sometimes
                      distracts from core problem you're trying to solve.
                      Throughout this project, constantly returning to the
                      user's POV helped me kill my darlings and focus only on
                      what would make the product a success.
                    </p>
                  </div>
                </div>
                <div className="   content--point-section">
                  <div className="content--point">
                    <h3 className="content--point-title">
                      🧭 Consider all Possibilities to Solve the Problem
                    </h3>
                    <p>
                      My instructors strongly suggested we design a mobile app
                      as our final project, which caused me to ignore other
                      possibilities for a design solution that may have been
                      more effective (e.g. a new feature in an existing
                      platform). In future projects, I’d like to invest more
                      time in understanding where the best fit for my solution
                      might be, especially in relation to other products
                      currently on the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* No Content Below this line, only footer and relevant javascript */}
        {/* <!-- footer, slide deck, next project --> */}
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
            document.addEventListener('DOMContentLoaded', function() {
              const imageHeader = document.getElementById('image-header');
      
              if (imageHeader) {
                imageHeader.onload = function() {
                  // Once the image has loaded, remove any initial scroll behavior and display the page.
               
                  const mainContent = document.querySelector('.broad');
                  mainContent.style.opacity = 1;
                };
              }
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


} document.getElementById('shareButton').addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Graeme Mounsey | Digital Product Designer',
        text: 'Check out my portfolio',
        url: window.location.href
      });
      console.log('Page shared successfully');
    } catch (error) {
      console.error('Error in sharing:', error);
    }
  } else {
    // Fallback for browsers that do not support the Web Share API
    console.log('Web Share not supported on this browser');
  }
});`,
          }}
        />
        <Footer />
        <Overlay />
      </motion.main>
    </div>
  );
}
