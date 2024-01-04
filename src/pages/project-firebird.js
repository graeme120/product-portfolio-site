import React from "react";
import Layout from "../components/Layout.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";
import { easeInOut, motion } from "framer-motion";
import { Script } from "gatsby";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/project-page.css";

export function Head() {
  return <title>Firebird Delivery | Graeme Mounsey </title>;
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
          <img
            id="image-header"
            src="https://image-gosting.s3.amazonaws.com/ff_images/FF_feature.png"
          ></img>
          <div className="content--block nope">
            <div className="content--main">
              <h1>Firebird Delivery</h1>
              <h2>Order Tracking for a Cannabis Delivery Platform</h2>
              <p className="project-writeup-description">
                In Summer 2022 I interned at Hifyre, an e-commerce company
                powering Canada’s largest cannabis retailers. As a UX intern, I
                was responsible for reviewing our early-stage consumer metrics,
                identifying and prioritizing product goals, and iterating on
                potential design approaches to our beta-stage delivery platform,
                Firebird Delivery.
              </p>
              <div className="content--subdivide">
                <div className="content--subdivision-big">
                  <p>TEAM</p>
                  <p>
                    Andrew Simons - Senior UX designer
                    <br />
                    Graeme Mounsey - UX design intern
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
                    June - August 2022
                    <br />
                    <i>12 Weeks </i>
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
          <div className=" section-divider">
            <div className="sequence-number">01</div>
            <div className="section">OVERVIEW</div>
          </div>

          <div className="content--block nope ">
            <div className="content--section-title-firebird">
              First things first...
            </div>
            <div className="double-image">
              {" "}
              <div
                className="content--main"
                style={{ paddingRight: 5 + "%", width: 60 + "%" }}
              >
                <h2>What is Firebird Delivery?</h2>
                <p>
                  Hifyre is an e-commerce company specializing in cannabis and
                  controlled substances. They manage the e-commerce for Fire &
                  Flower, a major Canadian cannabis retailer, and its
                  subsidiaries.
                </p>

                <p>
                  In Q2 of 2022, Hifyre launched the beta version of Firebird
                  Delivery- Canada’s first online cannabis delivery service. The
                  beta release allowed Hifyre to gather consumer data and refine
                  the platform before its nationwide release.
                </p>
              </div>
              <div
                className="image-container version"
                style={{ width: 65 + "%" }}
              >
                <img
                  className=" content--image-wrapper-full bump-2point5 bb"
                  src="https://image-gosting.s3.amazonaws.com/ff_images/FF_example.png"
                  alt="Screen from Firebirddelivery.ca"
                  title="Screen from Firebirddelivery.ca"
                ></img>
              </div>
            </div>
          </div>

          <div className="content--block ">
            <div className="content--section-title-firebird">
              The Initial Problem
            </div>
            <div className="content--main ">
              <h2>Our Order Tracking Feature wasn’t… Delivering. </h2>
              <div className="double-image">
                <div className="image-container version ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_old-delivery-1.png"
                    alt="Original design of Firebird's order-tracking screen"
                    title="Original design of Firebird's order-tracking screen"
                  ></img>
                </div>
                <div className="image-container version ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_old-delivery-2.png"
                    alt="Original design of Firebird's order-tracking screen"
                    title="Original design of Firebird's order-tracking screen"
                  ></img>
                </div>
              </div>

              <p>
                Since Firebird was in its beta-release stage, many core features
                lacked refinement. Our order-tracking page was arguably the
                worst offender- focus on the product team had been on shopping
                functionality, leaving the order-tracking page as a
                debug-looking screen for our back-end team to reference.
              </p>
            </div>
          </div>

          <div></div>
          <div className="content--block" id="grey">
            <div className="content--section-title-firebird">
              Stakeholder Meeting
            </div>
            <div className="content--main">
              <h2 className=" ">Getting the Platform from Beta → Gold</h2>
              <p className=" ">
                My internship began with a lengthy stakeholder meeting between
                the product team, Hifyre’s leadership and executives from Fire &
                Flower. Here, they outlined their growth strategy and
                big-picture priorities for product development. Here were the
                key takeaways:
              </p>
              <div className="  content--point-section">
                <img
                  className="content--point-icon-gif"
                  src="https://image-gosting.s3.amazonaws.com/ff_images/Principle2.gif"
                  alt="Iphone icon"
                  title="Iphone icon"
                ></img>

                <div className="content--point">
                  <h3 className="content--point-title">Emphasizing Speed</h3>
                  <p>
                    Firebird’s slogan is ‘Fast as F’, as a major selling point
                    of the platform is its timeliness in comparison to other
                    methods of purchasing cannabis. Wherever possible,
                    stakeholders wanted the platform to communicate{" "}
                    <strong>speed and efficiency</strong> to the user.
                  </p>
                </div>
              </div>

              <div className="  content--point-section">
                <img
                  className="content--point-icon-gif"
                  src="https://image-gosting.s3.amazonaws.com/ff_images/Principle3.gif"
                  alt="Coins icon"
                  title="Coins icon"
                ></img>

                <div className="content--point">
                  <h3 className="content--point-title">
                    Controlled Substances and Transparency{" "}
                  </h3>
                  <p>
                    In Canada, cannabis is only a recently-legalized controlled
                    substance, and a large portion of the emerging market were
                    not previously cannabis users. With this in mind, we needed
                    to be mindful of consumer concerns over safe handling, and
                    wherever possible, default to giving the user
                    <strong> more information</strong> than necessary.
                  </p>
                </div>
              </div>
              <div className="  content--point-section">
                <img
                  className="content--point-icon-gif"
                  src="https://image-gosting.s3.amazonaws.com/ff_images/Principle1.gif"
                  alt="One of our most reliable delivery guys"
                  title="One of our most reliable delivery guys"
                ></img>
                <div className="content--point">
                  <h3 className="content--point-title">
                    End-to-end Customer Journey
                  </h3>
                  <p>
                    Our stakeholders’ highest priority was fully developing the
                    core user journey from end-to-end, which meant our priority
                    was in building out <strong>new features</strong> over
                    refining existing ones. For the product team, this meant a
                    focus on checkout, payment processing, delivery and user
                    feedback functionality.
                  </p>
                </div>
              </div>
              <p className=" ">
                This meeting helped me understand the business goals we wanted
                to achieve with the product as a whole, but to address user
                needs more specifically, I reviewed the analytics we had
                gathered from our beta release.
              </p>
            </div>
          </div>

          <div className=" section-divider" style={{ marginTop: 0 + "%" }}>
            <div className="sequence-number">02</div>
            <div className="section">RESEARCH</div>
          </div>

          <div className="content--block nope">
            <div className="content--section-title-firebird">
              Reviewing Firebird Metrics
            </div>
            <div className="content--main ">
              <h2>
                Consumers are Into Delivery- Our Job is Simply to Make it More
                Convenient
              </h2>

              <div className="three-statistics">
                <div className="statistic">
                  <h3 className="statistic-number">23%</h3>
                  <p>
                    <i>
                      of total revenue generated
                      <br /> from delivery
                    </i>
                  </p>
                </div>
                <div className="statistic">
                  <h3 className="statistic-number">42%</h3>
                  <p>
                    <i>
                      customer retention rate <br />
                      for delivery
                    </i>
                  </p>
                </div>
                <div className="statistic">
                  <h3 className="statistic-number">+$12.27</h3>
                  <p>
                    <i>
                      spent on average per delivery <br />
                      (compared to in-store)
                    </i>
                  </p>
                </div>
              </div>
              <p>
                Metrics from, Hifyre IQ, our consumer analytics platform,
                confirmed that our customers were clear on Firebird’s value
                proposition, meaning that our focus should be{" "}
                <strong>improving the experience</strong> for our existing
                users, rather than searching for new markets. User data, along
                with qualitative feedback left on item review pages helped
                identify pain points that needed our attention the most:
              </p>
            </div>
          </div>

          <div className="content--block ">
            <div className="content--main ">
              <div className="content--section-title-firebird">Problem #1</div>
              <h3>Lack of Awareness about Order-Tracking</h3>
              <p>
                Research also revealed a <strong>48% drop-off</strong> between
                users who ordered delivery and those who actually used the
                order-tracking feature. Numerous reviews expressed a desire for
                order-tracking.. a feature we already had😭
              </p>
              <div className="double-image bump-2point5">
                <div className="image-container bump-2point5">
                  <img
                    className=" content--image-wrapper-full bump-2point5 "
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_insights.png"
                    alt="Chart of Firebird Delivery Orders vs Tracked Orders"
                    title="Chart of Firebird Delivery Orders vs Tracked Orders"
                  ></img>
                </div>
                <div className="column">
                  <div className="image-container ">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/FF_comments1.png"
                      alt="User feedback from Firebird item reviews"
                      title="User feedback from Firebird item reviews"
                    ></img>
                  </div>
                  <div className="image-container ">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/FF_comments2.png"
                      alt="User feedback from Firebird item reviews"
                      title="User feedback from Firebird item reviews"
                    ></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="content--main ">
              <div className="content--section-title-firebird">Problem #2</div>
              <h3>Confusion about Delivery Confirmation</h3>
              <p>
                We also noticed a number of reviews that expressed frustration
                over a lack of alert about their delivery arriving. Although our
                tracking page would update automatically, no explicit alert
                would be given to the user.
              </p>
              <div className="double-image">
                <div
                  className="image-container"
                  style={{ marginRight: 2.5 + "vw" }}
                >
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_comments3.png"
                    alt="User feedback from Firebird item reviews"
                    title="User feedback from Firebird item reviews"
                  ></img>
                </div>
                <div className="image-container">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_comments4.png"
                    alt="User feedback from Firebird item reviews"
                    title="User feedback from Firebird item reviews"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="content--block " id="grey">
            <div className="content--section-title bigger">How might we...</div>
            <div className="content--main">
              <h1 className="  no-padding">
                Make order-tracking for deliveries obvious, transparent and
                straightforward?
              </h1>
            </div>
          </div>

          <div className="content--block nope ">
            <div className="content--section-title-firebird">
              Insights from Relevant UXR Studies
            </div>
            <div className="content--main ">
              <h2>Visibility is Crucial in Service-Related Interfaces</h2>
              <p>
                To understand the current landscape of existing order-tracking
                interfaces, I read through a number of UXR studies around
                food-delivery apps. These studies highlighted the importance of
                transparent communication when designing for service-related
                interfaces such as delivery, here were my key takeaways:
              </p>

              <div className="content--sub-block">
                <div
                  className="three-statistics"
                  style={{ boxSizing: "border-box" }}
                >
                  <div className="double-image stats">
                    <div className="image-container-stats">
                      <a
                        href="https://baymard.com/research/online-food-delivery"
                        target="_blank"
                      >
                        <img
                          className="icon-img"
                          src="https://image-gosting.s3.amazonaws.com/ff_images/file2.svg"
                        ></img>
                      </a>
                    </div>
                    <div className="text-container">
                      <h3>1 / Comprehensive Progress Updates</h3>
                      <p>
                        Order tracking platforms should clearly communicate all
                        order updates to users, but ensure the most recent
                        update is prioritized.
                      </p>
                    </div>
                  </div>

                  <div className="double-image stats">
                    <div className="image-container-stats">
                      <a
                        href="https://www.nngroup.com/articles/status-tracker-progress-update/"
                        target="_blank"
                      >
                        <img
                          className="icon-img"
                          src="https://image-gosting.s3.amazonaws.com/ff_images/file2.svg"
                        ></img>
                      </a>
                    </div>
                    <div className="text-container">
                      <h3>2 / Consistency Across Update Messages</h3>
                      <p>
                        Update messages sent across multiple channels should
                        present both the same information and amount of
                        information, refrain from making one source more
                        reliable than another.
                      </p>
                    </div>
                  </div>
                  <div className="double-image stats">
                    <div className="image-container-stats">
                      <a
                        href="https://www.businesswire.com/news/home/20220420005141/en/Verte-Research-Reveals-Consumers-Are-Obsessed-With-Order-Tracking-Visibility"
                        target="_blank"
                      >
                        <img
                          className="icon-img"
                          src="https://image-gosting.s3.amazonaws.com/ff_images/file2.svg"
                        ></img>
                      </a>
                    </div>
                    <div className="text-container">
                      <h3>3 / Keep the User in Control</h3>
                      <p>
                        Any screen pertaining to user’s order and delivery
                        should include options to manage/modify delivery
                        details, in order to keep user in control of the
                        delivery at every stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content--sub-block">
                <div className="content--section-title-firebird for-h3">
                  Competitive Analysis
                </div>
                <h3>Different Approaches + Use Cases for Order-Tracking</h3>
                <p>
                  I also conducted a competitive analysis of four delivery
                  platforms to understand how they approached order-tracking.
                  Each platform provides delivery for a different kind of
                  product, and emphasizes platform usage through different value
                  propositions. To start, I broke down these differences and
                  compared them to our goals for Firebird.
                </p>
                <div className="image-container ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_competitive-analysis.png"
                    alt="Competitive analysis of similar delivery platforms"
                    title="Competitive analysis of similar delivery platforms"
                  ></img>
                </div>
                <h3>Competitive Audit</h3>
                <p>
                  With the platform differences outlined, I began auditing the
                  order-tracking functionality of each platform.* My goal with
                  this audit was to understand how the UI of our competitor
                  platforms supported the company’s product values, taking note
                  of solutions that could be applied to Firebird.{" "}
                </p>
                <div
                  className="double-image"
                  style={{ paddingBottom: 2.5 + "%" }}
                >
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/FF_audit-4.png"
                      alt="Domino's web-based order-tracking screen"
                      title="Domino's web-based order-tracking screen"
                    ></img>
                  </div>
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/FF_audit-2.png"
                      alt="Uber Eat's web-based order-tracking screen"
                      title="Uber Eat's web-based order-tracking screen"
                    ></img>
                  </div>

                  <div className="image-container version ">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/FF_audit-1.png"
                      alt="Amazon Prime's web-based order-tracking screen"
                      title="Amazon Prime's web-based order-tracking screen"
                    ></img>
                  </div>
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/FF_audit-3.png"
                      alt="Drizly's web-based order-tracking screen"
                      title="Drizly's web-based order-tracking screen"
                    ></img>
                  </div>
                </div>
                <h4>
                  *Although Firebird is web-only, both mobile and web versions
                  of each platform were audited to fully understand each
                  platform’s design strategy
                </h4>
              </div>
            </div>
          </div>

          <div className="content--block">
            <h3>We found that...</h3>
            <div
              className="double-image"
              style={{ justifyContent: "space-between" }}
            >
              <h2
                style={{
                  width: 40 + "%",
                  paddingRight: 2.5 + "%",
                  paddingBottom: 0 + "%",
                  fontFamily: "Calibre Regular",
                }}
              >
                All major delivery platforms rely on mobile notifications to
                update users on delivery progress
              </h2>
              <img
                style={{
                  paddingBottom: 2.5 + "%",
                  width: 5 + "%",
                  paddingRight: 5 + "%",
                }}
                className="arrow"
                src="https://image-gosting.s3.amazonaws.com/product-portfolio-site/right-arrow.svg"
                alt="arrow"
                title="arrow"
              ></img>
              <h2
                style={{
                  width: 40 + "%",
                  paddingBottom: 0 + "%",
                  fontFamily: "Calibre Regular",
                }}
              >
                Since Firebird is web-based, we must{" "}
                <strong> leverage email updates </strong> to keep users in the
                loop.
              </h2>
            </div>
          </div>

          <div>
            <div className="content--block" id="grey">
              <div className="content--section-title-firebird">
                Reflecting on Research{" "}
              </div>
              <div className="content--main ">
                <h2>Guiding Questions for Product Ideation</h2>
                <p>
                  In the competitive audit done during the research phase, I
                  kept the following questions in mind when reviewing each
                  platform’s order-tracking interface. Beginning the ideation
                  phase, I referred back to those same questions to ensure my
                  final designs aligned well with the project’s goals, as well
                  as our big-picture product strategy.
                </p>
                <div className="double-image">
                  <div>
                    <p className="guiding-question">
                      What can I learn by scanning the order-tracking page?
                    </p>
                    <p>✅ EASE OF USE </p>
                  </div>
                  <div>
                    <p className="guiding-question">
                      How do I receive progress updates about my order?
                    </p>
                    <p>🧿 TRANSPARENCY</p>
                  </div>
                  <div>
                    <p className="guiding-question">
                      How am I informed that my order has been delivered?
                    </p>
                    <p>🔒 AWARENESS , SECURITY </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" section-divider" style={{ marginTop: 0 + "%" }}>
            <div className="sequence-number">03</div>
            <div className="section">IDEATION</div>
          </div>
          <div>
            <div className="content--block  nope">
              <div className="content--section-title-firebird">
                Iterating + Prototyping
              </div>
              <div className="content--main">
                <p className="final-sentence">
                  Based on these questions, I generated ideas in three separate
                  ‘buckets’, exploring a range of approaches to answer each
                  question. For the first bucket, I iterated on a number of
                  order-tracking displays that put emphasis on different
                  information we could provide the user, evaluating each
                  version’s pros and cons.
                </p>
                <h2
                  style={{
                    fontFamily: "Calibre Regular",
                  }}
                >
                  Bucket 1- Main Screen Display
                </h2>

                <div className="version-pro-con">
                  <h3>V1 - Map dominant</h3>

                  <div className="version-container">
                    <div className="image-container version">
                      <img
                        className=" content--image-wrapper-full bump-2point5"
                        src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket1_2.png"
                        alt="V1 - Map dominant"
                        title="V1 - Map dominant"
                      ></img>
                    </div>
                    <div className="pro-con">
                      {" "}
                      <div className="pros">
                        <h5>PROS</h5>
                        <ul>
                          <li>
                            Emphasizes delivery period and correct address
                            confirmation
                          </li>
                          <li>Quickly scannable</li>
                        </ul>
                      </div>
                      <div className="cons">
                        <h5>CONS</h5>
                        <ul>
                          <li>
                            Delivery management button and update history are
                            not readily available
                          </li>
                          <li>
                            Map feature doesn’t show distance between customer
                            and delivery
                          </li>
                          <li>Lots of empty / unused space</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="version-pro-con">
                  <h3>✅ V2 - No map, modular approach</h3>
                  <div className="version-container">
                    <div className="image-container version">
                      <img
                        className=" content--image-wrapper-full bump-2point5"
                        src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket1_4.png"
                        alt="V2 - No map, modular approach"
                        title="V2 - No map, modular approach"
                      ></img>
                    </div>
                    <div className="pro-con">
                      {" "}
                      <div className="pros">
                        <h5>PROS</h5>
                        <ul>
                          <li>
                            Delivery status & expected time are most explicit
                          </li>
                          <li>
                            Order, delivery and status are scannable without any
                            interaction{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="cons">
                        <h5>CONS</h5>
                        <ul>
                          <li>
                            No map functionality (extra confirmation of correct
                            address)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="version-pro-con ">
                  <h3>V3 - Map with info modules</h3>
                  <div className="version-container">
                    <div className="image-container version">
                      <img
                        className=" content--image-wrapper-full bump-2point5"
                        src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket1_3.png"
                        alt="V3 - Map with info modules"
                        title="V3 - Map with info modules"
                      ></img>
                    </div>
                    <div className="pro-con">
                      {" "}
                      <div className="pros">
                        <h5>PROS</h5>
                        <ul>
                          <li>
                            Emphasizes correct address confirmation and expected
                            delivery period
                          </li>
                          <li>Status is clearly visible</li>
                        </ul>
                      </div>
                      <div className="cons">
                        <h5>CONS</h5>
                        <ul>
                          <li>Lots of space given to delivery map</li>
                          <li>Provides the least amount of information</li>
                          <li>
                            Map feature doesn’t show distance between customer
                            and delivery
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="version-pro-con">
                  <h3>V4 - Map / status dominant</h3>
                  <div className="version-container ">
                    <div className="image-container version">
                      <img
                        className=" content--image-wrapper-full bump-2point5"
                        src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket1_1.png"
                        alt="V4 - Map / status dominant"
                        title="V4 - Map / status dominant"
                      ></img>
                    </div>
                    <div className="pro-con ">
                      <div className="pros">
                        <h5>PROS</h5>
                        <ul>
                          <li>
                            Delivery status & expected time are most explicit
                          </li>
                          <li>
                            Emphasizes correct delivery address confirmation
                          </li>
                        </ul>
                      </div>
                      <div className="cons">
                        <h5>CONS</h5>
                        <ul>
                          <li>
                            No explicit link to order details or button to
                            manage delivery
                          </li>
                          <li>
                            Map feature doesn’t show distance between customer
                            and delivery
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="final-sentence">
                  V2 gave the user the most information possible from a quick
                  scan, which aligned best with our goals of speed and
                  transparency.
                </p>
              </div>
            </div>
          </div>

          <div className="content--block addition nope " id="grey">
            <div className="content--main ">
              <h2
                style={{
                  fontFamily: "Calibre Regular",
                  paddingTop: 2.5 + "%",
                }}
              >
                Bucket 2- Status Updates{" "}
              </h2>
              <div className="double-image">
                <div
                  className="version-pro-con"
                  style={{ paddingRight: 5 + "%" }}
                >
                  <h3>V1</h3>
                  <div className="version-container">
                    <div className="double-image">
                      <div className="image-container-long version">
                        <img
                          className="too-long"
                          src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket2_1.png"
                          alt="Original design of Firebird's order-tracking screen"
                          title="Original design of Firebird's order-tracking screen"
                        ></img>
                      </div>
                      <div className="pro-con">
                        <div className="pros">
                          <h5>PROS</h5>
                          <ul>
                            <li>Expected delivery date is emphasized</li>
                            <li>Information mirrors order tracking page</li>
                          </ul>
                        </div>
                        <div className="cons">
                          <h5>CONS</h5>
                          <ul>
                            <li>
                              Track order button isn't immediately viewable on
                              mobile
                            </li>
                            <li>
                              Menu bar is prioritized more than central CTA
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="version-pro-con">
                  <h3>V2</h3>
                  <div className="version-container">
                    <div className="double-image">
                      <div className="image-container-long version">
                        <img
                          className="too-long"
                          src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket2_2.png"
                          alt="Original design of Firebird's order-tracking screen"
                          title="Original design of Firebird's order-tracking screen"
                        ></img>
                      </div>
                      <div className="pro-con">
                        {" "}
                        <div className="pros">
                          <h5>PROS</h5>
                          <ul>
                            <li>
                              Delivery date and track order CTA are prioritized
                            </li>
                            <li>Information matches order tracking page</li>
                          </ul>
                        </div>
                        <div className="cons">
                          <h5>CONS</h5>
                          <ul>
                            <li>
                              Top section is cluttered with both menu and track
                              order button
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="double-image bump-2point5">
                <div
                  className="version-pro-con"
                  style={{ marginRight: 7.5 + "%" }}
                >
                  <h3>✅V3</h3>
                  <div className="version-container">
                    <div className="double-image">
                      <div className="image-container-long version">
                        <img
                          className="too-long"
                          src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket2_3.png"
                          alt="Original design of Firebird's order-tracking screen"
                          title="Original design of Firebird's order-tracking screen"
                        ></img>
                      </div>
                      <div className="pro-con">
                        {" "}
                        <div className="pros">
                          <h5>PROS</h5>
                          <ul>
                            <li>
                              Delivery date and track order CTA are prioritized
                            </li>
                            <li>Information matches order tracking page</li>
                          </ul>
                        </div>
                        <div className="cons">
                          <h5>CONS</h5>
                          <ul>
                            <li>Manage order button is somewhat hidden</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="version-pro-con">
                  <h3>V4</h3>
                  <div className="version-container">
                    <div className="double-image">
                      <div className="image-container-long version bump-2point5">
                        <img
                          className="too-long"
                          src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket2_4.png"
                          alt="Original design of Firebird's order-tracking screen"
                          title="Original design of Firebird's order-tracking screen"
                        ></img>
                      </div>
                      <div className="pro-con">
                        {" "}
                        <div className="pros">
                          <h5>PROS</h5>
                          <ul>
                            <li>Expected arrival date is clearly visible</li>
                            <li>
                              User incentivized to scan / confirm order before
                              leaving the page
                            </li>
                          </ul>
                        </div>
                        <div className="cons">
                          <h5>CONS</h5>
                          <ul>
                            <li>
                              Prioritizing delivery details over order details
                              could potentially be less helpful
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="final-sentence">
                V3 was chosen because it best highlighted both the CTA and order
                information most relevant to the user.
              </p>
            </div>
          </div>

          <div className="content--block addition nope">
            <div className="content--main ">
              <h2
                style={{
                  fontFamily: "Calibre Regular",
                  paddingTop: 2.5 + "%",
                }}
              >
                Bucket 3- Delivery Confirmation{" "}
              </h2>

              <div className="version-pro-con ">
                <h3>✅ V1 - Tracking page visual cues</h3>
                <div className="version-container ">
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full "
                      src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket3_1.png"
                      alt="V1 - Tracking page visual cues"
                      title="V1 - Tracking page visual cues"
                    ></img>
                  </div>
                  <div className="pro-con  ">
                    {" "}
                    <div className="pros">
                      <h5>PROS</h5>
                      <ul>
                        <li>Headline clearly displays delivered status</li>
                        <li>Colour palette communicates success in delivery</li>
                      </ul>
                    </div>
                    <div className="cons">
                      <h5>CONS</h5>
                      <ul>
                        <li>No tangible proof (e.g. photo) of delivery</li>
                        <li>User must revisit tracking page to see update</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="version-pro-con ">
                <h3>V2 - Past orders redirection</h3>
                <div className="version-container">
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket3_2.png"
                      alt="V2 - Past orders redirection"
                      title="V2 - Past orders redirection"
                    ></img>
                  </div>

                  <div className="pro-con ">
                    <div className="pros">
                      <h5>PROS</h5>
                      <ul>
                        <li>Implies delivery of the order to user</li>
                      </ul>
                    </div>
                    <div className="cons">
                      <h5>CONS</h5>
                      <ul>
                        <li>Could be confusing or misleading </li>
                        <li>
                          Doesn’t match the narrative built out by the status
                          bar
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="version-pro-con">
                <h3>✅ V3 - Email Alert with photo evidence</h3>
                <div
                  className="double-image"
                  style={{ paddingBottom: 2.5 + "%", paddingTop: 2.5 + "%" }}
                >
                  <div style={{ width: 25 + "%" }}>
                    <img
                      className="content--image-wrapper-full version"
                      src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket3_3.png"
                      alt="Email Alert with photo evidence"
                      title="Email Alert with photo evidence"
                    ></img>
                  </div>
                  <div className="pro-con">
                    {" "}
                    <div className="pros">
                      <h5>PROS</h5>
                      <ul>
                        <li>Explicitly alerts the user of order’s delivery</li>
                        <li>Provides solid proof of delivery</li>
                      </ul>
                    </div>
                    <div className="cons">
                      <h5>CONS</h5>
                      <ul>
                        <li>Track order button could be confusing here</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="version-pro-con">
                  <h3>V4 - Visual cues + photo evidence</h3>
                  <div
                    className="double-image"
                    style={{ paddingBottom: 2.5 + "%", paddingTop: 2.5 + "%" }}
                  >
                    <div style={{ width: 25 + "%" }}>
                      <img
                        className=" content--image-wrapper-full "
                        src="https://image-gosting.s3.amazonaws.com/ff_images/bucket-iterations/Bucket3_3.png"
                        alt="V4 - Visual cues + photo evidence"
                        title="V4 - Visual cues + photo evidence"
                      ></img>
                    </div>
                    <div className="pro-con">
                      {" "}
                      <div className="pros">
                        <h5>PROS</h5>
                        <ul>
                          <li>Visually communicates order delivery</li>
                          <li>Tangible proof of delivery</li>
                        </ul>
                      </div>
                      <div className="cons">
                        <h5>CONS</h5>
                        <ul>
                          <li>Space is underutilized in bottom section</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In the end, we decided to go with both the email update and
                  tracking page update. Together, they gave the most amount of
                  information as quickly as possible without interfering with
                  each other.
                </p>
              </div>
            </div>
          </div>
          <div className="content--block ">
            <div className="content--main double-image ">
              <div
                className="double-image"
                style={{ width: 100 + "%", paddingRight: 5 + "%" }}
              >
                <div style={{ paddingRight: 7.5 + "%" }}>
                  <h2>Mobile Prototyping</h2>
                  <p>
                    Since our solution depended so heavily on email updates, it
                    was clear that the tracking page had to be responsive to
                    mobile devices, for users who opened email updates from
                    their phones.
                  </p>
                </div>

                <div className="image-container ">
                  <img
                    className=" content--image-wrapper-full bump-2point5 "
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_mobile2.png"
                    alt="Email update on mobile"
                    title="Email update on mobile"
                  ></img>
                </div>
                {/* <img
                style={{
                  paddingBottom: 2.5 + "%",
                  width: 5 + "%",
                  marginRight: 2.5 + "%",
                  marginLeft: 2.5 + "%",
                }}
                className="arrow"
                src="https://www.datocms-assets.com/103104/1691702469-right-arrow.svg"
                alt="arrow"
                title="arrow"
              ></img> */}
                <div className="image-container ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_mobile1.png"
                    alt="Mobile view of tracking page"
                    title="Mobile view of tracking page"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className=" section-divider" style={{ marginTop: 0 + "%" }}>
            <div className="sequence-number">05</div>
            <div className="section">EXECUTION</div>
          </div>
          <div className="content--block nope  ">
            <div className="content--main ">
              <h2>The Final Product</h2>
              <div className="image-container">
                <img
                  className=" content--image-wrapper-full "
                  src="https://image-gosting.s3.amazonaws.com/ff_images/FF_Final1.png"
                  alt="Final order-tracking screen"
                  title="Final order-tracking screen"
                ></img>
              </div>
              <div className="image-container">
                <img
                  className=" content--image-wrapper-full "
                  src="https://image-gosting.s3.amazonaws.com/ff_images/FF_Final2.png"
                  alt="Final email alert"
                  title="Final email alert"
                ></img>
              </div>
            </div>
          </div>
          <div className="content--block nope ">
            <div className="content--section-title-firebird">
              Impact of my Improvements
            </div>
            <div className="content--main ">
              <h2>92% of Users now Track Their Orders!</h2>
              <p>
                Firebird’s order-tracking page, along with other 2.0 updates,
                were launched at the end of Q2. Since then, we’ve seen a massive
                increase in average delivery basket size and price (
                <strong>+23%</strong> and <strong>+25% </strong>
                respectively). As for order tracking usage,{" "}
                <strong>92% of delivery users</strong> now track their orders, a
                77% increase from our beta launch.
              </p>
              <div className="double-image">
                <div
                  className="image-container"
                  style={{ width: 40 + "%", paddingRight: 5 + "%" }}
                >
                  <img
                    className=" content--image-wrapper-full "
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_results1.png"
                    alt="via Hifyre IQ"
                    title="via Hifyre IQ"
                  ></img>
                </div>
                <div
                  className="image-container"
                  style={{ width: 40 + "%", paddingRight: 5 + "%" }}
                >
                  <img
                    className=" content--image-wrapper-full "
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_results2.png"
                    alt="via Hifyre IQ"
                    title="via Hifyre IQ"
                  ></img>
                </div>
                <div className="image-container" style={{ width: 48.1 + "%" }}>
                  <img
                    className=" content--image-wrapper-full "
                    src="https://image-gosting.s3.amazonaws.com/ff_images/FF_results3.png"
                    alt="via Hifyre IQ"
                    title="via Hifyre IQ"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          <div className="content--block ">
            <div className="content--section-title-firebird">Conclusions</div>
            <div className="content--main ">
              <h2>Next Steps + Takeaways</h2>

              <p>
                Overall, it was an incredible experience to work on my first
                real-world UX project. After the V2 updates had shipped, I
                stayed on with Hifyre through Fall 2022, helping the product
                team incorporate our subsidiary brands into SparkPerks, our
                membership platform,. Here are a few of the things I learned
                during the internship-
              </p>

              <p
                style={{ width: 75 + "%" }}
                className="project-writeup-description"
              >
                <h3>⚖️ Design is a balancing act</h3>
                Working on a real-world project means you're no longer designing
                in a vacuum. Every design decision must account for both
                stakeholder demands and technological restraints, it is in your
                best interest to keep these factors in mind as you iterate.
              </p>
              <p
                style={{ width: 75 + "%" }}
                className="project-writeup-description"
              >
                <h3>🔥🐦 Align your work with the greater product strategy </h3>
                For a product this large, it was important that every design
                decision was in sync with the rest of the platform. Repeatedly
                returning to our product goals as my North star helped me stay
                focused in my design work.
              </p>
              <p
                style={{ width: 75 + "%" }}
                className="project-writeup-description"
              >
                <h3>🧑‍💻 Be mindful of your engineers</h3>
                Without engineers, our product would just be a Figma file!
                Providing detailed notes relating to the feature's front-end
                development was much appreciated by the dev team, and was
                critical in getting a final product that mirrored my initial
                designs.
              </p>
            </div>
          </div>
        </div>

        {/* No Content Below this line, only footer and relevant javascript */}
        {/* <!-- footer, slide deck, next project --> */}
        <div id="grey">
          <div className="content--block content--next-project">
            <div className="fade-in content--main footer">
              {/* <h2>
                Thank you for reading about my project!<br></br> Here it is
                again as a<span> </span>
                <a className="explicit-link" href="">
                  <u>slide-deck.</u>
                </a>
              </h2> */}
              <h3 id="nextProject">
                Next Project →{" "}
                <Link className="explicit-link" to="/project-switchpitch">
                  <u>SwitchPitch</u>
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

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


}
document.getElementById('shareButton').addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Graeme Mounsey | Digital Designer',
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
      </motion.main>
      <Footer />
      <Overlay />
      <div className="overlay" id="overlay">
        <button id="closeButton">Close</button>
        <div className="modal">
          <img src="" alt="Enlarged Image" id="enlargedImage"></img>
          <div className="image-focus-subtitle" id="imageSubtitle"></div>
        </div>
      </div>
    </div>
  );
}
