'use client';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import React from 'react';
import RootLayout from '../layout';

export default function Commodity() {
  const metaData = {
    title: 'Commodity Trading Software - Elite Algo Trading',
    description:
      'Optimize your commodity trading with Elite Algo Trading’s advanced algorithms. Gain market insights, customize strategies, and stay ahead in the commodities market.',
    canonical: 'https://algotradingelite.com//commodity'
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
                    <h6 className="overline-title text-primary">Commodity Trading</h6>
                    <h2 className="title h1">Elite Algo Trading Commodity Software</h2>
                  </div>
                  <div className="section-content row g-gs align-items-center">
                    <div className="col-lg-6">
                      <img className="w-100 rounded" src="/images/commodity.jpg" alt="Commodity Trading" />
                    </div>
                    <div className="col-lg-6">
                      <h5>Transform your trading strategy with our advanced forex commodity software, engineered for precision and insight in the COMMODITIES market.
                      </h5>
                      <p className="lead">
                      Our  commodity trading software offers powerful market analysis tools combined with real-time data to help traders make informed decisions. With advanced algorithms and customizable strategies, you can optimize your trades and capitalize on market opportunities.
                       Whether you're a beginner or an experienced trader, our platform provides the insights and tools you need to succeed in a dynamic trading environment.   </p>
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
