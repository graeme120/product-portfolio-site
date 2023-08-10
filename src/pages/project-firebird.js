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
            src="https://www.datocms-assets.com/103104/1691451322-ff_feature.png"
          ></img>
          <div className="content--block fade-in">
            <div className="content--main">
              <h1>Firebird Delivery</h1>
              <h2>Order Tracking for a Cannabis Delivery Platform</h2>
              <p className="project-writeup-description">
                In Summer 2022 I interned at Hifyre, an e-commerce company
                powering Canada’s largest cannabis retailers. There, I designed
                the order-tracking interface for their beta-stage cannabis
                delivery platform: Firebird Delivery.
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

        <div className="content--block ">
          <div className="content--section-title">OVERVIEW</div>
          <div className="content--main ">
            <h2>What is Firebird Delivery?</h2>
            <p>
              Fire & Flower is one of the largest recreational cannabis
              retailers in Canada. Hifyre is Fire & Flower’s technology
              development subsidiary, responsible for e-commerce across Fire &
              Flower stores, as well as their 3 subsidiary brands.
            </p>
            <p>
              In Q2 of 2022, Hifyre launched the beta version of Firebird
              Delivery- Canada’s first online cannabis delivery service. The
              service was launched in a few select regions across Canada,
              allowing Hifyre to gather consumer data and refine the platform
              before its nationwide release.
            </p>
            <p>
              As a UX intern, I was responsible for reviewing our early-stage
              consumer metrics, identifying and prioritizing product goals, and
              then iterating on potential design approaches to our
              order-tracking page.
            </p>
          </div>
        </div>

        <div className="content--block ">
          <div className="content--section-title">The Initial Problem</div>
          <div className="content--main ">
            <h2>Our Order Tracking Feature wasn’t… Delivering. </h2>
            <div className="double-image">
              <div className="image-container ">
                <img
                  className=" content--image-wrapper-full bump-2point5"
                  src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
                  alt="Original design of Firebird's order-tracking screen"
                  title="Original design of Firebird's order-tracking screen"
                ></img>
              </div>
              <div className="image-container ">
                <img
                  className=" content--image-wrapper-full bump-2point5"
                  src="https://www.datocms-assets.com/103104/1691510386-ff_old-delivery-2.png"
                  alt="Original design of Firebird's order-tracking screen"
                  title="Original design of Firebird's order-tracking screen"
                ></img>
              </div>
            </div>

            <p>
              Since Firebird was in its beta-release stage, many core features
              lacked refinement and, in some cases, any design consideration at
              all. Our order-tracking page was arguably the worst offender-
              focus on the product team had been on shopping functionality,
              leaving the order-tracking page as essentially a debug screen for
              our back-end team to reference.
            </p>
          </div>
        </div>
        <div className="content--block" id="grey">
          <div className="content--section-title">Stakeholder Meeting</div>
          <div className="content--main">
            <h2 className=" ">Getting the Platform from Beta → Gold</h2>
            <p className=" ">
              My internship began with a lengthy stakeholder meeting between the
              product team, Hifyre’s leadership and executives from Fire &
              Flower. Here, they outlined their growth strategy and big-picture
              priorities for product development. Here were the key takeaways:
            </p>
            <div className="  content--point-section">
              <img
                className="content--point-icon"
                src="https://www.datocms-assets.com/103104/1689702002-finding_1.svg"
                alt="Receipt icon"
                title="Receipt icon"
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
            <div className="  content--point-section">
              <img
                className="content--point-icon"
                src="https://www.datocms-assets.com/103104/1689702004-finding_2.svg"
                alt="Iphone icon"
                title="Iphone icon"
              ></img>

              <div className="content--point">
                <h3 className="content--point-title">Emphasizing Speed</h3>
                <p>
                  Firebird’s slogan is ‘Fast as F’, as a major selling point of
                  the platform is its timeliness in comparison to other methods
                  of purchasing cannabis. Wherever possible, stakeholders wanted
                  the platform to communicate{" "}
                  <strong>speed and efficiency</strong> to the user.
                </p>
              </div>
            </div>
            <div className="  content--point-section">
              <img
                className="content--point-icon"
                src="https://www.datocms-assets.com/103104/1688665448-finding_3.svg"
                alt="Coins icon"
                title="Coins icon"
              ></img>

              <div className="content--point">
                <h3 className="content--point-title">
                  Controlled Substances and Transparency{" "}
                </h3>
                <p>
                  In Canada, cannabis is only a recently-legalized controlled
                  substance, and a large portion of the emerging market were not
                  previously cannabis users. With this in mind, we needed to be
                  mindful of consumer concerns over safe handling, and wherever
                  possible, default to giving the user
                  <strong> more information</strong> than necessary.
                </p>
              </div>
            </div>
            <p className=" ">
              This meeting helped me understand the business goals we wanted to
              achieve with the product as a whole, but to address user needs
              more specifically, I reviewed the analytics we had gathered from
              our beta release.
            </p>
          </div>
        </div>
        <div>
          <div className="content--block ">
            <div className="content--section-title">
              Reviewing Firebird Metrics
            </div>
            <div className="content--main ">
              <h2>
                People Like the Convenience of Delivery- Our Job is Simply to
                Make it More Convenient
              </h2>
              <p>
                Hifyre IQ , our consumer analytics platform, had been gathering
                data since Firebird’s beta launch. Here are some of the most
                relevant findings:
              </p>
              <div className="three-statistics">
                <div className="statistic">
                  <h3 className="statistic-number">23%</h3>
                  <p>of total revenue generated from delivery</p>
                </div>
                <div className="statistic">
                  <h3 className="statistic-number">42%</h3>
                  <p>customer retention rate for delivery</p>
                </div>
                <div className="statistic">
                  <h3 className="statistic-number">+$12.27</h3>
                  <p>
                    more spent on average per delivery{" "}
                    <i>(compared to in-store)</i>
                  </p>
                </div>
              </div>
              <p>
                These metrics confirmed that our customers were clear on
                Firebird’s value proposition, meaning that our focus should be{" "}
                <strong>improving</strong> the experience for our existing
                users, rather than searching for new markets.<br></br>
                <br /> Data from Hifyre IQ, along with qualitative feedback left
                on item review pages helped identify pain points that needed our
                attention the most:
              </p>
            </div>
          </div>
        </div>

        <div className="content--block ">
          <div className="content--section-title for-h3">Pain Point 1</div>

          <div className="content--main ">
            <h3>Lack of Awareness about Order-Tracking</h3>
            <p>
              Research also revealed a <strong>48% drop-off</strong> between
              users who ordered delivery and those who actually used the
              order-tracking feature. Numerous reviews expressed a desire for
              order-tracking.. a feature we already had😭
            </p>
            <div className="double-image bump-2point5">
              <div className="image-container">
                <img
                  className=" content--image-wrapper-full "
                  src="https://www.datocms-assets.com/103104/1691593455-ff_insights.png"
                  alt="Chart of Firebird Delivery Orders vs Tracked Orders"
                  title="Chart of Firebird Delivery Orders vs Tracked Orders"
                ></img>
              </div>
              <div className="column">
                <div className="image-container ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691591513-ff_comments1.png"
                    alt="User feedback from Firebird item reviews"
                    title="User feedback from Firebird item reviews"
                  ></img>
                </div>
                <div className="image-container ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691591518-ff_comments2.png"
                    alt="User feedback from Firebird item reviews"
                    title="User feedback from Firebird item reviews"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="content--section-title  for-h3">Pain Point 2</div>

          <div className="content--main ">
            <h3>Confusion about Delivery Confirmation</h3>
            <p>
              We also noticed a number of reviews that expressed frustration
              over a lack of alert about their delivery arriving. Although our
              tracking page would update automatically, no explicit alert would
              be given to the user.
            </p>
            <div className="double-image">
              <div className="image-container">
                <img
                  className=" content--image-wrapper-full bump-2point5"
                  src="https://www.datocms-assets.com/103104/1691591523-ff_comments3.png"
                  alt="User feedback from Firebird item reviews"
                  title="User feedback from Firebird item reviews"
                ></img>
              </div>
              <div className="image-container">
                <img
                  className=" content--image-wrapper-full bump-2point5"
                  src="https://www.datocms-assets.com/103104/1691591528-ff_comments4.png"
                  alt="User feedback from Firebird item reviews"
                  title="User feedback from Firebird item reviews"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="content--block " id="grey">
          <div className="content--section-title">How might we...</div>
          <div className="content--main">
            <h2 className="  no-padding">
              Make order-tracking for deliveries obvious, transparent and
              straightforward?
            </h2>
          </div>
        </div>
        <div className="content--block ">
          <div className="content--section-title">
            Insights from Relevant UXR Studies
          </div>
          <div className="content--main ">
            <h2>Visibility is Crucial in Service-Related Interfaces</h2>
            <p>
              To understand the current landscape of existing order-tracking
              interfaces, I read through a number of UXR studies around
              food-delivery apps (closest product market to cannabis /
              controlled substances), and conducted a competitive audit of four
              popular delivery platforms with order-tracking functionality.
              Multiple sources highlighted the importance of transparent
              communication when designing for service-related interfaces such
              as delivery. These were my key takeaways:
            </p>

            <div className="content--sub-block">
              <div className="three-statistics">
                <div className="statistic">
                  <h3>Comprehensive Progress Updates</h3>
                  <p>
                    Order tracking platforms should clearly communicate all
                    order updates to users, but ensure the most recent update is
                    prioritized.
                  </p>
                </div>
                <div className="statistic">
                  <h3>Consistency Across Update Messages</h3>
                  <p>
                    Update messages sent across multiple channels should present
                    both the same information and amount of information, refrain
                    from making one source more reliable than another.
                  </p>
                </div>

                <div className="statistic">
                  <h3>Keep the User in Control</h3>
                  <p>
                    Any screen pertaining to user’s order and delivery should
                    include options to manage/modify delivery details, in order
                    to keep user in control of the delivery at every stage.
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="content--sub-block">
              <div className="content--section-title  for-h3">
                Competitive Analysis
              </div>
              <h3>Different Approaches + Use Cases for Order-Tracking</h3>
              <p>
                I conducted a competitive analysis of four delivery platforms to
                understand how they approached order-tracking. Each platform
                provides delivery for a different kind of product, and
                emphasizes platform usage through different value propositions.
                To start, I broke down these differences and compared them to
                our goals for Firebird.
              </p>
              <div className="image-container ">
                <img
                  className=" content--image-wrapper-full bump-2point5"
                  src="https://www.datocms-assets.com/103104/1691591532-ff_competitive-analysis.png"
                  alt="Competitive analysis of similar delivery platforms"
                  title="Competitive analysis of similar delivery platforms"
                ></img>
              </div>
              <h3>Competitive Audit</h3>
              {/* 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥I'm just gonna put this here for now but it will have to be nicely formatted in round two!!!!!!!!!!!!!!!!!! */}
              <p>
                With the platform differences outlined, I began auditing the
                order-tracking functionality of each platform.* My goal with
                this audit was to understand how the UI of our competitor
                platforms supported the company’s product values, taking note of
                solutions that could be applied to Firebird.{" "}
              </p>
              <div className="double-image">
                <div className="image-container">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691591507-ff_audit-4.png"
                    alt="Domino's web-based order-tracking screen"
                    title="Domino's web-based order-tracking screen"
                  ></img>
                </div>
                <div className="image-container">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691591495-ff_audit-2.png"
                    alt="Uber Eat's web-based order-tracking screen"
                    title="Uber Eat's web-based order-tracking screen"
                  ></img>
                </div>
                <div className="image-container ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691591486-ff_audit-1.png"
                    alt="Amazon Prime's web-based order-tracking screen"
                    title="Amazon Prime's web-based order-tracking screen"
                  ></img>
                </div>
                <div className="image-container ">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691591502-ff_audit-3.png"
                    alt="Drizly's web-based order-tracking screen"
                    title="Drizly's web-based order-tracking screen"
                  ></img>
                </div>
              </div>
              <h4>
                *Although Firebird is web-only, both mobile and web versions of
                each platform were audited to fully understand each platform’s
                design strategy
              </h4>
            </div>
            <h3>We found that...</h3>
            <h2>
              All major delivery platforms utilize mobile notifications to
              inform users of progress. Since Firebird is web-based, we must
              leverage email updates to keep users up to date about the status
              of their delivery.{" "}
            </h2>
          </div>
        </div>
        <div>
          <div className="content--block " id="grey">
            <div className="content--section-title">
              Reflecting on Research{" "}
            </div>
            <div className="content--main ">
              <h2>Guiding Questions for Product Ideation</h2>
              <p>
                In the competitive audit done during the research phase, I kept
                the following questions in mind when reviewing each platform’s
                order-tracking interface. Beginning the ideation phase, I
                referred back to those same questions to ensure my final designs
                aligned well with the project’s goals, as well as our
                big-picture product strategy.
              </p>
              <p>
                👀 What can I learn by scanning the order-tracking page? EASE OF
                USE
              </p>
              <p>
                ‼️ How do I receive progress updates about my order?
                TRANSPARENCY
              </p>
              <p>
                ✅ How am I informed that my order has been delivered? AWARENESS
                , SECURITY
              </p>
              <p>
                Based on these questions, I generated ideas in three separate
                ‘buckets’, exploring a range of approaches to answer each
                question.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="content--block ">
            <div className="content--main ">
              <h2>Bucket 1- Main Screen Display</h2>
              <p>
                Keeping the first guiding question in mind, I iterated on a
                number of order-tracking displays that put emphasis on different
                information we could provide the user, evaluating each version’s
                pros and cons.
              </p>
              <div className="version-pro-con">
                <h3>V1 - Map dominant</h3>

                <div className="version-container horizontal">
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://www.datocms-assets.com/103104/1691595572-bucket1_2.png"
                      alt="V1 - Map dominant"
                      title="V1 - Map dominant"
                    ></img>
                  </div>
                  <div className="pro-con horizontal">
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
                          Delivery management button and update history are not
                          readily available
                        </li>
                        <li>
                          Map feature doesn’t show distance between customer and
                          delivery
                        </li>
                        <li>Lots of empty / unused space</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="version-pro-con">
                <h3>✅ V2 - No map, modular approach</h3>
                <div className="version-container horizontal">
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://www.datocms-assets.com/103104/1691595584-bucket1_4.png"
                      alt="V2 - No map, modular approach"
                      title="V2 - No map, modular approach"
                    ></img>
                  </div>
                  <div className="pro-con horizontal">
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
                <div className="version-container horizontal">
                  <div className="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://www.datocms-assets.com/103104/1691595578-bucket1_3.png"
                      alt="V3 - Map with info modules"
                      title="V3 - Map with info modules"
                    ></img>
                  </div>
                  <div className="pro-con horizontal">
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
                          Map feature doesn’t show distance between customer and
                          delivery
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
                      src="https://www.datocms-assets.com/103104/1691595563-bucket1_1.png"
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
                          No explicit link to order details or button to manage
                          delivery
                        </li>
                        <li>
                          Map feature doesn’t show distance between customer and
                          delivery
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                V2 gave the user the most information possible from a quick
                scan, which aligned best with our goals of speed and
                transparency.
              </p>
            </div>
          </div>
        </div>

        <div className="content--block ">
          <div className="content--main ">
            <h2>Bucket 2- Status Updates </h2>
            <p>
              Since emails proved to be our most reliable way to update the
              user, I iterated on potential content arrangements that worked
              within our existing email template.
            </p>
            <div className="version-pro-con">
              <h3>V1</h3>
              <div className="version-container">
                <div className="image-container version">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
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
                        No link to tracker, customers may not learn about that
                        feature
                      </li>
                      <li>No central CTA of the email</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="version-pro-con">
              <h3>V2</h3>
              <div className="version-container">
                <div className="image-container version">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
                    alt="Original design of Firebird's order-tracking screen"
                    title="Original design of Firebird's order-tracking screen"
                  ></img>
                </div>
                <div className="pro-con">
                  {" "}
                  <div className="pros">
                    <h5>PROS</h5>
                    <ul>
                      <li>Delivery date and track order CTA are prioritized</li>
                      <li>Information matches order tracking page</li>
                    </ul>
                  </div>
                  <div className="cons">
                    <h5>CONS</h5>
                    <ul>
                      <li>Manage delivery button is somewhat hidden</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="version-pro-con">
              <h3>V3</h3>
              <div className="version-container">
                <div className="image-container version version">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
                    alt="Original design of Firebird's order-tracking screen"
                    title="Original design of Firebird's order-tracking screen"
                  ></img>
                </div>
                <div className="pro-con">
                  {" "}
                  <div className="pros">
                    <h5>PROS</h5>
                    <ul>
                      <li>Delivery date and track order CTA are prioritized</li>
                      <li>
                        Manage delivery button is viewable just by scanning
                      </li>
                    </ul>
                  </div>
                  <div className="cons">
                    <h5>CONS</h5>
                    <ul>
                      <li>Item(s) ordered aren’t immediately visible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="version-pro-con">
              <h3>V4</h3>
              <div className="version-container">
                <div className="image-container version">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
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
                        User incentivized to scan / confirm order before leaving
                        the page
                      </li>
                    </ul>
                  </div>
                  <div className="cons">
                    <h5>CONS</h5>
                    <ul>
                      <li>
                        Order buttons take priority over delivery details + call
                        to action buttons
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>
              V3 was chosen because it best highlighted the order controls
              available to the user.
            </p>
          </div>
        </div>

        <div className="content--block ">
          <div className="content--main ">
            <h2>Bucket 3- Delivery Confirmation </h2>
            <p>
              I iterated on a few different ways we could confirm to the user
              that their order was delivered and evaluated
            </p>
            <div className="version-pro-con ">
              <h3>V1 - Tracking page visual cues</h3>
              <div className="version-container horizontal">
                <div className="image-container version">
                  <img
                    className=" content--image-wrapper-full "
                    src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
                    alt="Original design of Firebird's order-tracking screen"
                    title="Original design of Firebird's order-tracking screen"
                  ></img>
                </div>
                <div className="pro-con horizontal">
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
              <div className="version-container horizontal">
                <div clasNames="image-container version">
                  <div clasNames="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
                      alt="Original design of Firebird's order-tracking screen"
                      title="Original design of Firebird's order-tracking screen"
                    ></img>
                  </div>
                </div>
                <div className="pro-con horizontal">
                  {" "}
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
                        Doesn’t match the narrative built out by the status bar
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="version-pro-con">
              <h3>✅ V3 - Email Alert with photo evidence</h3>
              <div className="version-container">
                <div clasNames="image-container version">
                  <img
                    className=" content--image-wrapper-full bump-2point5"
                    src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
                    alt="Original design of Firebird's order-tracking screen"
                    title="Original design of Firebird's order-tracking screen"
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
                <h3>✅ V4 - Visual cues + photo evidence</h3>
                <div className="version-container  horizontal">
                  <div clasNames="image-container version">
                    <img
                      className=" content--image-wrapper-full bump-2point5"
                      src="https://www.datocms-assets.com/103104/1691510369-ff_old-delivery-1.png"
                      alt="Original design of Firebird's order-tracking screen"
                      title="Original design of Firebird's order-tracking screen"
                    ></img>
                  </div>
                  <div className="pro-con horizontal">
                    {" "}
                    <div className="pros">
                      <h5>PROS</h5>
                      <ul>
                        <li>Visual communicates order delivery</li>
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
                information as quickly as possible without interfering with each
                other.
              </p>
            </div>
          </div>
        </div>
        <div className="content--block ">
          <div className="content--main ">
            <h2>Mobile Prototyping</h2>

            <p>
              Since our solution depended so heavily on email updates, it was
              clear that the tracking page had to be responsive to mobile
              devices, for users who opened email updates from their phones.
            </p>
          </div>
        </div>

        <div className="content--block ">
          <div className="content--main ">
            <h2>The Final Product</h2>
          </div>
        </div>
        <div className="content--block ">
          <div className="content--section-title">
            Impact of my Improvements
          </div>
          <div className="content--main ">
            <h2>92% of Users now Track Their Orders</h2>

            <p>
              Firebird’s order-tracking page, along with other 2.0 updates, were
              launched at the end of Q2. Since then, we’ve seen a massive
              increase in average delivery basket size and price (+23% and +25%
              respectively).
            </p>
            <p>
              As for order tracking usage, 92% of delivery users now track their
              orders, a 77% increase from our beta launch.
            </p>
          </div>
        </div>

        <div className="content--block ">
          <div className="content--section-title">Conclusions</div>
          <div className="content--main ">
            <h2>Next Steps + Takeaways</h2>

            <p>
              It was an incredible experience to work on my first real-world UX
              project. Here are a few of my key takeaways from the experience-
            </p>
            <p>
              <h3>Design is a balancing act:</h3>
              Working on a real-world project means you're no longer designing
              in a vacuum. Every design decision must account for both
              stakeholder demands and technological restraints, it is in your
              best interest to keep these factors in mind as you iterate.
            </p>
            <p>
              <h3>Be mindful of your engineers:</h3>
               providing detailed notes for the engineers relating to the
              platform's front-end development was critical in getting a final
              product that mirrored my initial designs.ㅤ
            </p>
            <p>
              <h3>Be mindful of your engineers:</h3>
              Providing detailed notes for the engineers relating to the
              platform's front-end development was critical in getting a final
              product that mirrored my initial designs.ㅤ
            </p>
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
      <Overlay />
      <div className="overlay" id="overlay">
        <button id="closeButton">Close</button>
        <div className="modal">
          <img src="" alt="Enlarged Image" id="enlargedImage"></img>
          <div className="image-focus-subtitle" id="imageSubtitle"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
