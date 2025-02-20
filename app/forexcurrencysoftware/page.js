'use client';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import React from 'react';
import RootLayout from '../layout';
 

export default function Forex() {
  const metaData = {
    title: 'Currency Trading Software - Elite Algo Trading',
    description:
      'Enhance your currency trading with Elite Algo Trading’s intuitive software. Leverage real-time analysis and customizable strategies for smart, efficient trades.',
    canonical: 'https://algotradingelite.com//currency'
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
                    <h6 className="overline-title text-primary">Currency Trading</h6>
                    <h2 className="title h1">Elite Algo Trading Currency Software</h2>
                  </div>
                  <div className="section-content row g-gs align-items-center">
                    <div className="col-lg-6">
                      <img className="w-100 rounded" src="/images/forex.jpg" alt="Currency Trading" />
                    </div>
                    <div className="col-lg-6">
                      <h5 >
                        Gain the edge in currency trading with our state-of-the-art software, crafted for precision and adaptable to both beginners and experienced traders.
                      </h5>
                      <p>Our currency trading software leverages real-time analysis to identify moving trends and support swing trading. We prioritize safety and security while providing a robust trading environment. Clients can also integrate their own strategies into the platform, allowing for a tailored trading experience that aligns with their individual goals.        </p>
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
