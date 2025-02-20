"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import RootLayout from "../layout";

function Contact() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
  const [values, setValues] = useState({
    name: "" ,
    email: "" ,
    phone: "" ,
    message: "" 
  });

  const metaData = { 
    title: "CONTANCT US - Elite Algo Trading",
    description: "Contact Elite Algo Trading for expert support on AI and algorithmic trading. Reach out for inquiries, assistance, or more information about our innovative trading solutions.",
    canonical: "https://algotradingelite.com//contact-us",
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
            <section className="section section-bottom-0 has-shape has-mask mb-4">
              <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
              <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
              <div className="container">
                <div className="section-head">
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-11 col-xl-10 col-xxl-9">
                      <h6 className="overline-title text-primary-2">
                        Contact us
                      </h6>
                      <h1 className="title">Reach Out to Us</h1>
                      <p className="lead">
                        We love getting feedback, Questions, and hearing what
                        you have to say
                      </p>
                    </div>
                  </div>
                </div>
                <div className="section-content">
                  <div className="row g-gs justify-content-center justify-content-lg-between">
                    <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                      <div className="block-text pt-lg-4">
                        <h3 className="title h2">Let's talk</h3>
                        <ul className="row gy-4 pt-4">
                          <li className="col-12">
                            <h5>Address</h5>
                            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                              <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-map-pin-fill" />
                              <span></span>
                            </div>
                          </li>
                          <li className="col-12">
                            <h5>Contact Number</h5>
                            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                              <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-call-alt-fill" />
                              <span>
                                <a
                                  href="tel:08068493326"
                                  className="text-primary-2"
                                >
                                  +91 80888566821{" "}
                                </a>
                              </span>
                            </div>
                          </li>
                          <li className="col-12">
                            <h5>Email Id</h5>
                            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                              <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-mail-fill" />
                              <span>
                                <a
                                  href="mailto:support@tradingindicators360.com"
                                  className="text-primary-2"
                                >
                                  support@Elite Algo Trading.com.co
                                </a>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-2 border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <h3 className="title fw-medium mb-4">
                            Please feel free to contact us using form below
                          </h3>
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();

                              if (!captchaToken) {
                                Swal.fire({
                                  text: "Captha is Required",
                                  icon: "warning",
                                });
                                return;
                              }

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
                                const formData = new FormData();
                                formData.append("captcha_token", captchaToken);
                                formData.append("name", values.name);
                                formData.append("email", values.email);
                                formData.append("phone", values?.phone);
                                formData.append("note", values?.message);
                                formData.append(
                                  "domain",
                                  updatedUrl.split("/")[0]
                                );

                                const res = await axios.post(
                                  "https://master.intact.co.in/enquiry-api/v2/store-enq",
                                  formData,
                                  {
                                    headers: {
                                      "Content-Type": "multipart/form-data",
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
                                  setTimeout(() => {
                                    window.location.reload();
                                  }, 2000);
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
                            className="form-submit-init"
                          >
                            <div className="row g-4">
                              <div className="col-13">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      // name="name"
                                      className="form-control form-control-lg"
                                      placeholder="Your Name"
                                      style={{
                                        borderColor: "#0b1f36",
                                        color: "#fff",
                                      }}
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
                              <div className="col-13">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="email"
                                      // name="email"
                                      className="form-control form-control-lg"
                                      placeholder="Your Email Id"
                                      style={{
                                        borderColor: "#0b1f36",
                                        color: "#fff",
                                      }}
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
                              <div className="col-13">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      // name="phone"
                                      className="form-control form-control-lg"
                                      placeholder="Phone Number"
                                      style={{
                                        borderColor: "#0b1f36",
                                        color: "#fff",
                                      }}
                                      required
                                      value={values?.phone}
                                      onChange={(e) => {
                                        const inputValue = e.target.value;
                                        // Remove any non-numeric characters
                                        const sanitizedValue =
                                          inputValue.replace(/[^0-9]/g, "");
                                        // Trim the sanitized value to ensure it's between 10 and 15 characters
                                        const finalValue = sanitizedValue.slice(
                                          0,
                                          15
                                        );

                                        // Update the state with the sanitized and trimmed value
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
                              <div className="col-13">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <textarea
                                      name="message"
                                      className="form-control form-control-lg"
                                      placeholder="Enter your message"
                                      style={{
                                        borderColor: "#0b1f36",
                                        color: "#fff",
                                      }}
                                      value={values?.message}
                                      onChange={(e) => {
                                        const inputValue = e.target.value;
                                        const sanitizedValue =
                                          inputValue.replace(
                                            /[^a-zA-Z0-9 .]/g,
                                            ""
                                          );
                                        setValues((prev) => ({
                                          ...prev,
                                          message: sanitizedValue,
                                        }));
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-13">
                                <div className="form-group">
                                  <ReCAPTCHA
                                    sitekey="6Ldd1eMpAAAAAFmJZSm4ygqwFPCIERv7XTCOU2iE"
                                    onChange={handleCaptchaChange}
                                    style={{
                                      transform: "scale(0.60)",
                                      WebkitTransform: "scale(0.60)",
                                      transformOrigin: "0 0",
                                      WebkitTransformOrigin: "0 0",
                                      marginLeft: "25%",
                                    }}
                                    className='col-12"'
                                  />

                                  <div className="col-12"></div>
                                  <button className="btn-anim" type="submit">
                                    {loading ? (
                                      <CircularProgress
                                        size={21}
                                        style={{ color: "white" }}
                                      />
                                    ) : (
                                      " Send Message"
                                    )}
                                  </button>
                                </div>
                                <div className="form-result mt-4" />
                                <div className="col-13"></div>
                              </div>
                            </div>
                          </form>
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

export default Contact;
