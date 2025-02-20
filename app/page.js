"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import RootLayout from "./layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [txt, setTxt] = useState("");
  const toRotate = ["Runs in all Market"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const faqContentLeft = [
    {
      question: "What is AI trading?",
      answer:
        "AI trading, also known as algorithmic trading or automated trading, refers to the use of artificial intelligence and machine learning algorithms to analyze financial markets, identify trading opportunities, and execute trades automatically without human intervention.",
    },
    {
      question: "How does Algo trading work?",
      answer:
        "Algo trading systems use historical market data to train machine learning models that recognize patterns and trends. These models are then used to make predictions about future market movements and generate trading signals. When certain conditions are met, the AI system executes trades based on predefined algorithms and rules.",
    },
    {
      question: "What are the advantages of Algo trading?",
      answer:
        "Algo trading offers several advantages including increased speed and efficiency in executing trades, the ability to process vast amounts of data in real-time, the elimination of human emotions from trading decisions, and the potential for better risk management and improved trading performance.",
    },
  ];
  
  const faqContentRight = [
    {
      question: "Is Algo trading suitable for beginners?",
      answer:
        "While Algo trading can be powerful, it’s important for beginners to understand the risks involved and have a basic understanding of financial markets and trading principles. Some Algo trading platforms offer user-friendly interfaces and educational resources to help beginners get started.",
    },
    {
      question: "How do I evaluate the performance of an Algo trading system?",
      answer:
        "The performance of an Algo trading system can be evaluated based on metrics such as profitability, risk-adjusted returns, drawdowns, win rate, and consistency of performance over time. It’s also important to consider factors such as transparency, reliability, and the track record of the Algo system provider.",
    },
    {
      question: "Can I customize the parameters of an Algo trading system?",
      answer:
        "Yes, many Algo trading platforms allow users to customize parameters such as risk tolerance, position sizing, trading frequency, and specific trading rules to align with their individual preferences and investment goals.",
    },
  ];
  

  const text = "uns in all Market";
  const period = 100;
  const [displayText, setDisplayText] = useState("R");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700 });
    const interval = setInterval(() => {
      if (textIndex === text.length) {
        setTextIndex(0);
        setDisplayText("R");
        return;
      }
      // Append one letter from the text to the display text
      setDisplayText((prevText) => prevText + text[textIndex]);
      // Move to the next letter in the text
      setTextIndex((prevIndex) => prevIndex + 1);
    }, period);
    return () => clearInterval(interval);
  }, [textIndex]);
  return (
    <RootLayout>
      <Layout>
        <div className="nk-app-root has-mask">
          <div className="nk-mask bg-pattern-dot-white-sm" />
          <header className="nk-header has-shape">
            <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x" />
            <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x" />
            <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x" />
            <Header />
          </header>
          <div className="relative">
            <div
              className=" top-0 left-0 "
              style={{ position: "absolute", zIndex: "0", height: "100%" }}
            >
              <img
                src={"/images/background.jpg"}
                className="w-full "
                alt="trading"
              />
            </div>
            <div
              className="nk-hero pt-4 pt-lg-4 pt-xl-4 pb-xl-4"
              style={{ zIndex: "1", position: "relative" }}
              data-aos="fade-up" // AOS fade-up effect for hero section
            >
              <div className="container">
                <div className="row g-gs align-items-center justify-content-center justify-content-xl-between flex-xl-row-reverse text-center text-xl-start">
                  <div className="col-xl-6 col-xxl-5 col-lg-6 col-md-12 col-sm-12">
                    <div
                      className="p-2 rounded-3 bg-gradient-primary"
                      data-aos="zoom-in" // AOS zoom-in effect for form section
                    >
                      <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <form
                            id="enquiry"
                            onSubmit={async (e) => {
                              e.preventDefault();

                              if (values?.phone?.length < 10) {
                                Swal.fire({
                                  title: "Error",
                                  text: "Phone number should be at least 10 characters",
                                  icon: "error",
                                });
                                return;
                              }

                              const currentUrl = window?.location?.href;
                              let updatedUrl;

                              if (
                                currentUrl &&
                                (currentUrl.startsWith("http://") ||
                                  currentUrl.startsWith("https://"))
                              ) {
                                updatedUrl = currentUrl.replace(
                                  /^(https?:\/\/)/,
                                  "www."
                                );
                              } else {
                                console.log(currentUrl);
                              }

                              try {
                                setloading(true);

                                const formData = {
                                  name: values.name,
                                  email: values.email,
                                  phone: values?.phone,
                                  referredBy: values?.referralId,
                                  createdBy: "6738bcd9c9afe54cf6b6d7b6", // Adding Referral ID
                                  organization: "6738bcd9c9afe54cf6b6d7b6", // Organization ID
                                  domain: updatedUrl.split("/")[0],
                                };
                                const res = await axios.post(
                                  "https://crm-backend-8w9h.onrender.com/api/leads/register",
                                  formData,
                                  {
                                    headers: {
                                      "Content-Type": "application/json",
                                      "x-api-secret": "my_secret", // Add your API secret here
                                    },
                                  }
                                );

                                if (res?.data?.status) {
                                  setloading(false);
                                  Swal.fire({
                                    title: "Success",
                                    text: res?.data?.message,
                                    icon: "success",
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      window.location.reload();
                                    }
                                  });
                                }
                              } catch (error) {
                                if (error?.response?.data?.message) {
                                  Swal.fire({
                                    title: "Error",
                                    text: error?.response?.data?.message,
                                    icon: "error",
                                  });
                                  // setTimeout(() => {
                                  //   window.location.reload();
                                  // }, 2000);
                                }
                                if (error?.response?.data?.errors?.email) {
                                  Swal.fire({
                                    title: "Error",
                                    text: error?.response?.data?.errors
                                      ?.email[0],
                                    icon: "error",
                                  });
                                }
                                if (error?.response?.data?.errors?.phone) {
                                  Swal.fire({
                                    title: "Error",
                                    text: error?.response?.data?.errors
                                      ?.phone[0],
                                    icon: "error",
                                  });
                                }
                                setloading(false);
                              }
                              setloading(false);
                            }}
                          >
                            <div className="row g-4">
                              <div className="col-12">
                                <div className="form-group">
                                  <h3 className="text-dark">
                                    Algo Trading Software
                                  </h3>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group text-start">
                                  <label
                                    className="form-label"
                                    htmlFor="yourname"
                                  >
                                    Your Name
                                  </label>
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      name="name"
                                      className="form-control form-control-lg"
                                      placeholder="Enter your name"
                                      required
                                      value={values?.name}
                                      onChange={(e) => {
                                        const inputValue = e.target.value;
                                        const sanitizedValue =
                                          inputValue.replace(/[^a-zA-Z ]/g, "");
                                        setValues((prev) => ({
                                          ...prev,
                                          name: sanitizedValue,
                                        }));
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group text-start">
                                  <label
                                    className="form-label"
                                    htmlFor="youremail"
                                  >
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
                                        const sanitizedValue =
                                          inputValue.replace(/[^0-9]/g, "");
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

                              <button className="btn-anim" type="submit">
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
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xxl-7 col-xl-6 col-lg-6 col-md-12 col-sm-12"
                    data-aos="fade-left" // AOS fade-left effect for hero content
                  >
                    <div className="nk-hero-content">
                      <h1
                        className="title- mb-3 mb-lg-4 display-5"
                        style={{ color: "#55b59e" }}
                      >
                    Revolutionize Your Trading with 
                        <br />
                        <span className="text-gradient-primary">
                        Elite Automation
                        </span>
                      </h1>
                      <p className="color-text">
                      Elevate your Forex trading in India with the power of AI and algorithmic strategies from Elitetrading Algo. Our innovative platform is designed to optimize your trading tactics and enhance market outcomes. Recognized with multiple awards for excellence in both futures and forex trading, we provide you with cutting-edge tools to drive consistent business growth. Join Elite Algo Trading today and take your trading experience to new heights of success.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className="nk-pages">
            <div className="container">
              <div
                className="section-content"
                data-aos="fade-up" // AOS fade-up effect for service cards section
              >
                <div className="row text-center g-gs justify-content-center">
                  <div className="col-md-6 col-xl-4">
                    <div className="pt-6 h-100">
                      <div
                        className="card h-100 rounded-4 border-0 shadow-sm"
                        data-aos="fade-up"
                      >
                        <div className="card-body">
                          <div className="feature">
                            <div className="feature-media mt-n8 mb-3">
                              <div className="media media-3xl media-middle media-border text-bg-primary-soft-outline rounded-4">
                                <em className="icon ni ni-speed" />
                              </div>
                            </div>
                            <div className="feature-text">
                              <h4 className="title">
                                Your Ultimate Trading Companion
                              </h4>
                              <p>
                                Elite Algo Trading is the ultimate advanced
                                algorithm trading software to elevate your forex
                                market strategy and results. Our artificial
                                intelligence trading software is designed to
                                give you a competitive edge in today’s market
                                with an intuitive interface and advanced AI
                                algorithms, Elite Algo Trading offers real-time
                                insights and actionable recommendations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Repeat similar AOS animations for other sections */}
                  <div className="col-md-6 col-xl-4" data-aos="fade-right">
                    <div className="pt-6 h-100">
                      <div className="card h-100 rounded-4 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="feature">
                            <div className="feature-media mt-n8 mb-3">
                              <div className="media media-3xl media-middle media-border text-bg-info-soft-outline rounded-4">
                                <em className="icon ni ni-edit" />
                              </div>
                            </div>
                            <div className="feature-text">
                              <h4 className="title">
                                Your Lifetime Partner in Trading Success
                              </h4>
                              <p>
                                At Elite Algo Trading, we are dedicated to
                                ensuring you long-term success by offering
                                lifetime support to all our users. From the
                                moment you join us, our expert team is here to
                                help you with setting up your account,
                                understanding our features, and resolving any
                                issues.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-4" data-aos="fade-left">
                    <div className="pt-6 h-100">
                      <div className="card h-100 rounded-4 border-0 shadow-sm">
                        <div className="card-body">
                          <div className="feature">
                            <div className="feature-media mt-n8 mb-3">
                              <div className="media media-3xl media-middle media-border text-bg-blue-soft-outline rounded-4">
                                <em className="icon ni ni-chat-msg" />
                              </div>
                            </div>
                            <div className="feature-text">
                              <h4 className="title">
                                Delivering Premium Trading Software
                              </h4>
                              <p>
                                Elite Algo Trading is the best algo trading app in
                                India, where we deliver advanced trading
                                software that is designed to help you trade
                                smarter and stay profitable. Our platform offers
                                the most advanced tools and features, coupled
                                with expert guidance to minimize losses and
                                maximize gains.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* You can continue adding AOS animations to other sections in a similar fashion */}
                </div>
              </div>
            </div>
            <section
              className="section section-bottom-0 has-shape has-mask"
              data-aos="fade-up"
            >
              <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
              <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
              <div className="container">
                <div className="section-head">
                  <div className="row justify-content-center text-center">
                    <div className="col-xl-8" data-aos="zoom-in">
                      <h2 className="title">Our Services</h2>
                    </div>
                  </div>
                </div>
                <div className="section-content">
  <div className="row text-center g-gs">
    <div className="col-md-6 col-xl-4" data-aos="fade-up">
      <a
        href="usecase-details.html"
        className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100"
      >
        <div className="card-body">
          <div className="feature">
            <div className="feature-media">
              <div className="media media-middle media-xl text-bg-success-soft rounded-pill">
                <em className="icon ni ni-globe" />
              </div>
            </div>
            <div className="feature-text text-base">
              <h3 className="title">Custom Algorithmic Strategies</h3>
              <p>
                Tailored to suit your trading goals, our expert team helps develop
                customized strategies to align with your risk profile and investment
                targets.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div
      className="col-md-6 col-xl-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <a
        href="usecase-details.html"
        className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100"
      >
        <div className="card-body">
          <div className="feature">
            <div className="feature-media">
              <div className="media media-middle media-xl text-bg-info-soft rounded-pill">
                <em className="icon ni ni-flag" />
              </div>
            </div>
            <div className="feature-text text-base">
              <h3 className="title">Automated Trade Execution</h3>
              <p>
                Seamlessly execute trades without manual intervention. Our algorithms
                work faster than human traders, ensuring you can capitalize on market
                opportunities instantly.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div
      className="col-md-6 col-xl-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <a
        href="usecase-details.html"
        className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100"
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
                Performance Analytics and Optimization
              </h3>
              <p>
                Track, analyze, and optimize your trading strategies. Our platform
                provides in-depth performance reports, allowing you to adjust your
                tactics for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div
      className="col-md-6 col-xl-4"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <a
        href="usecase-details.html"
        className="card card-hover-translate rounded-4 border-0 shadow-tiny h-100"
      >
        <div className="card-body">
          <div className="feature">
            <div className="feature-media">
              <div className="media media-middle media-xl text-bg-purple-soft rounded-pill">
                <em className="icon ni ni-percent" />
              </div>
            </div>
            <div className="feature-text text-base">
              <h3 className="title">Risk Management Tools</h3>
              <p>
                Built-in risk management features allow you to control your trading
                exposure with tools like automated stop-loss orders, take-profit
                strategies, and more.
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

            <section
              className="section section-lg section-bottom-0 has-shape"
              data-aos="fade-up"
            >
              <div className="container">
                <h3 className="text-center py-4" data-aos="zoom-in">
                  Our Products
                </h3>
                <div className="row g-gs w-full w-md-[70%] mx-auto">
                  <div className="col-lg-6" data-aos="fade-right">
                    <div className="card">
                      <div className="card-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="/images/forex.jpg"
                            className="w-full rounded"
                            style={{ height: "200px" }}
                          />
                        </div>
                        <h5 className="text-black text-center my-4">
                          Currency software
                        </h5>
                        <p className="card-text">
                        Gain the edge in currency trading with our state-of-the-art software, designed for smart, swift, and strategic trading.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-left">
                    <div className="card">
                      <div className="card-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="/images/CRYPTO_IMAGE.jpg"
                            className="w-full rounded"
                            style={{ height: "200px" }}
                          />
                        </div>
                        <h5 className="text-black text-center my-4">
                          Cryptography software
                        </h5>
                        <p className="card-text">
                        Seize the future of finance with our innovative crypto trading software, designed for seamless transactions and real-time market insights."
