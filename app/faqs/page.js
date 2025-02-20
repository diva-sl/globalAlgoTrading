"use client";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import RootLayout from "../layout";

function faqs() {
  const metaData = {
    title: "FREQUENTLY ASKED QUESTIONS - Elite Algo Trading",
    description:
      "Find answers to all your queries about Elite Algo Trading & algorithmic trading solutions, market strategies, and support. Explore our FAQ for insights and assistance.",
    canonical: "https://EliteAlgoTrading.com/faqs",
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
                          Find answers to all your queries about Elite Algo
                          Trading & algorithmic trading solutions, market
                          strategies, and support. Explore our FAQ for insights
                          and assistance.
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
      "Algorithmic trading, or algo trading, refers to using computer algorithms to automatically execute trades in financial markets based on predefined criteria, such as price, volume, and timing. It helps in executing strategies faster and more efficiently than manual trading.",
  },
  {
    question: "How does algorithmic trading work?",
    answer:
      "Algo trading works by creating algorithms that follow a set of rules for buying and selling assets. These rules can be based on factors like price patterns, technical indicators, or market conditions. The algorithm continuously monitors the market and executes orders when specific conditions are met.",
  },
  {
    question: "What are the benefits of algorithmic trading?",
    answer:
      "Some of the key benefits include faster trade execution, reduced human error, the ability to process large amounts of data, improved consistency in following a trading strategy, and the ability to backtest strategies using historical data.",
  },
  {
    question: "What types of strategies are used in algorithmic trading?",
    answer:
      "Common strategies include market making, statistical arbitrage, trend following, and mean reversion.",
  },
  {
    question: "Do I need programming skills to develop an algorithmic trading strategy?",
    answer:
      "Yes, typically some programming knowledge (e.g., Python, C++, or Java) is required to develop custom trading algorithms. However, many platforms provide pre-built strategies that don’t require programming knowledge.",
  },
  {
    question: "What is backtesting?",
    answer:
      "Backtesting is the process of testing a trading strategy using historical market data to evaluate how well the algorithm would have performed in the past. This helps to identify potential flaws before deploying a strategy in live markets.",
  },
  {
    question: "What are the risks involved with algorithmic trading?",
    answer:
      "Risks include overfitting, execution risk, market risk, and technology risk.",
  },
  {
    question: "How much capital is needed to start algorithmic trading?",
    answer:
      "The amount of capital depends on the type of strategy being used, the broker’s minimum requirements, and the trader's risk tolerance.",
  },
  {
    question: "What is high-frequency trading (HFT)?",
    answer:
      "High-frequency trading is a subset of algorithmic trading that involves executing a large number of orders at extremely fast speeds, often in milliseconds or microseconds.",
  },
  {
    question: "What is slippage in algorithmic trading?",
    answer:
      "Slippage occurs when there’s a difference between the expected price of a trade and the actual price at which the trade is executed.",
  },
];

export default faqs;
