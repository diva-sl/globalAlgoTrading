'use client';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import React from 'react';
import RootLayout from '../layout';

export default function Indian() {
  const metaData = {
    title: 'Indian Market Trading Software - Elite Algo Trading',
    description:
      'Navigate the dynamic Indian markets with Elite Algo Trading’s advanced trading software. Intuitive and data-driven, it’s tailored for success in India’s stock and commodity markets.',
    canonical: 'https://algotradingelite.com//indian-market'
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
                    <h6 className="overline-title text-primary">Indian Market Trading</h6>
                    <h2 className="title h1">Elite Algo Trading Indian Market Software</h2>
                  </div>
                  <div className="section-content row g-gs align-items-center">
                    <div className="col-lg-6">
                      <img className="w-100 rounded" src="/images/indian.jpg" alt="Indian Market Trading" />
                    </div>
                    <div className="col-lg-6">
                      <h5>
                        Empower your trading with our intuitive software—where data meets opportunity in the Indian market, optimized for stock and commodity trading.
                      </h5>
                      <p>Elevate your trading experience with our robust Indian Market Trading Software, specifically designed for investors navigating the dynamic landscape of India’s stock and commodity markets. Our platform 
                        combines advanced technology with user-friendly features, making it ideal for both beginners and seasoned traders.</p>
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
