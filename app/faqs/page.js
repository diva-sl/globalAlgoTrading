"use client";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import RootLayout from "../layout";

function faqs() {
  const testimonials = [
    {
      feedback:
        "Global Algo Trading has significantly improved our trading strategy. The automated trading algorithms have increased our efficiency and profitability.",
      name: "John Doe",
    },
    {
      feedback:
        "I’ve been using the platform for a few months, and the results are remarkable. The backtesting tools are extremely useful.",
      name: "Jane Smith",
    },
    {
      feedback:
        "The customer support is excellent, and the algorithms are simple to implement. Highly recommend for any serious trader.",
      name: "Michael Lee",
    },
  ];

  const metaData = {
    title: "Frequently Asked Questions - Global Algo Trading",
    description:
      "Explore answers to your questions about Global Algo Trading, algorithmic trading solutions, strategies, and market insights. Get the support you need for successful trading.",
    canonical: "https://GlobalAlgoTrading.com/faqs",
  };

  return (
    <RootLayout metadata={metaData}>
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
            <section className="section section-bottom-0 has-mask">
              <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
              <div className="container">
                <div className="section-content">
                  <div className="row g-gs justify-content-center">
                    <div className="col-xxl-10 col-xl-10 col-lg-10">
                      <div className="text-center mb-6">
                        <h1 className="title">Frequently Asked Questions</h1>
                        <p>
                          Discover everything you need to know about algorithmic
                          trading, market strategies, and how Global Algo
                          Trading can help you optimize your trading approach.
                          Find answers to our most common questions here.
                        </p>
                      </div>
                      <div className="section-content">
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          {faqContent.map((faq, index) => (
                            <div
                              className="border-0 shadow mb-2 p-2 rounded"
                              key={index}
                            >
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button fw-semibold collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#flush-collapse${index}`}
                                  aria-expanded="false"
                                  aria-controls={`flush-collapse${index}`}
                                >
                                  {faq.question}
                                </button>
                              </h2>
                              <div
                                id={`flush-collapse${index}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
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
              </div>
            </section>
            <section className="section section-testimonials">
              <div className="container">
                <h2 className="title text-center">Success Stories</h2>
                <div className="testimonials-carousel">
                  {testimonials.map((testimonial, index) => (
                    <div className="testimonial-item" key={index}>
                      <p>{testimonial.feedback}</p>
                      <p className="customer-name">{testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="section section-video">
              <div className="container text-center">
                <h2 className="title">How Algorithmic Trading Works</h2>
                <video controls>
                  <source src="/videos/how-it-works.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
            <section className="section section-resources">
              <div className="container">
                <h2 className="title text-center">Related Articles</h2>
                <ul>
                  <li>
                    <a href="/blog/understanding-algorithmic-trading">
                      Understanding Algorithmic Trading
                    </a>
                  </li>
                  <li>
                    <a href="/blog/how-to-optimize-your-trading-strategy">
                      How to Optimize Your Trading Strategy
                    </a>
                  </li>
                  <li>
                    <a href="/blog/the-future-of-algorithmic-trading">
                      The Future of Algorithmic Trading
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section className="section section-links-queries">
              <div className="container">
                <div className="row">
                  {/* Left Column: Important Links and Related Queries */}
                  <div className="col-md-6">
                    <section className="section section-links">
                      <h2 className="title">Important Links</h2>
                      <ul>
                        <li>
                          <a href="/terms">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="/support">Support Documentation</a>
                        </li>
                      </ul>
                    </section>

                    <section className="section section-related-queries">
                      <h2 className="title">Related Queries</h2>
                      <ul>
                        <li>
                          <a href="/faq/general">General FAQs</a>
                        </li>
                        <li>
                          <a href="/faq/strategies">Trading Strategies FAQs</a>
                        </li>
                        <li>
                          <a href="/faq/backtesting">Backtesting FAQs</a>
                        </li>
                        <li>
                          <a href="/faq/technical">Technical Support FAQs</a>
                        </li>
                      </ul>
                    </section>
                  </div>

                  {/* Right Column: Contact Form */}
                  <div className="col-md-6">
                    <section className="section section-contact-form">
                      <h2 className="title text-center">
                        Have More Questions?
                      </h2>
                      <form>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="form-control"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="form-control"
                        />
                        <textarea
                          placeholder="Your Question"
                          className="form-control"
                        ></textarea>
                        <button type="submit" className="btn-submit">
                          Submit
                        </button>
                      </form>
                    </section>
                    <section className="section section-social-media">
                      <div className="container text-center">
                        <h2 className="title">Follow Us</h2>
                        <ul className="social-media-links">
                          <li>
                            <a href="https://twitter.com/GlobalAlgoTrading">
                              Twitter
                            </a>
                          </li>
                          <li>
                            <a href="https://linkedin.com/company/globalalgotrading">
                              LinkedIn
                            </a>
                          </li>
                          <li>
                            <a href="https://facebook.com/GlobalAlgoTrading">
                              Facebook
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </RootLayout>
  );
}

const faqContent = [
  {
    question: "What is algorithmic trading?",
    answer:
      "Algorithmic trading, or algo trading, refers to using automated computer algorithms to execute trades in financial markets based on predefined criteria such as price, volume, timing, and other market data. It aims to make trading more efficient and can improve the speed and accuracy of execution.",
  },
  {
    question: "How does Global Algo Trading help improve trading strategies?",
    answer:
      "Global Algo Trading offers advanced algorithmic solutions that enhance the execution of trading strategies. By automating trades, we can reduce human error, maximize trading opportunities, and execute strategies faster, ensuring optimal performance even in volatile markets.",
  },
  {
    question: "What are the key advantages of using algorithmic trading?",
    answer:
      "The primary benefits of algorithmic trading include increased speed of execution, enhanced precision, the ability to backtest strategies with historical data, reduced human emotion, and the potential for handling large volumes of data efficiently. Additionally, it enables trading in multiple markets simultaneously.",
  },
  {
    question: "What trading strategies are employed in algorithmic trading?",
    answer:
      "At Global Algo Trading, we utilize a range of strategies such as trend following, statistical arbitrage, market making, mean reversion, and high-frequency trading (HFT). These strategies are tailored to individual market conditions and help in making data-driven decisions.",
  },
  {
    question: "Do I need programming skills to use algorithmic trading?",
    answer:
      "While having programming knowledge is helpful, it’s not a necessity for most of our clients. Our platform offers pre-built algorithms and strategies that don’t require coding skills. However, advanced traders can customize strategies by using programming languages like Python or R for more control.",
  },
  {
    question: "What is backtesting, and how does it work?",
    answer:
      "Backtesting is the process of testing an algorithmic trading strategy using historical market data. It allows traders to evaluate how the strategy would have performed in the past, giving them confidence before deploying it in real markets. Our platform provides powerful backtesting tools with detailed reports and performance metrics.",
  },
  {
    question: "What are the risks associated with algorithmic trading?",
    answer:
      "The main risks include market risk, overfitting of models, data issues, and technology risks. It's crucial to monitor trading algorithms regularly to ensure they perform as expected. Our platform provides real-time monitoring and alerts to minimize such risks.",
  },
  {
    question: "How much capital is required to start algorithmic trading?",
    answer:
      "The capital required depends on the strategy being used and the specific markets involved. Some strategies may require a higher minimum capital due to their complexity or risk, while others can be started with a smaller investment. Global Algo Trading helps optimize capital allocation to ensure efficient use of resources.",
  },
  {
    question: "What is high-frequency trading (HFT)?",
    answer:
      "High-frequency trading is a subset of algorithmic trading that involves executing a large number of trades at extremely high speeds, often within milliseconds. This strategy is used to exploit small price movements and can be highly profitable in fast-moving markets.",
  },
  {
    question: "What is slippage in algorithmic trading?",
    answer:
      "Slippage occurs when there is a difference between the expected price of a trade and the actual price at which the trade is executed. It typically happens during periods of high volatility. Our algorithms are designed to minimize slippage through advanced execution strategies.",
  },
];

export default faqs;
