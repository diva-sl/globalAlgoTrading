"use client";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import RootLayout from "../layout";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import {
  FaCogs,
  FaComments,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 800, // Duration of the animation (milliseconds)
      delay: 200, // Delay before the animation starts (milliseconds)
      once: true, // Animation happens only once when scrolling into view
    });

    // Optionally, you can refresh AOS animations when needed
    // AOS.refresh();
  }, []);

  const metaData = {
    title: "CONTACT US - Elite Algo Trading",
    description:
      "Contact Elite Algo Trading for expert support on AI and algorithmic trading. Reach out for inquiries, assistance, or more information about our innovative trading solutions.",
    canonical: "https://algotradingelite.com/contact-us",
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
                      <h6 className="overline-title">Contact us</h6>
                      <h1 className="title">Reach Out to Us</h1>
                      <p className="lead">
                        We love getting feedback, questions, and hearing what
                        you have to say!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="section-content py-5 px-3">
                  <div className="row g-gs justify-content-center justify-content-lg-between">
                    <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                      {/* Business Hours Section */}
                      <section
                        className="business-hours-section mt-5 p-4 bg-white shadow-sm rounded"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                      >
                        <h4 className="mb-3 text-start underline-heading">
                          Our Business Hours
                        </h4>
                        <ul className="list-group text-start">
                          <li className="list-group-item bg-white border-0 px-0">
                            Monday - Friday: 9:00 AM - 6:00 PM
                          </li>
                          <li className="list-group-item bg-white border-0 px-0">
                            Saturday: 10:00 AM - 2:00 PM
                          </li>
                          <li className="list-group-item bg-white border-0 px-0">
                            Sunday: Closed
                          </li>
                        </ul>
                      </section>

                      <div
                        className="block-text pt-lg-4 p-4 bg-white rounded shadow-sm"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="400"
                      >
                        <h3 className="title h3 mb-4 text-start underline-heading">
                          Contact Information
                        </h3>

                        <ul className="row gy-4">
                          <li className="col-12">
                            <h6 className="mb-2 text-start">Address</h6>
                            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start text-dark">
                              <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-map-pin-fill" />
                              <span>1234 Trading Street, Finance City</span>
                            </div>
                          </li>

                          <li className="col-12">
                            <h6 className="mb-2 text-start">Contact Number</h6>
                            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start text-dark">
                              <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-call-alt-fill" />
                              <a
                                href="tel:+9180888566821"
                                className="text-primary-2"
                              >
                                +91 80888566821
                              </a>
                            </div>
                          </li>

                          <li className="col-12">
                            <h6 className="mb-2 text-start">Email Id</h6>
                            <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start text-dark">
                              <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-mail-fill" />
                              <a
                                href="mailto:support@elitealgotrading.com"
                                className="text-primary-2"
                              >
                                support@elitealgotrading.com
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="col-lg-6"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    >
                      <div className="card-2 border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <h3
                            className="title fw-medium mb-4 text-center"
                            style={{ color: "#27ae60" }}
                          >
                            Get in Touch with Us
                          </h3>
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();

                              if (!captchaToken) {
                                Swal.fire({
                                  text: "Captcha is required",
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

                              try {
                                setLoading(true);
                                const formData = new FormData();
                                formData.append("captcha_token", captchaToken);
                                formData.append("name", values.name);
                                formData.append("email", values.email);
                                formData.append("phone", values?.phone);
                                formData.append("note", values?.message);

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
                                  setLoading(false);
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
                                setLoading(false);
                                Swal.fire({
                                  title: "Error",
                                  text: error?.response?.data?.message,
                                  icon: "error",
                                });
                              }
                            }}
                            className="form-submit-init"
                          >
                            <div className="row g-4">
                              {/** Name Field */}
                              <div className="col-12">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      placeholder="Your Full Name"
                                      style={{
                                        borderColor: "#ccc",
                                        color: "#000",
                                      }}
                                      onFocus={(e) =>
                                        (e.target.style.borderColor = "#5DC65D")
                                      }
                                      onBlur={(e) =>
                                        (e.target.style.borderColor = "#ccc")
                                      }
                                      required
                                      value={values?.name}
                                      onChange={(e) =>
                                        setValues((prev) => ({
                                          ...prev,
                                          name: e.target.value,
                                        }))
                                      }
                                    />
                                  </div>
                                </div>
                              </div>

                              {/** Email Field */}
                              <div className="col-12">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="email"
                                      className="form-control form-control-lg"
                                      placeholder="Your Email Id"
                                      style={{
                                        borderColor: "#ccc",
                                        color: "#000",
                                      }}
                                      onFocus={(e) =>
                                        (e.target.style.borderColor = "#5DC65D")
                                      }
                                      onBlur={(e) =>
                                        (e.target.style.borderColor = "#ccc")
                                      }
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

                              {/** Phone Field */}
                              <div className="col-12">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <input
                                      type="text"
                                      className="form-control form-control-lg"
                                      placeholder="Your Phone Number"
                                      style={{
                                        borderColor: "#ccc",
                                        color: "#000",
                                      }}
                                      onFocus={(e) =>
                                        (e.target.style.borderColor = "#5DC65D")
                                      }
                                      onBlur={(e) =>
                                        (e.target.style.borderColor = "#ccc")
                                      }
                                      required
                                      value={values?.phone}
                                      onChange={(e) =>
                                        setValues((prev) => ({
                                          ...prev,
                                          phone: e.target.value,
                                        }))
                                      }
                                    />
                                  </div>
                                </div>
                              </div>

                              {/** Message Field */}
                              <div className="col-12">
                                <div className="form-group">
                                  <div className="form-control-wrap">
                                    <textarea
                                      name="message"
                                      className="form-control form-control-lg"
                                      placeholder="Enter your message"
                                      style={{
                                        borderColor: "#ccc",
                                        color: "#000",
                                      }}
                                      onFocus={(e) =>
                                        (e.target.style.borderColor = "#5DC65D")
                                      }
                                      onBlur={(e) =>
                                        (e.target.style.borderColor = "#ccc")
                                      }
                                      value={values?.message}
                                      onChange={(e) =>
                                        setValues((prev) => ({
                                          ...prev,
                                          message: e.target.value,
                                        }))
                                      }
                                    />
                                  </div>
                                </div>
                              </div>

                              {/** Captcha */}
                              <div className="col-12 text-center">
                                <div className="form-group d-flex justify-content-center">
                                  <ReCAPTCHA
                                    sitekey="6Ldd1eMpAAAAAFmJZSm4ygqwFPCIERv7XTCOU2iE"
                                    onChange={handleCaptchaChange}
                                  />
                                </div>
                              </div>

                              {/** Submit Button */}
                              <div className="col-12">
                                <button
                                  type="submit"
                                  className="btn btn-lg"
                                  style={{
                                    width: "100%",
                                    backgroundColor: "#065f46", // Dark green (initial)
                                    borderColor: "#047857", // Dark green (initial)
                                    color: "#fff",
                                  }}
                                  onMouseOver={(e) => {
                                    e.target.style.backgroundColor = "#047857"; // Light green on hover
                                    e.target.style.borderColor = "#047857"; // Light green on hover
                                  }}
                                  onMouseOut={(e) => {
                                    e.target.style.backgroundColor = "#065f46"; // Dark green on mouse out
                                    e.target.style.borderColor = "#047857"; // Dark green on mouse out
                                  }}
                                  disabled={loading}
                                >
                                  {loading ? (
                                    <CircularProgress
                                      size={24}
                                      color="inherit"
                                    />
                                  ) : (
                                    "Submit"
                                  )}
                                </button>
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
            <section className="service-inquiry-map-social-container mt-5 mb-5">
              <div className="container">
                <div className="row">
                  {/* Left Column */}
                  <div className="col-md-6 left-column">
                    <div
                      className="service-inquiry-section"
                      data-aos="fade-right"
                      data-aos-duration="800"
                    >
                      <h3
                        className="text-start mb-4"
                        style={{
                          borderBottom: "2px solid rgb(142, 241, 183)",
                          display: "inline-block",
                        }}
                      >
                        Inquire About Our Services
                      </h3>
                      <form className="service-inquiry-form">
                        {/* Service Select */}
                        <div
                          className="form-group mb-4"
                          data-aos="fade-right"
                          data-aos-duration="800"
                          data-aos-delay="100"
                        >
                          <label className="d-flex align-items-center gap-2">
                            <FaCogs className="text-success" /> What service are
                            you interested in?
                          </label>
                          <select className="form-control mt-1">
                            <option value="algorithmic-trading">
                              Algorithmic Trading
                            </option>
                            <option value="ai-trading-solutions">
                              AI Trading Solutions
                            </option>
                            <option value="consulting">Consulting</option>
                          </select>
                        </div>

                        {/* Message Box */}
                        <div
                          className="form-group mb-4"
                          data-aos="fade-right"
                          data-aos-duration="800"
                          data-aos-delay="200"
                        >
                          <label className="d-flex align-items-center gap-2">
                            <FaComments className="text-success" /> Additional
                            Message
                          </label>
                          <textarea
                            className="form-control mt-1"
                            rows="4"
                          ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div
                          data-aos="fade-right"
                          data-aos-duration="800"
                          data-aos-delay="300"
                        >
                          <button
                            type="submit"
                            className="btn btn-lg"
                            style={{
                              width: "100%",
                              backgroundColor: "#065f46",
                              borderColor: "#065f46",
                              color: "#fff",
                            }}
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = "#047857";
                              e.target.style.borderColor = "#047857";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = "#065f46";
                              e.target.style.borderColor = "#065f46";
                            }}
                          >
                            Submit Inquiry
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Social Icons */}
                    <div
                      className="social-links-section mt-5"
                      data-aos="fade-right"
                      data-aos-duration="800"
                      data-aos-delay="400"
                    >
                      <h3
                        className="text-start mb-3"
                        style={{
                          borderBottom: "2px solid rgb(142, 241, 183)",
                          display: "inline-block",
                        }}
                      >
                        Follow Us
                      </h3>
                      <div className="social-links d-flex justify-content-start gap-4 mt-2">
                        <a
                          href="https://facebook.com"
                          className="social-icon fs-4 text-dark"
                          data-aos="fade-left"
                          data-aos-delay="1000"
                        >
                          <FaFacebook className="social-icon-img" />
                        </a>
                        <a
                          href="https://twitter.com"
                          className="social-icon fs-4 text-dark"
                          data-aos="fade-left"
                          data-aos-delay="1200"
                        >
                          <FaTwitter className="social-icon-img" />
                        </a>
                        <a
                          href="https://linkedin.com"
                          className="social-icon fs-4 text-dark"
                          data-aos="fade-left"
                          data-aos-delay="1400"
                        >
                          <FaLinkedin className="social-icon-img" />
                        </a>
                        <a
                          href="https://instagram.com"
                          className="social-icon fs-4 text-dark"
                          data-aos="fade-left"
                          data-aos-delay="1600"
                        >
                          <FaInstagram className="social-icon-img" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map Column (you can keep or update separately) */}
                  <div
                    className="col-md-6 map-section"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    style={{
                      backgroundColor: "#ebf8ff", // Light off-white gray
                      padding: "20px",
                      borderRadius: "8px",
                    }}
                  >
                    <h3 className="text-center mb-4 d-flex justify-content-center align-items-center gap-2">
                      <FaMapMarkerAlt className="text-success" /> Our Location
                    </h3>

                    <div
                      className="map-container"
                      style={{ position: "relative" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=your-map-embed-link"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          zIndex: "999",
                        }}
                      >
                        {/* Custom Map Marker */}
                        <img
                          src="your-custom-marker-image-url.png"
                          alt="Custom Marker"
                          style={{
                            width: "40px", // Adjust the size of your marker
                            height: "40px",
                            objectFit: "contain",
                          }}
                        />
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