Indian Market Trading Software
Empower your trading with our intuitive software—where data meets opportunity in the Indian market."

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-right">
                    <div className="card">
                      <div className="card-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="/images/indian.jpg"
                            className="w-full rounded"
                            style={{ height: "200px" }}
                          />
                        </div>
                        <h5 className="text-black text-center my-4">
                          Indian market software
                        </h5>
                        <p className="card-text">
                        Unlock the power of automated trading with advanced algorithms tailored for the Indian market.
                         Maximize your profits and minimize risks with cutting-edge solutions designed for smarter, faster trades."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-left">
                    <div className="card">
                      <div className="card-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="/images/commodity.jpg"
                            className="w-full rounded"
                            style={{ height: "200px" }}
                          />
                        </div>
                        <h5 className="text-black text-center my-4">
                          Commodity software
                        </h5>
                        <p className="card-text">
                        
Transform your trading strategy with our advanced forex commodity software,
 engineered for precision and insight in the COMMODITIES market.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-right">
                    <div className="card">
                      <div className="card-body">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="/images/forex.jpg"
                            className="w-full rounded"
                            style={{ height: "200px" }}
                          />
                        </div>
                        <h5 className="text-black text-center my-4">
                          Forex currency Software
                        </h5>
                        <p className="card-text">
                          Secure the forex currency trading with our exclusive
                          Forex AI trading software for fast and secure
                          transactions on web and mobile applications. With our
                          customized trading app you can view trading charts,
                          trading central opportunities, and get access to risk
                          management tools and integrated analysis of market
                          study.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="section section-lg section-bottom-0 has-shape p-2"
              data-aos="fade-up"
              style={{
                backgroundImage: "url(/assets/images/infinity-grid-a.png)",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <h4 className="text-center py-4" data-aos="zoom-in">
                  Why Choose Your Company Elite Algo Trading AlgoTrading
                </h4>
                <div className="section-content">
  <div
    className="row g-gs"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div className="col-lg-5" data-aos="fade-right">
      <div className="card bg-gradient-light border-0 h-100">
        <div className="card-body p-3 d-flex">
          <div className="feature feature-inline align-items-center">
            <div className="feature-text me-auto">
              <h4 className="title">Precision and Accuracy</h4>
              <p>
                Algo trading uses advanced algorithms to execute trades with
                pinpoint accuracy, ensuring you never miss an opportunity in the
                fast-paced market.
              </p>
            </div>
            <div className="feature-decoration flex-shrink-0">
              <img src="assets/images/1.png" alt="precision-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-5" data-aos="fade-left">
      <div className="card bg-gradient-light border-0 h-100">
        <div className="card-body p-3 d-flex">
          <div className="feature feature-inline align-items-center">
            <div className="feature-text me-auto">
              <h4 className="title">24/7 Trading Capability</h4>
              <p>
                Automated systems work round-the-clock, allowing you to
                capitalize on market movements even when you're offline.
              </p>
            </div>
            <div className="feature-decoration flex-shrink-0">
              <img src="assets/images/1.png" alt="trading-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-5" data-aos="fade-right">
      <div className="card bg-gradient-light border-0 h-100">
        <div className="card-body p-3 d-flex">
          <div className="feature feature-inline align-items-center">
            <div className="feature-text me-auto">
              <h4 className="title">Risk Management</h4>
              <p>
                Our algorithms incorporate risk management strategies, such as
                stop-loss and take-profit levels, minimizing potential losses
                while maximizing gains.
              </p>
            </div>
            <div className="feature-decoration flex-shrink-0">
              <img src="assets/images/1.png" alt="risk-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-5" data-aos="fade-left">
      <div className="card bg-gradient-light border-0 h-100">
        <div className="card-body p-3 d-flex">
          <div className="feature feature-inline align-items-center">
            <div className="feature-text me-auto">
              <h4 className="title">Emotion-Free Trading</h4>
              <p>
                Eliminate emotional decision-making. Algorithms follow a set
                strategy without being influenced by market sentiment, leading
                to more consistent and objective results.
              </p>
            </div>
            <div className="feature-decoration flex-shrink-0">
              <img src="assets/images/1.png" alt="emotion-free-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-5" data-aos="fade-right">
      <div className="card bg-gradient-light border-0 h-100">
        <div className="card-body p-3 d-flex">
          <div className="feature feature-inline align-items-center">
            <div className="feature-text me-auto">
              <h4 className="title">Backtested Strategies</h4>
              <p>
                Our systems use historical data to test strategies before
                implementation, ensuring they are optimized for market
                conditions.
              </p>
            </div>
            <div className="feature-decoration flex-shrink-0">
              <img src="assets/images/1.png" alt="backtest-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


              </div>
            </section>

            <section
              className="section section-lg section-bottom-0"
              data-aos="fade-up"
            >
              <div className="container">
                <div className="section-content">
                  <div className="row gx-5 gy-6 align-items-center">
                    <div
                      className="col-lg-6 col-xl-6 col-md-12 col-sm-12"
                      data-aos="fade-right"
                    >
                      <div className="block-gfx me-lg-0 my-lg-0">
                        <img
                          className=""
                          src="/images/about.jpg"
                          alt="indicator-screen"
                          style={{ position: "relative", height: "500px" }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-xl-6 col-md-12 col-sm-12"
                      data-aos="fade-left"
                    >
                      <div className="row">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Benefit of Our{" "}
                          <span style={{ color: "red" }}>Amazing Bot</span>
                        </h2>
                        <div>
                          <div className="mt-1">
                            <div className="card-body">
                              <h3 className="text-balck my-4">
                                ONE TIME SETUP
                              </h3>
                              <p className="card-text">
                                Our trading bot requires only a one-time setup,
                                making it incredibly user-friendly. Once
                                configured, you can start trading with minimal
                                effort and enjoy seamless performance without
                                constant adjustments.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mt-1">
                            <div className="card-body">
                              <h3 className="text-balck my-4">
                                Robust Algorithmic Trading Results
                              </h3>
                              <p className="card-text">
                                Experience top-tier performance with our robust
                                algorithmic trading results. Our bot leverages
                                advanced strategies to ensure consistent profits
                                and minimize risks, keeping you ahead in the
                                market.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mt-1">
                            <div className="card-body">
                              <h3 className="text-balck my-4">
                                Pre-Built Options
                              </h3>
                              <p className="card-text">
                                Our platform comes with a variety of pre-built
                                options, allowing you to choose strategies that
                                best suit your trading style. These options make
                                it easy to start trading effectively right away,
                                even if you're new to the market.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="container mt-5" data-aos="fade-up">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center">How It Works</h2>
                </div>
              </div>
              <div className="container">
  <div className="row g-gs">
    <div className="col-md-6 col-xl-4" data-aos="fade-up">
      <div className="card rounded-4 border-0 shadow-sm h-100">
        <div className="card-body">
          <div className="feature">
            <div className="feature-media">
              <div className="media media-middle media-lg text-white bg-primary rounded-3">
                <em className="icon ni ni-globe" />
              </div>
            </div>
            <div className="feature-text">
              <h5 className="text-black">Strategy Design</h5>
              <p>
                Our experts work with you to understand your goals, trading
                preferences, and risk tolerance, then design an algorithmic
                strategy tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      className="col-md-6 col-xl-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="card rounded-4 border-0 shadow-sm h-100">
        <div className="card-body">
          <div className="feature">
            <div className="feature-media">
              <div className="media media-middle media-lg text-white bg-info rounded-3">
                <em className="icon ni ni-flag" />
              </div>
            </div>
            <div className="feature-text">
              <h5 className="text-black">Backtesting</h5>
              <p>
                We rigorously test the strategy against historical data to
                ensure optimal performance under various market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      className="col-md-6 col-xl-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="card rounded-4 border-0 shadow-sm h-100">
        <div className="card-body">
          <div className="feature">
            <div className="feature-media">
              <div className="media media-middle media-lg text-white bg-purple rounded-3">
                <em className="icon ni ni-edit" />
              </div>
            </div>
            <div className="feature-text">
              <h5 className="text-black">Deployment</h5>
              <p>
                Once optimized, the algorithm is deployed on our secure
                platform, ready to execute trades automatically according to
                your specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      className="col-md-6 col-xl-4"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="card rounded-4 border-0 shadow-sm h-100">
        <div className="card-body">
          <div className="feature">
            <div className="feature-media">
              <div className="media media-middle media-lg text-white bg-warning rounded-3">
                <em className="icon ni ni-signal" />
              </div>
            </div>
            <div className="feature-text">
              <h5 className="text-black">Ongoing Support and Optimization</h5>
              <p>
                Our team provides continuous monitoring, support, and
                adjustments to ensure your algorithm performs at its best in
                changing market environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>

            <section
              className="section section-lg has-shape"
              data-aos="fade-up"
            >
              <div className="container">
                <div className="nk-shape bg-shape-wormhole-a mt-n45p mt-xl-n40p mt-xxl-n35p ms-2 start-50 top-100 translate-middle-x" />
                <div className="section-head">
                  <div className="row justify-content-center text-center">
                    <div
                      className="col-lg-9 col-xl-7 col-xxl-8"
                      data-aos="zoom-in"
                    >
                      <h2 className="title h3">FREQUENTLY ASKED QUESTIONS</h2>
                      <p>
                        Contact Elite Algo Trading for expert support on AI and
                        algorithmic trading. Reach out for inquiries,
                        assistance, or more information about our innovative
                        trading solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="section-content">
  <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="row justify-content-center pt-50">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        {faqContentLeft.map((faq, index) => (
          <div
            className="border-0 shadow mb-2 p-2 rounded"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            key={index}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-semibold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapseLeft${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapseLeft${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`flush-collapseLeft${index}`}
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        {faqContentRight.map((faq, index) => (
          <div
            className="border-0 shadow mb-2 p-2 rounded"
            data-aos="fade-up"
            data-aos-delay={`${index * 100 + 500}`}
            key={index}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-semibold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapseRight${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapseRight${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`flush-collapseRight${index}`}
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

              </div>
            </section>

            <div className="container" data-aos="fade-up">
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
                  <div className="col-lg-4" data-aos="zoom-in">
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
                          Using Elite Algo Trading's forex trading software has
                          been a game-changer for me. Its consistency in
                          generating profits has truly surpassed my
                          expectations. With Elite Algo Trading, I've seen a
                          significant improvement in my trading performance and
                          efficiency. I highly recommend Elite Algo Trading to any
                          trader looking for a reliable and innovative trading
                          software solution.
                        </p>
                        <div className="d-flex pt-3">
                          <div className="media media-lg media-middle media-lg rounded-pill">
                            <img src="/images/img3.png" alt="" />
                          </div>
                          <div className="media-info ms-3">
                            <h5 className="mb-1">Danup Dulgacha</h5>
                            <div className="sub-text">
                              Area Sales Manager, Medmanor organics Mumbai
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
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
                          Having been a seasoned trader for over 15 years, I've
                          encountered numerous trading software solutions.
                          However, my experience with Elite Algo Trading has been
                          unparalleled. Their platform offers a seamless trading
                          experience, equipped with advanced features and an
                          intuitive interface that streamlines my trading
                          activities.
                        </p>
                        <div className="d-flex pt-3">
                          <div className="media media-lg media-middle media-lg rounded-pill">
                            <img src="/images/img2.png" alt="" />
                          </div>
                          <div className="media-info ms-3">
                            <h5 className="mb-1">Manohar PR</h5>
                            <div className="sub-text">
                              Ex G.M. M/s Mayor Electro Ceramics Pvt Ltd,
                              Rairangpur, Orissa
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
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
                          Before discovering Elite Algo Trading, my days were
                          consumed by work, leaving me little time to pursue my
                          interest in trading. However, since signing up with
                          Elite Algo Trading, everything has changed. Their
                          trading software is not only user-friendly but also
                          incredibly powerful, allowing me to engage in trading
                          seamlessly despite my busy schedule. What truly sets
                          them apart though is their exceptional service and
                          support.
                        </p>
                        <div className="d-flex pt-3">
                          <div className="media media-lg media-middle media-lg rounded-pill">
                            <img src="/images/img1.png" alt="" />
                          </div>
                          <div className="media-info ms-3">
                            <h5 className="mb-1">Indrajeet Kumar</h5>
                            <div className="sub-text">
                              Assistant Manager, Aye Finance Pvt Ltd, New Delhi
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </RootLayout>
  );
}
