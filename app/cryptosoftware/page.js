'use client';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import React from 'react';
import RootLayout from '../layout';

export default function Cryptosoftware() {
  const metaData = {
    title: 'Crypto Trading Software - Elite Algo Trading',
    description:
      'Step into the future of finance with Elite Algo Trading’s advanced crypto trading software. Enjoy seamless trading with real-time market insights and cutting-edge technology.',
    canonical: 'https://algotradingelite.com//crypto'
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
              <section className="section has-shape has-mask">
                <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
                <div className="container">
                  <div className="section-head text-center">
                    <h6 className="overline-title text-primary">Crypto Trading</h6>
                    <h2 className="title h1">Elite Algo Trading Crypto Software</h2>
                  </div>
                  <div className="section-content row g-gs align-items-center">
                    <div className="col-lg-6">
                      <img className="w-100 rounded" src="/images/CRYPTO_IMAGE.jpg" alt="Crypto Trading" />
                    </div>
                    <div className="col-lg-6">
                      <h5>
                        Seize the future of finance with our innovative crypto trading software, designed for seamless transactions and real-time market insights.
                    
                      </h5>
                      <p>
                      Unlock the full potential of cryptocurrency trading with our cutting-edge Crypto Market Trading Software. Designed for both novice and experienced traders, our platform offers real-time market analysis, advanced charting tools, and automated trading features to help you make informed decisions and maximize your profits.
Whether you’re trading Bitcoin, Ethereum, or emerging altcoins, our Crypto Market Trading Software equips you with the tools you need to succeed in a fast-paced digital landscape. Start trading smarter today and elevate your trading experience to the next level
     </p>
                      <ul className="btn-list btn-list-inline gy-0">
                        <li>
                          <a href="/" className="btn btn-lg btn-primary">
                            <span>Get Started</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services and Testimonials Sections can be duplicated here if needed */}

            </main>
          </div>
        </Layout>
      </main>
    </RootLayout>
  );
}
