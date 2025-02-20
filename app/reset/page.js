"use client"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Link from "next/link"

function faqs() {
  return (
    <Layout>
<div className="nk-app-root has-mask">
      <div className="nk-mask bg-pattern-dot-white-sm" />
      <header className="nk-header has-shape">
        <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x" />
        <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x" />
        <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x" />
       <Header/>
      </header>
      <main className="nk-pages">
        <section className="section section-lg section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-11 col-xl-10 col-xxl-9">
                  <h6 className="overline-title text-primary-2">
                    Forgot Password ?
                  </h6>
                  <h2 className="title">Reset from Here.</h2>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card-2 border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <h4>Reset password</h4>
                      <p>
                        If you forgot your password, well, then we’ll email you
                        instructions to reset your password.
                      </p>
                      <form action="#">
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="emailorusername"
                              >
                                Email Address
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="email"
                                  name="emailorusername"
                                  id="emailorusername"
                                  className="form-control form-control-lg"
                                  placeholder="Enter Your Email"
                                  required=""
                                  style={{backgroundColor: '#091829', borderColor:" #0b1f36", color: "#fff"}}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-between align-items-center has-gap g-3">
                              <div className="form-group">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  id="submit-btn"
                                >
                                  Send Reset Link
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <p className="text-center mt-4">
                    <Link

                      className="link has-gap g-2 text-primary-2"
                      href="/login"
                    >
                      <em className="icon ni ni-arrow-left" />
                      <span>Back to Login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
    </Layout>
  )
}

export default faqs
