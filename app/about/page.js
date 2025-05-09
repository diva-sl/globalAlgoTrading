"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

import React from "react";
import RootLayout from "../layout";

export default function About() {
  const metaData = {
    title: "ABOUT US - Global Algo Trading",
    description:
      "Discover Global Algo Trading's cutting-edge solutions for AI & algorithmic trading. Empowering traders with innovative tools for stocks, cryptocurrencies, forex, and commodities.",
    canonical: "https://globalalgotrading.com/about",
  };
  return (
    <RootLayout metadata={metaData}>
      <main>
        <Layout>
          <div className="nk-app-root has-mask">
            <div className="nk-mask bg-pattern-dot-white-sm" />
            <header className="nk-header has-shape">
              <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x" />
              <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x" />
              <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x" />
              <Header />
            </header>
            <main className="nk-pages">
              <section className="section has-shape has-mask">
                <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
                <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
                <div className="container">
                  <div className="section-head">
                    <div className="row justify-content-center text-center">
                      <div className="col-lg-9 col-xl-8 col-xxl-7">
                        <h6 className="overline-title text-primary">
                          About Us
                        </h6>
                        <h2 className="title h1">Global Algo Trading</h2>
                      </div>
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="row g-gs justify-content-center align-items-center flex-lg-row-reverse">
                      <div className="col-lg-6 col-md-11">
                        <div className="block-gfx ps-xxl-5">
                          <img
                            className="w-100"
                            src="/images/about.jpg"
                            alt="Global Algo Trading"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="block-text pe-xxl-7">
                          <p className="lead">
                            Welcome to Global Algo Trading – Where technology
                            meets finance to deliver exceptional algorithmic
                            trading solutions. We offer high-frequency trading
                            strategies using artificial intelligence and machine
                            learning to gain a competitive edge in global
                            financial markets.
                          </p>
                          <p className="lead">
                            Founded by a group of expert traders, data
                            scientists, and engineers, we are driven by the
                            mission to democratize access to world-class trading
                            algorithms for both institutional and retail
                            investors.
                          </p>

                          <ul className="btn-list btn-list-inline gy-0">
                            <li>
                              <a href="/" className="cta-button inline-block">
                                <span>Get Started</span>
                                <em className="icon ni ni-arrow-long-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section section-bottom-0 has-shape has-mask">
                <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
                <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
                <div className="container">
                  <div className="section-head">
                    <div className="row justify-content-center text-center">
                      <div className="col-xl-8">
                        <h2 className="title">Our Services</h2>
                      </div>
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="row text-center g-gs">
                      <div className="col-md-6 col-xl-4">
                        <a
                          href="usecase-details.html"
                          className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                        >
                          <div className="card-body">
                            <div className="feature">
                              <div className="feature-media">
                                <div className="media media-middle media-xl text-bg-success-soft rounded-pill">
                                  <em className="icon ni ni-globe" />
                                </div>
                              </div>
                              <div className="feature-text text-base">
                                <h3 className="title">
                                  AI-Driven Market Intelligence
                                </h3>
                                <p>
                                  Leverage our AI tools for comprehensive market
                                  insights, behavioral analysis, and economic
                                  indicators to optimize trading decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-xl-4">
                        <a
                          href="usecase-details.html"
                          className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                        >
                          <div className="card-body">
                            <div className="feature">
                              <div className="feature-media">
                                <div className="media media-middle media-xl text-bg-info-soft rounded-pill">
                                  <em className="icon ni ni-flag" />
                                </div>
                              </div>
                              <div className="feature-text text-base">
                                <h3 className="title">
                                  Seamless Trading Platform
                                </h3>
                                <p>
                                  Our platform ensures smooth, seamless trading
                                  experiences with user-friendly features,
                                  robust execution, and cutting-edge technology.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-xl-4">
                        <a
                          href="usecase-details.html"
                          className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                        >
                          <div className="card-body">
                            <div className="feature">
                              <div className="feature-media">
                                <div className="media media-middle media-xl text-bg-primary-soft rounded-pill">
                                  <em className="icon ni ni-edit" />
                                </div>
                              </div>
                              <div className="feature-text text-base">
                                <h3 className="title">
                                  Expert Trading Strategies
                                </h3>
                                <p>
                                  Access customized investment strategies and
                                  personalized guidance from industry experts to
                                  maximize returns and minimize risk.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="col-md-6 col-xl-4">
                        <a
                          href="usecase-details.html"
                          className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                        >
                          <div className="card-body">
                            <div className="feature">
                              <div className="feature-media">
                                <div className="media media-middle media-xl text-bg-purple-soft rounded-pill">
                                  <em className="icon ni ni-percent" />
                                </div>
                              </div>
                              <div className="feature-text text-base">
                                <h3 className="title">
                                  Data-Driven Decision Making
                                </h3>
                                <p>
                                  Transform data into actionable trading
                                  insights with real-time market analysis and
                                  advanced AI algorithms.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="col-md-6 col-xl-4">
                        <a
                          href="usecase-details.html"
                          className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                        >
                          <div className="card-body">
                            <div className="feature">
                              <div className="feature-media">
                                <div className="media media-middle media-xl text-bg-primary-soft rounded-pill">
                                  <em className="icon ni ni-puzzle" />
                                </div>
                              </div>
                              <div className="feature-text text-base">
                                <h3 className="title">
                                  Automated Trading Excellence
                                </h3>
                                <p>
                                  Achieve superior results with our advanced
                                  automated trading solutions designed for
                                  optimal performance and risk management.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-md-6 col-xl-4">
                        <a
                          href="usecase-details.html"
                          className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100 "
                        >
                          <div className="card-body">
                            <div className="feature">
                              <div className="feature-media">
                                <div className="media media-middle media-xl text-bg-success-soft rounded-pill">
                                  <em className="icon ni ni-comments" />
                                </div>
                              </div>
                              <div className="feature-text text-base">
                                <h3 className="title">AI-Powered Insights</h3>
                                <p>
                                  Use AI-driven insights to optimize your
                                  trading strategy and identify profitable
                                  opportunities across global financial markets.
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-bottom-0">
                <div className="container">
                  <div className="section-head">
                    <div className="row justify-content-center text-center">
                      <div className="col-xl-8">
                        <h2 className="title">Our Mission & Vision</h2>
                      </div>
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="row g-gs">
                      <div className="col-lg-6">
                        <h3 className="h4 text-primary">Mission</h3>
                        <p>
                          Our mission is to democratize algorithmic trading by
                          providing state-of-the-art AI-driven solutions that
                          enable retail and institutional investors to make
                          data-driven, automated, and profitable trading
                          decisions across global financial markets.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <h3 className="h4 text-primary">Vision</h3>
                        <p>
                          Our vision is to become the leading platform for
                          AI-driven trading solutions worldwide, delivering
                          innovative tools that maximize profitability while
                          maintaining the highest level of integrity and
                          transparency in every trade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-bottom-0">
                <div className="container">
                  <div className="section-head">
                    <div className="row justify-content-center text-center">
                      <div className="col-xl-8">
                        <h2 className="title">Meet Our Team</h2>
                      </div>
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="row g-gs">
                      <div className="col-md-4">
                        <div className="team-member">
                          <img
                            src="/images/team1.jpg"
                            alt="Team Member"
                            className="rounded-circle"
                            style={{ width: "150px", height: "150px" }}
                          />
                          <h4 className="mt-3">John Doe</h4>
                          <p>Founder & CEO</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="team-member">
                          <img
                            src="/images/team2.jpg"
                            alt="Team Member"
                            className="rounded-circle"
                            style={{ width: "150px", height: "150px" }}
                          />
                          <h4 className="mt-3">Jane Smith</h4>
                          <p>Lead Data Scientist</p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="team-member">
                          <img
                            src="/images/team3.jpg"
                            alt="Team Member"
                            className="rounded-circle"
                            style={{ width: "150px", height: "150px" }}
                          />
                          <h4 className="mt-3">Alice Johnson</h4>
                          <p>Head of Trading Algorithms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-bottom-0">
                <div className="container">
                  <div className="section-head">
                    <div className="row justify-content-center text-center">
                      <div className="col-xl-8">
                        <h2 className="title">Why Choose Us?</h2>
                      </div>
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="row g-gs">
                      <div className="col-md-6 col-xl-4">
                        <div className="feature">
                          <div className="feature-media">
                            <div className="media media-middle media-xl text-bg-info-soft rounded-pill">
                              <em className="icon ni ni-check-circle" />
                            </div>
                          </div>
                          <div className="feature-text text-base">
                            <h3 className="title">Proven Track Record</h3>
                            <p>
                              Our algorithms have consistently outperformed
                              market benchmarks, providing profitable results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4">
                        <div className="feature">
                          <div className="feature-media">
                            <div className="media media-middle media-xl text-bg-warning-soft rounded-pill">
                              <em className="icon ni ni-gear" />
                            </div>
                          </div>
                          <div className="feature-text text-base">
                            <h3 className="title">
                              State-of-the-Art Technology
                            </h3>
                            <p>
                              We utilize the latest advancements in AI and
                              machine learning to provide cutting-edge trading
                              strategies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4">
                        <div className="feature">
                          <div className="feature-media">
                            <div className="media media-middle media-xl text-bg-primary-soft rounded-pill">
                              <em className="icon ni ni-security" />
                            </div>
                          </div>
                          <div className="feature-text text-base">
                            <h3 className="title">Secure & Transparent</h3>
                            <p>
                              Our platform ensures complete transparency in all
                              trades, with robust security protocols to protect
                              your data.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-bottom-0">
                <div className="container">
                  <div className="section-head">
                    <div className="row justify-content-center text-center">
                      <div className="col-xl-8">
                        <h2 className="title">Client Testimonials</h2>
                      </div>
                    </div>
                  </div>
                  <div className="section-content">
                    <div className="row g-gs">
                      <div className="col-md-6">
                        <div className="testimonial">
                          <p>
                            "Global Algo Trading has completely transformed the
                            way we approach the market. Their algorithms have
                            consistently delivered outstanding results."
                          </p>
                          <h4>Mark Thompson</h4>
                          <p>Investor, Financial Markets</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="testimonial">
                          <p>
                            "The platform is user-friendly, and the AI-driven
                            insights have been invaluable in helping us optimize
                            our trading strategies."
                          </p>
                          <h4>Emily Davis</h4>
                          <p>Trading Expert</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="section section-bottom-0">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="image-container">
                        <img
                          src="/images/trading-contact.jpg"
                          alt="Contact Us"
                          className="img-fluid"
                          style={{ borderRadius: "8px" }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="section-head">
                        <h2 className="title">Get in Touch</h2>
                        <p>
                          Have any questions or inquiries? Feel free to reach
                          out to us!
                        </p>
                      </div>
                      <form action="/submit-form" method="POST">
                        <div className="row g-gs">
                          <div className="col-md-6">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="row g-gs mt-3">
                          <div className="col-12">
                            <textarea
                              name="message"
                              className="form-control"
                              rows="4"
                              placeholder="Your Message"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                          <div className="col-md-4">
                            <button
                              type="submit"
                              className="cta-button inline-block"
                            >
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section-bottom-0 has-shape">
                <div className="nk-shape bg-shape-blur-m mt-n3 start-50 top-0 translate-middle-x" />
                <div className="container">
                  <div className="section-head">
                    <div className="row justify-content-center text-center">
                      <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <h6 className="overline-title text-primary">
                          Testimonials
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </Layout>
      </main>
    </RootLayout>
  );
}

{
  /* <div className="section-content">
                    <div className="row g-gs justify-content-center align-items-center">
                      <div className="col-lg-4">
                        <div className="card border-0 shadow-tiny rounded-4">
                          <div className="card-body">
                            <ul className="list list-row gy-0 g-1 mb-3">
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                            </ul>

                            <p>
                              Using Elite Algo Trading's forex trading software has been
                              a game-changer for me. Its consistency in
                              generating profits has truly surpassed my
                              expectations. With Elite Algo Trading, I've seen a
                              significant improvement in my trading performance
                              and efficiency. I highly recommend Elite Algo Trading to
                              any trader looking for a reliable and innovative
                              trading software solution.
                            </p>
                            <div className="d-flex pt-3">
                              <div className="media media-lg media-middle media-lg rounded-pill">
                                <img src="/images/img3.png" alt="" />
                              </div>
                              <div className="media-info ms-3">
                                <h5 className="mb-1">Danup Dulgacha</h5>
                                <div className="sub-text">
                                  Area Sales Manager,Medmanor organics Mumbai
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card border-0 shadow-tiny rounded-4">
                          <div className="card-body">
                            <ul className="list list-row gy-0 g-1 mb-3">
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                            </ul>

                            <p>
                              "Having been a seasoned trader for over 15 years,
                              I've encountered numerous trading software
                              solutions. However, my experience with Elite Algo Trading
                              has been unparalleled. Their platform offers a
                              seamless trading experience, equipped with
                              advanced features and intuitive interface that
                              streamlines my trading activities. */
}
{
  /* With Elite Algo Trading, I've seen a significant
                        improvement in my trading performance and efficiency. I
                        highly recommend Elite Algo Trading to any trader looking for a
                        reliable and innovative trading software solution." */
}
{
  /* </p>
                            <div className="d-flex pt-3">
                              <div className="media media-lg media-middle media-lg rounded-pill">
                                <img src="/images/img2.png" alt="" />
                              </div>
                              <div className="media-info ms-3">
                                <h5 className="mb-1">Manohar PR</h5>
                                <div className="sub-text">
                                  Ex G M.M/s mayor electro ceramics p Ltd,
                                  Rairngapur, Orissa{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card border-0 shadow-tiny rounded-4">
                          <div className="card-body">
                            <ul className="list list-row gy-0 g-1 mb-3">
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                              <li>
                                <em className="icon text-warning ni ni-star-fill fs-5" />
                              </li>
                            </ul> */
}
{
  /* <h4 className="title mb-3">
              Just wanna shout out the whole team for this amazing tool
            </h4> */
}
{
  /* <p>
                              Having been a seasoned trader for over 15 years,
                              I've encountered numerous trading software
                              solutions. However, my experience with Elite Algo Trading
                              has been unparalleled. Their platform offers a
                              seamless trading experience, equipped with
                              advanced features and intuitive interface that
                              streamlines my trading activities. */
}
{
  /* With Elite Algo Trading, I've seen a significant
                        improvement in my trading performance and efficiency. I
                        highly recommend Elite Algo Trading to any trader looking for a
                        reliable and innovative trading software solution */
}
{
  /* </p>
                            <div className="d-flex pt-3">
                              <div className="media media-lg media-middle media-lg rounded-pill">
                                <img src="/images/img1.png" alt="" />
                              </div>
                              <div className="media-info ms-3">
                                <h5 className="mb-1">Indrajeet Kumar</h5>
                                <div className="sub-text">
                                  Assistant Manager Aye Finance Pvt Ltd New
                                  Delhi
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */
}
