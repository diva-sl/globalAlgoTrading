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
    title: "Commodity Market Trading Software - Global Algo Trading",
    description:
      "Explore the commodity markets with Global Algo Trading’s intelligent trading software—designed for data-driven decisions and optimal performance.",
    canonical: "https://algotradingelite.com/commodity-market",
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
                    <h6 className="overline-title">Commodity Market</h6>
                    <h2 className="title h1">
                      Advanced Algo Trading for Commodity Markets
                    </h2>
                    <p className="lead text-muted mt-2">
                      Utilize powerful algorithms to trade and invest in global
                      commodity markets efficiently.
                    </p>
                  </div>
                  <div className="section-content row g-gs align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                      <img
                        src="/images/commodity1.jpg"
                        className="rounded-lg shadow-lg"
                        style={{
                          height: "300px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt="Commodity Market Trading"
                      />
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                      <h5 className="mb-3">
                        Leverage automated strategies to make smarter commodity
                        trades with precision.
                      </h5>
                      <p className="text-muted">
                        Global Algo Trading provides a comprehensive trading
                        platform designed for the global commodity markets. With
                        powerful technical indicators, backtesting, and
                        automated strategies, our software empowers you to make
                        informed and timely decisions in fast-moving commodity
                        markets.
                      </p>
                      <ul className="btn-list btn-list-inline gy-0 mt-4">
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
                  <div
                    className="section-head text-center"
                    data-aos="zoom-in-up"
                  >
                    <h6 className="overline-title">Why Choose Us</h6>
                    <h2 className="title">
                      Key Features of Our Commodity Trading Software
                    </h2>
                    <p className="lead text-muted mt-2">
                      Empowering traders to dominate the commodity markets with
                      speed and precision.
                    </p>
                  </div>
                  <div className="row g-gs pt-4">
                    {[
                      {
                        title: "Real-Time Commodity Alerts",
                        desc: "Receive immediate alerts for buy/sell signals based on algorithmic strategies tailored to commodity market dynamics.",
                      },
                      {
                        title: "Backtesting with Global Commodity Data",
                        desc: "Backtest your strategies using historical data from leading global commodity exchanges for optimal decision-making.",
                      },
                      {
                        title: "Multi-Commodity Trading Support",
                        desc: "Trade commodities across various sectors such as metals, energy, agriculture, and more with one integrated platform.",
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
              <section className="section bg-light" data-aos="fade-up">
                <div className="container">
                  <div
                    className="section-head text-center mb-5"
                    data-aos="zoom-in-up"
                  >
                    <h6 className="overline-title">Our Plans</h6>
                    <h2 className="title">Flexible Pricing for Every Trader</h2>
                    <p className="lead text-muted">
                      Choose a plan that fits your commodity trading goals.
                    </p>
                  </div>

                  <div className="row g-gs">
                    {/* Starter Plan */}
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="card h-100 shadow-sm rounded-lg text-center p-4">
                        <h5 className="mb-2 text-title">Starter</h5>
                        <p className="text-muted">
                          For beginners starting with commodity markets.
                        </p>
                        <h3 className="my-3">
                          ₹1,199<span className="fs-6">/month</span>
                        </h3>
                        <ul className="list-unstyled mb-4">
                          <li>✓ Real-time Commodity Alerts</li>
                          <li>✓ Basic Backtesting Features</li>
                          <li>✓ Email Support</li>
                        </ul>
                        <a href="/signup" className="btn custom-outline-green">
                          Choose Plan
                        </a>
                      </div>
                    </div>

                    {/* Pro Plan */}
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div
                        className="card h-100 shadow-lg rounded-lg text-center p-4"
                        style={{ border: "1px solid #065f46" }}
                      >
                        <h5 className="mb-2 text-title">Pro</h5>
                        <p className="text-muted">
                          For active traders in the commodity markets.
                        </p>
                        <h3 className="my-3">
                          ₹2,799<span className="fs-6">/month</span>
                        </h3>
                        <ul className="list-unstyled mb-4">
                          <li>✓ All Starter Features</li>
                          <li>✓ Advanced Backtesting Tools</li>
                          <li>✓ Priority Email Support</li>
                          <li>✓ Access to Strategy Marketplace</li>
                        </ul>
                        <a href="/signup" className="btn custom-green-btn">
                          Choose Plan
                        </a>
                      </div>
                    </div>

                    {/* Elite Plan */}
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="card h-100 shadow-sm rounded-lg text-center p-4">
                        <h5 className="mb-2 text-title">Elite</h5>
                        <p className="text-muted">
                          For institutions and high-volume commodity traders.
                        </p>
                        <h3 className="my-3">
                          ₹5,499<span className="fs-6">/month</span>
                        </h3>
                        <ul className="list-unstyled mb-4">
                          <li>✓ All Pro Features</li>
                          <li>✓ Dedicated Support Manager</li>
                          <li>✓ Custom Algo Integrations</li>
                          <li>✓ WhatsApp & Phone Support</li>
                        </ul>
                        <a href="/contact" className="btn custom-outline-green">
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* --- Commodity Software - Plan Comparison --- */}
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
                      Commodity Trading Software
                    </h6>
                    <h2 className="title">
                      Compare Our Commodity Plans & Features
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
                        <td>Real-time Commodity Signals</td>
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
                        <td>Commodity Strategy Backtesting</td>
                        <td>❌</td>
                        <td>✔</td>
                        <td>✔</td>
                      </tr>
                      <tr data-aos="fade-right" data-aos-delay="400">
                        <td>Multi-Exchange Support</td>
                        <td>MCX Only</td>
                        <td>MCX + NCDEX</td>
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

              <section
                className="section text-center bg-white"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="container">
                  <h2 className="title mb-3">
                    Ready to Transform Your Trading Journey?
                  </h2>
                  <p className="lead mb-4">
                    Join thousands of Indian traders using Global Algo Trading
                    software for smarter trades.
                  </p>
                  <a href="/signup" className="btn btn-lg custom-green-btn">
                    Start Free Trial
                  </a>
                </div>
              </section>
            </main>
          </div>
        </Layout>
      </main>
    </RootLayout>
  );
}
