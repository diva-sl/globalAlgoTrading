"use client";
import dynamic from "next/dynamic";

import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import RootLayout from "./layout";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBullseye,
  FaAlarmClock,
  FaInfinity,
  FaRegClock,
  FaShieldAlt,
  FaChartLine,
  FaRegSmile,
  FaRegSmileBeam,
  FaBrain,
  FaHistory,
  FaSearchPlus,
  FaCogs,
} from "react-icons/fa";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function Home() {
  const [txt, setTxt] = useState("");
  const toRotate = ["Runs in all Market"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);

  const cardData = [
    {
      id: 1,
      heading: "Your Ultimate Trading Companion",
      content: `Global Algo Trading is your go-to advanced
                algorithmic trading software, built to transform
                your forex and financial market strategies. With
                powerful artificial intelligence at its core,
                our platform offers intuitive tools and
                real-time insights to help you stay ahead. Gain
                a competitive advantage with Global Algo
                Trading's smart recommendations and streamlined
                user experience.`,
      lottieAnimation: "/animations/companion.json",
      image: "/images/companion.jpg",
    },
    {
      id: 2,
      heading: "Your Lifetime Partner in Trading Success",
      content: `At Global Algo Trading, we're committed to your
                long-term success by providing lifetime support
                to every user. From the moment you get started,
                our dedicated team is here to guide you through
                account setup, feature usage, and any technical
                assistance you need. We ensure you’re never
                trading alone.`,
      lottieAnimation: "/animations/lifetime.json",
      image: "/images/lifetime.jpg",
    },
    {
      id: 3,
      heading: "Delivering Premium Trading Software",
      content: `Global Algo Trading is a leading provider of
                cutting-edge algorithmic trading software,
                designed to empower traders with smarter
                strategies and consistent profitability. Our
                platform combines powerful tools, real-time
                analytics, and expert support to help you reduce
                risk and enhance your trading performance.`,
      lottieAnimation: "/animations/premium.json",
      image: "/images/premium.jpg",
    },
  ];

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
      question: "What is AI-based Global Algo Trading?",
      answer:
        "AI-based global algorithmic trading uses artificial intelligence and machine learning to analyze global financial markets, identify trading opportunities, and automatically execute trades based on predictive models — all with minimal human intervention.",
    },
    {
      question: "How does GlobalAlgoTrading work?",
      answer:
        "GlobalAlgoTrading connects with major financial markets, leverages AI to analyze real-time and historical data, identifies patterns, and executes trades based on advanced algorithms. The system is designed to optimize decision-making speed, reduce emotional bias, and enhance performance.",
    },
    {
      question: "What are the key benefits of Global Algo Trading?",
      answer:
        "GlobalAlgoTrading offers fast execution, 24/7 monitoring, access to global markets, real-time data analysis, and emotion-free decision-making. It improves consistency and helps traders minimize risk while maximizing returns.",
    },
  ];

  const faqContentRight = [
    {
      question: "Is Global Algo Trading beginner-friendly?",
      answer:
        "Yes. GlobalAlgoTrading is designed for both experienced traders and beginners. We offer an intuitive dashboard, educational resources, and risk-managed strategies to help anyone start trading with confidence.",
    },
    {
      question: "How do I evaluate the performance of your trading system?",
      answer:
        "We provide transparent metrics like win rate, average returns, drawdown levels, and backtested results. You can monitor your strategy’s performance in real-time and analyze historical performance via your dashboard.",
    },
    {
      question: "Can I customize my trading strategy?",
      answer:
        "Absolutely. Our platform allows you to configure risk tolerance, trade frequency, asset focus (stocks, forex, crypto), and more — giving you full control while our AI handles execution.",
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
          <div
            className="nk-hero"
            style={{
              backgroundImage: "url('/images/trade4.webp')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              zIndex: 1,
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
            data-aos="fade-up"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col xl:flex-row items-center justify-between gap-2">
                {/* Left Content */}
                <div className="w-full xl:w-1/2">
                  <div className="verified-badge mb-3">
                    <img
                      src="https://cdn.prod.website-files.com/667bb1998f30b0a6e45b1e26/667bf1cfd046d39798d6b0e4_tick.svg"
                      alt="Verified"
                    />
                    <p>Empowering Next-Gen Traders</p>
                  </div>
                  <h1
                    className="text-4xl font-bold mb-2 leading-tight"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #065f46, #047857, #059669)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Global, Intelligent
                  </h1>
                  <h1 className="text-4xl font-bold text-green mb-2 leading-tight">
                    Automated &
                  </h1>
                  <h1
                    className="text-4xl font-bold mb-4 leading-tight"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #86efac, #4ade80, #22c55e)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Seamless Trading
                  </h1>
                  <p className="text-gray-600 text-base mb-6">
                    Unlock the power of AI-driven algorithms to automate your
                    trading strategies with precision. Built for global markets,
                    no coding required.
                  </p>
                  <a href="#" className="cta-button inline-block">
                    Get Started
                  </a>
                </div>

                {/* Right Video */}
                <div className="w-full xl:w-1/2">
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{
                      width: "100%",
                      maxHeight: "100%",
                    }}
                  >
                    <video
                      id="homeVideo"
                      poster="https://webflowbackend.utradealgos.com/api/uploads/utrade-ai-assistant-thumbnail.jpg"
                      src="https://webflowbackend.utradealgos.com/api/uploads/uTrade_AI_Assistant_FF.mp4"
                      controls
                      loop
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                        height: "100%", // Allow video to grow naturally
                        objectFit: "cover",
                        marginTop: "50px", // Add margin at the bottom
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="nk-pages">
            <div className="container">
              <div className="section-content" data-aos="fade-up">
                <div className="row text-center g-gs justify-content-center">
                  <div className="col-md-6 col-xl-4">
                    <div className="pt-6 h-100">
                      <div
                        className="card h-100 rounded-4 border-0 shadow-sm"
                        data-aos="fade-up"
                      >
                        <div
                          className="card-body"
                          style={{
                            border: "1px solid #10b981", // Medium gray border
                            borderRadius: "8px", // Optional: soft rounded corners
                            padding: "16px", // Optional: inner spacing
                          }}
                        >
                          <div className="feature">
                            <div className="feature-text">
                              <LottiePlayer
                                autoplay
                                loop
                                src="/animations/Animation - 1746624832702.json"
                                style={{ width: "160px", height: "180px" }}
                              />
                              <h4 className="title">
                                Your Ultimate Trading Companion
                              </h4>
                              <p>
                                Global Algo Trading is your go-to advanced
                                algorithmic trading software, built to transform
                                your forex and financial market strategies. With
                                powerful artificial intelligence at its core,
                                our platform offers intuitive tools and
                                real-time insights to help you stay ahead. Gain
                                a competitive advantage with Global Algo
                                Trading's smart recommendations and streamlined
                                user experience.
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
                        <div
                          className="card-body"
                          style={{
                            border: "1px solid #10b981", // Medium gray border
                            borderRadius: "8px", // Optional: soft rounded corners
                            padding: "16px", // Optional: inner spacing
                          }}
                        >
                          <div className="feature">
                            <div className="feature-text">
                              <LottiePlayer
                                autoplay
                                loop
                                src="/animations/Animation - 1746625002707.json"
                                style={{ width: "160px", height: "180px" }}
                              />
                              <h4 className="title">
                                Your Lifetime Partner in Trading Success
                              </h4>
                              <p>
                                At Global Algo Trading, we're committed to your
                                long-term success by providing lifetime support
                                to every user. From the moment you get started,
                                our dedicated team is here to guide you through
                                account setup, feature usage, and any technical
                                assistance you need. We ensure you’re never
                                trading alone.
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
                        <div
                          className="card-body"
                          style={{
                            border: "1px solid #10b981", // Medium gray border
                            borderRadius: "8px", // Optional: soft rounded corners
                            padding: "16px", // Optional: inner spacing
                          }}
                        >
                          <div className="feature">
                            <div className="feature-text">
                              <LottiePlayer
                                autoplay
                                loop
                                src="/animations/Animation - 1746624925424.json"
                                style={{ width: "160px", height: "180px" }}
                              />
                              <h4 className="title">
                                Delivering Premium Trading Software
                              </h4>
                              <p>
                                Global Algo Trading is a leading provider of
                                cutting-edge algorithmic trading software,
                                designed to empower traders with smarter
                                strategies and consistent profitability. Our
                                platform combines powerful tools, real-time
                                analytics, and expert support to help you reduce
                                risk and enhance your trading performance.
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
                        <div
                          className="card-body"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255, 99, 132, 0.25), rgba(255, 99, 132, 0.10))",
                            borderRadius: "16px",
                          }}
                        >
                          <div className="feature">
                            <div className="feature-media">
                              <LottiePlayer
                                autoplay
                                loop
                                src="/animations/Animation - 1746623321216.json"
                                style={{ width: "160px", height: "120px" }}
                              />
                            </div>
                            <div className="feature-text text-base">
                              <h3
                                className="title"
                                style={{ fontWeight: "bold" }}
                              >
                                Custom Algorithmic Strategies
                              </h3>
                              <p>
                                At Global Algo Trading, we craft personalized
                                algorithmic strategies designed to align with
                                your unique trading goals, risk appetite, and
                                investment objectives—giving you a strategic
                                edge in dynamic markets.
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
                        <div
                          className="card-body"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255, 99, 132, 0.25), rgba(255, 99, 132, 0.10))",
                            borderRadius: "16px",
                          }}
                        >
                          <div className="feature">
                            <div className="feature-media">
                              <LottiePlayer
                                autoplay
                                loop
                                src="/animations/Animation - 1746687412700.json"
                                style={{ width: "160px", height: "120px" }}
                              />
                            </div>
                            <div className="feature-text text-base"></div>
                            <div className="feature-text text-base">
                              <h3
                                className="title"
                                style={{ fontWeight: "bold" }}
                              >
                                Automated Trade Execution
                              </h3>
                              <p>
                                Experience seamless, automated trade execution
                                with Global Algo Trading. Our advanced
                                algorithms execute trades faster than human
                                traders, ensuring that you can instantly
                                capitalize on profitable market opportunities.
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
                        <div
                          className="card-body"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255, 99, 132, 0.25), rgba(255, 99, 132, 0.10))",
                            borderRadius: "16px",
                          }}
                        >
                          <div className="feature">
                            <div className="feature-media">
                              <LottiePlayer
                                autoplay
                                loop
                                src="/animations/Animation - 1746687025804.json"
                                style={{ width: "160px", height: "120px" }}
                              />
                            </div>
                            <div className="feature-text text-base">
                              <h3
                                className="title"
                                style={{ fontWeight: "bold" }}
                              >
                                Performance Analytics and Optimization
                              </h3>
                              <p>
                                Track, analyze, and optimize your trading
                                strategies with Global Algo Trading. Our
                                platform provides detailed performance reports,
                                empowering you to refine your tactics for
                                sustained success and continuous growth.
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
                        <div
                          className="card-body"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255, 99, 132, 0.25), rgba(255, 99, 132, 0.10))",
                            borderRadius: "16px",
                          }}
                        >
                          <div className="feature">
                            <div className="feature-media">
                              <LottiePlayer
                                autoplay
                                loop
                                src="/animations/Animation - 1746687983841.json"
                                style={{ width: "160px", height: "120px" }}
                              />
                            </div>
                            <div className="feature-text text-base">
                              <h3
                                className="title"
                                style={{ fontWeight: "bold" }}
                              >
                                Risk Management Tools
                              </h3>
                              <p>
                                Built-in risk management features at Global Algo
                                Trading empower you to control your trading
                                exposure. With tools like automated stop-loss
                                orders, take-profit strategies, and more, we
                                ensure that you can trade with peace of mind.
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
              className="section section-lg section-bottom-0 has-shape mt-10 mb-10"
              data-aos="fade-up"
              style={{
                backgroundColor: "#ebf8ff", // Light off-white gray
              }}
            >
              <div className="container">
                <h3 className="text-center py-4" data-aos="zoom-in">
                  Our Products
                </h3>
                <div className="row g-gs w-full w-md-[70%] mx-auto">
                  <div className="col-lg-6" data-aos="fade-right">
                    <div
                      className="card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: "8px",
                        boxShadow: "4px 4px 8px rgba(16, 185, 129, 0.3)", // Greenish bottom-right shadow
                      }}
                    >
                      <div className="card-body" style={{ flexGrow: 1 }}>
                        {/* Image Section */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px",
                          }}
                        >
                          <img
                            src="/images/currency.jpg"
                            className="w-full rounded-lg shadow-lg"
                            style={{
                              height: "300px", // Fixed height for all images
                              objectFit: "cover", // Ensures the image covers the container
                            }}
                          />
                        </div>

                        {/* Title Section */}
                        <h5
                          className="text-black text-center my-4"
                          style={{
                            fontSize: "1.25rem", // Larger font size for the title
                            fontWeight: "bold", // Bold title
                            color: "#333", // Slightly darker text color
                            letterSpacing: "0.5px", // Slightly spaced letters
                          }}
                        >
                          Currency Software
                        </h5>

                        {/* Paragraph Text Section */}
                        <p
                          className="card-text"
                          style={{
                            color: "#555", // Lighter gray for text for better readability
                            fontSize: "1rem", // Standard font size for text
                            lineHeight: "1.6", // Increase line height for better readability
                            marginBottom: "16px", // Space below the paragraph
                          }}
                        >
                          Gain a competitive edge in currency trading with
                          Global Algo Trading’s state-of-the-art software, built
                          for smart, swift, and strategic market decisions.
                        </p>

                        {/* Button Section */}
                        <div
                          className="text-center"
                          style={{
                            marginTop: "16px",
                            transition: "transform 0.3s ease-in-out", // Smooth hover transition
                          }}
                        >
                          <a
                            href="#"
                            className="cta-button inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                            style={{
                              textDecoration: "none",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Repeat for other cards */}
                  <div className="col-lg-6" data-aos="fade-left">
                    <div
                      className="card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: "8px",
                        boxShadow: "4px 4px 8px rgba(16, 185, 129, 0.3)", // Greenish bottom-right shadow
                      }}
                    >
                      <div className="card-body" style={{ flexGrow: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px",
                          }}
                        >
                          <img
                            src="/images/crypto.jpg"
                            className="w-full rounded-lg shadow-lg"
                            style={{
                              height: "300px",
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>

                        <h5
                          className="text-black text-center my-4 text-lg sm:text-xl md:text-2xl"
                          style={{
                            fontWeight: "bold",
                            color: "#333",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Cryptography Software
                        </h5>

                        <p
                          className="card-text text-sm sm:text-base md:text-lg"
                          style={{
                            color: "#555",
                            lineHeight: "1.6",
                            marginBottom: "16px",
                          }}
                        >
                          Seize the future of finance with Global Algo Trading’s
                          innovative crypto trading software, built for seamless
                          transactions and real-time market insights.
                          <strong>Indian Market Trading Software:</strong>{" "}
                          Empower your trading with our intuitive software—where
                          data meets opportunity in the Indian market.
                        </p>

                        <div
                          className="text-center"
                          style={{
                            marginTop: "16px",
                            transition: "transform 0.3s ease-in-out",
                          }}
                        >
                          <a
                            href="#"
                            className="cta-button inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 sm:px-8 sm:py-3"
                            style={{
                              textDecoration: "none",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-right">
                    <div
                      className="card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: "8px",
                        boxShadow: "4px 4px 8px rgba(16, 185, 129, 0.3)", // Greenish bottom-right shadow
                      }}
                    >
                      <div className="card-body" style={{ flexGrow: 1 }}>
                        {/* Image Section */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px",
                          }}
                        >
                          <img
                            src="/images/india_stock.jpg"
                            className="rounded-lg shadow-lg"
                            style={{
                              height: "300px", // Fixed height for all images
                              width: "100%",
                              objectFit: "cover", // Ensures the image covers the container
                            }}
                          />
                        </div>

                        {/* Title Section */}
                        <h5
                          className="text-black text-center my-4 text-lg sm:text-xl md:text-2xl"
                          style={{
                            fontWeight: "bold",
                            color: "#333",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Indian Market Software
                        </h5>

                        {/* Paragraph Section */}
                        <p
                          className="card-text text-sm sm:text-base md:text-lg"
                          style={{
                            color: "#555",
                            lineHeight: "1.6",
                            marginBottom: "16px",
                          }}
                        >
                          Unlock the power of automated trading with advanced
                          algorithms tailored for the Indian market. Maximize
                          your profits and minimize risks with cutting-edge
                          solutions designed for smarter, faster trades.
                        </p>

                        {/* Learn More Button Section */}
                        <div
                          className="text-center"
                          style={{
                            marginTop: "16px",
                            transition: "transform 0.3s ease-in-out", // Smooth hover transition
                          }}
                        >
                          <a
                            href="#"
                            className="cta-button inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 sm:px-8 sm:py-3"
                            style={{
                              textDecoration: "none",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" data-aos="fade-left">
                    <div
                      className="card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: "8px",
                        boxShadow: "4px 4px 8px rgba(16, 185, 129, 0.3)", // Greenish bottom-right shadow
                      }}
                    >
                      <div className="card-body" style={{ flexGrow: 1 }}>
                        {/* Image Section */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px",
                          }}
                        >
                          <img
                            src="/images/commodity1.jpg"
                            className="rounded-lg shadow-lg"
                            style={{
                              height: "300px", // Fixed height for all images
                              width: "100%",
                              objectFit: "cover", // Ensures the image covers the container
                            }}
                          />
                        </div>

                        {/* Title Section */}
                        <h5
                          className="text-black text-center my-4 text-lg sm:text-xl md:text-2xl"
                          style={{
                            fontWeight: "bold",
                            color: "#333",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Commodity Software
                        </h5>

                        {/* Paragraph Section */}
                        <p
                          className="card-text text-sm sm:text-base md:text-lg"
                          style={{
                            color: "#555",
                            lineHeight: "1.6",
                            marginBottom: "16px",
                          }}
                        >
                          Transform your trading strategy with our advanced
                          forex commodity software, engineered for precision and
                          insight in the commodities market.
                        </p>

                        {/* Learn More Button Section */}
                        <div
                          className="text-center"
                          style={{
                            marginTop: "16px",
                            transition: "transform 0.3s ease-in-out", // Smooth hover transition
                          }}
                        >
                          <a
                            href="#"
                            className="cta-button inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 sm:px-8 sm:py-3"
                            style={{
                              textDecoration: "none",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-6"
                    data-aos="fade-right"
                    style={{ marginBottom: "16px" }}
                  >
                    <div
                      className="card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: "8px",
                        boxShadow: "4px 4px 8px rgba(16, 185, 129, 0.3)", // Greenish bottom-right shadow
                      }}
                    >
                      <div className="card-body" style={{ flexGrow: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px",
                          }}
                        >
                          <img
                            src="/images/forex1.jpg"
                            className="rounded-lg shadow-lg"
                            style={{
                              height: "300px", // Fixed height for all images
                              width: "100%",
                              objectFit: "cover", // Ensures the image covers the container
                            }}
                          />
                        </div>

                        {/* Title Section */}
                        <h5
                          className="text-black text-center my-4 text-lg sm:text-xl md:text-2xl"
                          style={{
                            fontWeight: "bold",
                            color: "#333",
                            letterSpacing: "0.5px",
                          }}
                        >
                          Forex Currency Software
                        </h5>

                        {/* Paragraph Section */}
                        <p
                          className="card-text text-sm sm:text-base md:text-lg"
                          style={{
                            color: "#555",
                            lineHeight: "1.6",
                            marginBottom: "16px",
                          }}
                        >
                          Secure your forex currency trading with our exclusive
                          Forex AI trading software for fast and secure
                          transactions on web and mobile applications. With our
                          customized trading app, you can view trading charts,
                          trading central opportunities, and get access to risk
                          management tools and integrated market analysis.
                        </p>

                        {/* Learn More Button Section */}
                        <div
                          className="text-center"
                          style={{
                            marginTop: "16px",
                            transition: "transform 0.3s ease-in-out", // Smooth hover transition
                          }}
                        >
                          <a
                            href="#"
                            className="cta-button inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 sm:px-8 sm:py-3"
                            style={{
                              textDecoration: "none",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          >
                            Learn More
                          </a>
                        </div>
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
                  Why Choose Global Algo Trading?
                </h4>
                <div className="section-content">
                  <div
                    className="row g-gs"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    {/* Card 1 */}
                    <div className="col-lg-5" data-aos="flip-left">
                      <div
                        className="card border-0 h-100"
                        style={{
                          backgroundColor: "#f5fbff",
                          minHeight: "250px",
                          borderRadius: "8px",
                          boxShadow: "4px 4px 12px rgba(100, 149, 237, 0.2)", // cornflower blue shadow
                        }}
                      >
                        <div className="card-body p-3 d-flex">
                          <div className="feature feature-inline align-items-center">
                            <div className="feature-text me-auto">
                              <h4 className="title">Precision and Accuracy</h4>
                              <p>
                                Global Algo Trading leverages advanced
                                algorithms to execute trades with pinpoint
                                accuracy, ensuring you never miss an opportunity
                                in the fast-paced market.
                              </p>
                            </div>
                            <div
                              className="feature-decoration flex-shrink-0"
                              data-aos="zoom-in"
                            >
                              <FaBullseye
                                style={{ fontSize: "40px", color: "#007bff" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-5" data-aos="flip-right">
                      <div
                        className="card border-0 h-100"
                        style={{
                          backgroundColor: "#f5fbff",
                          minHeight: "250px",
                          borderRadius: "8px",
                          boxShadow: "4px 4px 12px rgba(100, 149, 237, 0.2)", // cornflower blue shadow
                        }}
                      >
                        <div className="card-body p-3 d-flex">
                          <div className="feature feature-inline align-items-center">
                            <div className="feature-text me-auto">
                              <h4 className="title">24/7 Trading Capability</h4>
                              <p>
                                With Global Algo Trading, automated systems work
                                round-the-clock, allowing you to capitalize on
                                market movements even when you're offline.
                              </p>
                            </div>
                            <div
                              className="feature-decoration flex-shrink-0"
                              data-aos="zoom-in"
                            >
                              <FaRegClock
                                style={{ fontSize: "40px", color: "#007bff" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-5" data-aos="flip-left">
                      <div
                        className="card border-0 h-100"
                        style={{
                          backgroundColor: "#f5fbff",
                          minHeight: "250px",
                          borderRadius: "8px",
                          boxShadow: "4px 4px 12px rgba(100, 149, 237, 0.2)", // cornflower blue shadow
                        }}
                      >
                        <div className="card-body p-3 d-flex">
                          <div className="feature feature-inline align-items-center">
                            <div className="feature-text me-auto">
                              <h4 className="title">Risk Management</h4>
                              <p>
                                Our algorithms incorporate risk strategies like
                                stop-loss and take-profit levels, minimizing
                                losses while maximizing gains.
                              </p>
                            </div>
                            <div
                              className="feature-decoration flex-shrink-0"
                              data-aos="zoom-in"
                            >
                              <FaChartLine
                                style={{ fontSize: "40px", color: "#007bff" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-lg-5" data-aos="flip-right">
                      <div
                        className="card border-0 h-100"
                        style={{
                          backgroundColor: "#f5fbff",
                          minHeight: "250px",
                          borderRadius: "8px",
                          boxShadow: "4px 4px 12px rgba(100, 149, 237, 0.2)", // cornflower blue shadow
                        }}
                      >
                        <div className="card-body p-3 d-flex">
                          <div className="feature feature-inline align-items-center">
                            <div className="feature-text me-auto">
                              <h4 className="title">Emotion-Free Trading</h4>
                              <p>
                                We eliminate emotional trading by following
                                predefined strategies, enabling more consistent
                                and objective results.
                              </p>
                            </div>
                            <div
                              className="feature-decoration flex-shrink-0"
                              data-aos="zoom-in"
                            >
                              <FaBrain
                                style={{ fontSize: "40px", color: "#007bff" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-lg-5" data-aos="flip-left">
                      <div
                        className="card border-0 h-100"
                        style={{
                          backgroundColor: "#f5fbff",
                          minHeight: "250px",
                          borderRadius: "8px",
                          boxShadow: "4px 4px 12px rgba(100, 149, 237, 0.2)", // cornflower blue shadow
                        }}
                      >
                        <div className="card-body p-3 d-flex">
                          <div className="feature feature-inline align-items-center">
                            <div className="feature-text me-auto">
                              <h4 className="title">Backtested Strategies</h4>
                              <p>
                                We use historical data to rigorously test
                                strategies before use, optimizing performance
                                for current market conditions.
                              </p>
                            </div>
                            <div
                              className="feature-decoration flex-shrink-0"
                              data-aos="zoom-in"
                            >
                              <FaCogs
                                style={{ fontSize: "40px", color: "#007bff" }}
                              />
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
                              Our experts work with you to understand your
                              goals, trading preferences, and risk tolerance,
                              then design an algorithmic strategy tailored to
                              your needs.
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
                              We rigorously test the strategy against historical
                              data to ensure optimal performance under various
                              market conditions.
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
                              Once optimized, the algorithm is deployed on our
                              secure platform, ready to execute trades
                              automatically according to your specifications.
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
                            <h5 className="text-black">
                              Ongoing Support and Optimization
                            </h5>
                            <p>
                              Our team provides continuous monitoring, support,
                              and adjustments to ensure your algorithm performs
                              at its best in changing market environments.
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
                        Contact Global Algo Trading for expert support on AI and
                        algorithmic trading. Reach out for inquiries,
                        assistance, or more information about our innovative
                        trading solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="section-content">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
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
            </div>
          </main>
        </div>
      </Layout>
    </RootLayout>
  );
}
