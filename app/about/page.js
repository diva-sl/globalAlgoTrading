"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

import React from "react";
import RootLayout from "../layout";

export default function About() {
  const metaData = {
    title: "ABOUT US - Elite Algo Trading",
    description:
      "Discover Elite Algo Tradings innovation in AI & algorithmic trading. Empowering traders with advanced solutions for stocks, cryptocurrencies, and commodities.",
  canonical: "https://algotradingelite.com//about"
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
                        <h2 className="title h1">Elite Algo Trading</h2>
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
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="block-text pe-xxl-7">
                          <p className="lead">
                          Welcome to Elite Trading – Where innovation meets precision in the world of algorithmic trading. We are a cutting-edge financial technology firm dedicated to providing institutional-grade trading strategies powered by advanced algorithms and artificial intelligence. At Elite Trading, we leverage the latest in quantitative analysis, machine learning, and high-frequency trading to offer our clients an edge in today's competitive markets.

                          </p>
                          <p className="lead">
                          Founded by a team of seasoned traders, data scientists, and financial engineers, we are committed to developing intelligent, efficient, and adaptive trading solutions. Our mission is to bring professional-level trading strategies to both institutional and retail traders, creating opportunities for significant growth and sustainable success.

                          </p>
                          {/* <ul className="list gy-3 pe-xxl-7">
                            <li>
                              <em className="icon text-success fs-5 ni ni-check-circle-fill" />
                              <span>
                                Accessible interfaces cater to traders of all
                                proficiency levels, fostering inclusivity in the
                                pursuit of success across stocks,
                                cryptocurrencies, and commodities.
                              </span>
                            </li>
                            <li>
                              <em className="icon text-success fs-5 ni ni-check-circle-fill" />
                              <span>
                                Beyond software, Elite Algo Trading offers a holistic
                                approach, equipping traders with educational
                                resources and ensuring they're armed with
                                knowledge for astute decision-making.
                              </span>
                            </li>
                          </ul> */}
                          <ul className="btn-list btn-list-inline gy-0">
                            <li>
                              <a href="/" className="btn btn-lg btn-primary">
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
                                  Strategic Market Intelligence
                                </h3>
                                <p>
                                Get comprehensive market trend analysis, behavior insights, and economic indicators to make informed trading decisions. 
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
                                <h3 className="title">Organized Trading</h3>
                                <p>
                                Experience a streamlined and efficient trading process with our well-structured platform for smooth trading operations. 
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
                                  {" "}
                                  Expert Investment Direction
                                </h3>
                                <p>
                                Benefit from expert guidance and strategic advice to maximize your investment potential with personalized investment strategies while minimizing risks. 
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
                                  Transform Sentiment into Success
                                </h3>
                                <p>
                                Convert market sentiment into profitable trading opportunities with our advanced tools to grasp every profitable opportunity. 
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
                                  {" "}
                                  Achieve superior results with our advanced algorithms and automated trading solutions for performance optimizations and desirable results.
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
                                <h3 className="title">
                                  {" "}
                                  Unified AI Assimilation
                                </h3>
                                <p>
                                Find the best artificial intelligence trading integrated system into your trading strategies to make uniformed decisions for making profit with AI driven real-time insights. 
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
                  <div className="section-content">
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
                              streamlines my trading activities.
                              {/* With Elite Algo Trading, I've seen a significant
                        improvement in my trading performance and efficiency. I
                        highly recommend Elite Algo Trading to any trader looking for a
                        reliable and innovative trading software solution." */}
                            </p>
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
                            </ul>
                            {/* <h4 className="title mb-3">
              Just wanna shout out the whole team for this amazing tool
            </h4> */}
                            <p>
                              Having been a seasoned trader for over 15 years,
                              I've encountered numerous trading software
                              solutions. However, my experience with Elite Algo Trading
                              has been unparalleled. Their platform offers a
                              seamless trading experience, equipped with
                              advanced features and intuitive interface that
                              streamlines my trading activities.
                              {/* With Elite Algo Trading, I've seen a significant
                        improvement in my trading performance and efficiency. I
                        highly recommend Elite Algo Trading to any trader looking for a
                        reliable and innovative trading software solution */}
                            </p>
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
