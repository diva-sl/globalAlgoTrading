"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import RootLayout from "../layout";
import { CircularProgress } from "@mui/material";

export default function Indian() {
  const [values, setValues] = useState({
    email: "",
    phone: "",
    referralId: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission logic here (e.g., API call)
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted!");
    }, 2000); // Example of handling async operation
  };
  const metaData = {
    title: "Crypto Trading Software - Elite Algo Trading",
    description:
      "Step into the future of finance with Elite Algo Trading’s advanced crypto trading software. Enjoy seamless trading with real-time market insights and cutting-edge technology.",
    canonical: "https://algotradingelite.com/crypto",
  };

  return (
    <RootLayout metadata={metaData}>
      <main>
        <Layout>
          <div className="nk-app-root has-mask">
            <div className="nk-mask bg-pattern-dot-white-sm" />
            <header className="nk-header has-shape">
              <Header />
            </header>
            <main className="nk-pages">
              <section
                className="section has-shape has-mask"
                data-aos="fade-up"
              >
                <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
                <div className="container">
                  <div className="section-head text-center" data-aos="zoom-in">
                    <h6 className="overline-title">Crypto Trading</h6>
                    <h2 className="title h1">
                      Global Algo Trading Crypto Software
                    </h2>
                  </div>
                  <div className="section-content row g-gs align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                      <img
                        src="/images/crypto.jpg"
                        alt="Crypto Trading"
                        className="w-full rounded-lg shadow-lg"
                        style={{
                          height: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                      <h5>
                        Seize the future of finance with our innovative crypto
                        trading software, designed for seamless transactions and
                        real-time market insights.
                      </h5>
                      <p>
                        Unlock the full potential of cryptocurrency trading with
                        our cutting-edge Crypto Market Trading Software.
                        Designed for both novice and experienced traders, our
                        platform offers real-time market analysis, advanced
                        charting tools, and automated trading features to help
                        you make informed decisions and maximize your profits.
                        Whether you’re trading Bitcoin, Ethereum, or emerging
                        altcoins, our Crypto Market Trading Software equips you
                        with the tools you need to succeed in a fast-paced
                        digital landscape. Start trading smarter today and
                        elevate your trading experience to the next level.
                      </p>
                      <ul className="btn-list btn-list-inline gy-0">
                        <li>
                          <a href="/" className="btn btn-lg custom-green-btn">
                            <span>Get Started</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/contact"
                            className="btn btn-lg custom-outline-green"
                          >
                            <span>Talk to an Expert</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section bg-light" data-aos="fade-up">
                <div className="container">
                  <div className="section-head text-center mb-5">
                    <h6 className="overline-title">Key Features</h6>
                    <h2 className="title">
                      Why Choose Our Crypto Trading Software?
                    </h2>
                    <p className="lead text-muted mt-2">
                      Built to empower traders with advanced analytics,
                      automated strategies, and seamless market access.
                    </p>
                  </div>
                  <div className="row g-gs pt-4">
                    {[
                      {
                        title: "Real-Time Market Insights",
                        desc: "Stay ahead with real-time analytics to help you make fast, informed decisions.",
                      },
                      {
                        title: "Advanced Charting Tools",
                        desc: "Utilize powerful charting tools to analyze trends, spot patterns, and optimize your trades.",
                      },
                      {
                        title: "Automated Trading",
                        desc: "Automate your trades based on custom strategies for hands-free, efficient trading.",
                      },
                    ].map((feature, index) => (
                      <div
                        className="col-md-4"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="card h-100 shadow-sm rounded-lg p-4">
                          <h5 className="mb-2">{feature.title}</h5>
                          <p className="text-muted">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="section bg-light py-5" data-aos="fade-up">
                <div className="container">
                  <div className="text-center mb-4" data-aos="zoom-in-down">
                    <h2 className="title">Join Us Today</h2>
                    <p className="lead text-muted">
                      Fill in your details to get started. We're excited to have
                      you on board.
                    </p>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <form onSubmit={handleSubmit} data-aos="fade-up">
                        <div className="row">
                          {/* Email Field */}
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label className="form-label" htmlFor="youremail">
                                Your Email
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control form-control-lg"
                                  placeholder="Enter email id"
                                  required
                                  value={values?.email}
                                  onChange={(e) =>
                                    setValues((prev) => ({
                                      ...prev,
                                      email: e.target.value,
                                    }))
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          {/* Contact Number Field */}
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label
                                className="form-label"
                                htmlFor="contactnumber"
                              >
                                Contact Number
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="phone"
                                  className="form-control form-control-lg"
                                  placeholder="Enter phone number"
                                  required
                                  value={values?.phone}
                                  onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const sanitizedValue = inputValue.replace(
                                      /[^0-9]/g,
                                      ""
                                    );
                                    const finalValue = sanitizedValue.slice(
                                      0,
                                      15
                                    );
                                    setValues((prev) => ({
                                      ...prev,
                                      phone: finalValue,
                                    }));
                                  }}
                                  min={10}
                                  max={15}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Referral ID Field */}
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label
                                className="form-label"
                                htmlFor="referralId"
                              >
                                Referral ID
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="referralId"
                                  className="form-control form-control-lg"
                                  placeholder="Enter referral ID"
                                  value={values?.referralId}
                                  onChange={(e) =>
                                    setValues((prev) => ({
                                      ...prev,
                                      referralId: e.target.value,
                                    }))
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="col-12 text-center">
                            <button
                              className="btn btn-lg custom-green-btn"
                              type="submit"
                            >
                              {loading ? (
                                <CircularProgress
                                  size={21}
                                  style={{ color: "white" }}
                                />
                              ) : (
                                "Download"
                              )}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- Pricing Section --- */}
              <section className="section bg-light" data-aos="fade-up">
                <div className="container">
                  <div
                    className="section-head text-center mb-5"
                    data-aos="zoom-in-up"
                  >
                    <h6 className="overline-title">Our Plans</h6>
                    <h2 className="title">
                      Flexible Pricing for Crypto Traders
                    </h2>
                    <p className="lead text-muted">
                      Select a plan that suits your trading needs.
                    </p>
                  </div>

                  <div className="row g-gs">
                    <div className="col-md-4">
                      <div className="card h-100 shadow-sm rounded-lg text-center p-4">
                        <h5 className="mb-2 text-title">Starter</h5>
                        <p className="text-muted">
                          Perfect for newcomers to crypto trading.
                        </p>
                        <h3 className="my-3">
                          ₹1,499<span className="fs-6">/month</span>
                        </h3>
                        <ul className="list-unstyled mb-4">
                          <li>✓ Real-time Crypto Signals</li>
                          <li>✓ Basic Strategy Access</li>
                          <li>✓ Limited Backtesting</li>
                          <li>✓ Email Support</li>
                        </ul>
                        <a
                          href="/signup"
                          className="btn btn custom-outline-green"
                        >
                          Choose Plan
                        </a>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div
                        className="card h-100 shadow-lg rounded-lg text-center p-4 "
                        style={{ border: "1px solid #065f46" }}
                      >
                        <h5 className="mb-2 text-title">Pro</h5>
                        <p className="text-muted">
                          For active and professional crypto traders.
                        </p>
                        <h3 className="my-3">
                          ₹3,299<span className="fs-6">/month</span>
                        </h3>
                        <ul className="list-unstyled mb-4">
                          <li>✓ All Starter Features</li>
                          <li>✓ Real-time Strategy Alerts</li>
                          <li>✓ Advanced Charting Tools</li>
                          <li>✓ Priority Email Support</li>
                        </ul>
                        <a href="/signup" className="btn btn custom-green-btn">
                          Choose Plan
                        </a>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card h-100 shadow-sm rounded-lg text-center p-4">
                        <h5 className="mb-2 text-title">Elite</h5>
                        <p className="text-muted">
                          For full-time traders and institutions.
                        </p>
                        <h3 className="my-3">
                          ₹5,999<span className="fs-6">/month</span>
                        </h3>
                        <ul className="list-unstyled mb-4">
                          <li>✓ All Pro Features</li>
                          <li>✓ API Access for Bots</li>
                          <li>✓ Strategy Customization</li>
                          <li>✓ Dedicated Manager</li>
                        </ul>
                        <a
                          href="/contact"
                          className="btn btn custom-outline-green"
                        >
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- Crypto Software - Plan Comparison --- */}
              <section
                className="section"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="container">
                  <div
                    className="section-head text-center mb-5"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                  >
                    <h6 className="overline-title text-[#27ae60]">
                      Crypto Trading Software
                    </h6>
                    <h2 className="title">
                      Compare Our Crypto Plans & Features
                    </h2>
                  </div>
                  <table
                    className="table table-bordered text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Starter</th>
                        <th>Pro</th>
                        <th>Elite</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-aos="fade-right" data-aos-delay="100">
                        <td>Real-time Crypto Signals</td>
                        <td>✔</td>
                        <td>✔</td>
                        <td>✔</td>
                      </tr>
                      <tr data-aos="fade-right" data-aos-delay="200">
                        <td>Advanced Charting Tools</td>
                        <td>Basic</td>
                        <td>Pro Charts</td>
                        <td>Elite Charts + Custom Indicators</td>
                      </tr>
                      <tr data-aos="fade-right" data-aos-delay="300">
                        <td>Crypto Strategy Backtesting</td>
                        <td>❌</td>
                        <td>✔</td>
                        <td>✔</td>
                      </tr>
                      <tr data-aos="fade-right" data-aos-delay="400">
                        <td>Multi-Exchange Support</td>
                        <td>Binance Only</td>
                        <td>Binance + Coinbase</td>
                        <td>All Major Exchanges</td>
                      </tr>
                      <tr data-aos="fade-right" data-aos-delay="500">
                        <td>Priority Support</td>
                        <td>Email</td>
                        <td>Email + WhatsApp</td>
                        <td>Dedicated Manager</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* --- Call to Action Section --- */}
              <section className="section text-center" data-aos="fade-up">
                <div className="container">
                  <div className="container text-center">
                    <h2>Start Trading with Global Algo Today!</h2>
                    <p>
                      Join us now to experience the next level of crypto
                      trading. Make smarter trades and maximize your profits.
                    </p>
                    <a href="/signup" className="btn btn-light btn-lg">
                      Get Started
                    </a>
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
