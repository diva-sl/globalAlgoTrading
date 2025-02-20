"use client"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import { CircularProgress } from "@mui/material"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Swal from "sweetalert2"
import RootLayout from "../layout"

function faqs() {

  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });
  const metaData={
    title: 'SUPPORT - Elite Algo Trading',
    description: 'Get expert support from Elite Algo Trading for AI and algorithmic trading. Our team is here to assist with any questions or issues you have about our trading solutions.'
    ,canonical: "https://algotradingelite.com//support" 
  }


  return (
    <RootLayout metadata={metaData}>

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
        <section className="section section-bottom-0 pb-5 has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">

            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-11 col-xl-10 col-xxl-9">
                  <h6 className="overline-title text-primary-2">Welcome Back!</h6>
                <p>
                Get expert support from Elite Algo Trading for AI and algorithmic trading. Our team is here to assist with any questions or issues you have about our trading solutions.
                </p>
                </div>
              </div>
            </div>
            
            <div className="section-content">
              <div className="row g-gs justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                  <div className="block-text pt-lg-4">
                    <h3 className="title h2">Let's talk</h3>
                    <ul className="row gy-4 pt-4">
                      <li className="col-12">
                        <h5>Address</h5>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                          <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-map-pin-fill" />
                          <span>
                          Kirloskar Business Park, 
                            <br />
                            Hebbal Kempapura, Hebbal
                            <br />
                            Bengaluru, Karnataka 560024
                          </span>
                        </div>
                      </li>
                      <li className="col-12">
                        <h5>Contact Number</h5>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                          <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-call-alt-fill" />
                          <span>
                            <a href="tel:08068493326" className="text-primary-2">
                            +91 8088566821
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
                <div className="col-md-7 col-lg-6 col-xl-5">
                  <div className="card-2 border-0 shadow-sm rounded-4">
                    <div className="card-body">
                    <form
                        id="enquiry"
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
                          console.log("rfijrfv");
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
                            console.log("dffrf");
                            setloading(true);

                            const formData = new FormData();
                            formData.append("captcha_token", captchaToken);
                            formData.append("name", values.name);
                            formData.append("email", values.email);
                            formData.append("phone", values?.phone);
                            formData.append("subject", values?.subject);
                            formData.append("note", values?.description);

                            formData.append("domain", updatedUrl.split("/")[0]);

                            const res = await axios.post(
                              "https://master.intact.co.in/enquiry-api/v2/store-contacts",
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
                                text: error?.response?.data?.errors?.email[0],
                                icon: "error",
                              });
                            }
                            if (error?.response?.data?.errors?.phone) {
                              Swal.fire({
                                title: "Error",
                                text: error?.response?.data?.errors?.phone[0],
                                icon: "error",
                              });
                            }
                            setloading(false);
                          }
                          setloading(false);
                        }}
                      >
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <h3 className="text-white text-center">
                                Support Form
                              </h3>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label className="form-label" htmlFor="yourname">
                                Your Name
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control form-control-lg"
                                  placeholder="Enter your name"
                                  required
                                  value={values?.name}
                                  onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const sanitizedValue = inputValue.replace(
                                      /[^a-zA-Z ]/g,
                                      ""
                                    );
                                    setValues((prev) => ({
                                      ...prev,
                                      name: sanitizedValue,
                                    }));
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label className="form-label" htmlFor="youremail">
                                Your Email
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control form-control-lg"
                                  placeholder="Enter email id"
                                  equired
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
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label
                                className="form-label"
                                htmlFor="contactnumber"
                              >
                                Contact Number
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="phone"
                                  className="form-control form-control-lg"
                                  oninput="process(this)"
                                  placeholder="Enter phone number"
                                  required
                                  value={values?.phone}
                                  onChange={(e) => {
                                    const inputValue = e.target.value;
                                    // Remove any non-numeric characters
                                    const sanitizedValue = inputValue.replace(
                                      /[^0-9]/g,
                                      ""
                                    );
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
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label className="form-label" htmlFor="yourname">
                                Subject
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control form-control-lg"
                                  placeholder="Subject"
                                  required
                                  value={values?.subject}
                                  onChange={(e) => {
                                    const inputValue = e.target.value;
                                    const sanitizedValue = inputValue.replace(
                                      /[^a-zA-Z ]/g,
                                      ""
                                    );
                                    setValues((prev) => ({
                                      ...prev,
                                      subject: sanitizedValue,
                                    }));
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-start">
                              <label className="form-label" htmlFor="yourname">
                              Description
                              </label>
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control form-control-lg"
                                  placeholder="Enter your name"
                                  required
                                  value={values?.description}
                                  onChange={(e) => {
                                    const inputValue = e.target.value;
                                    // const sanitizedValue = inputValue.replace(
                                    //   /[^a-zA-Z ]/g,
                                    //   ""
                                    // );
                                    setValues((prev) => ({
                                      ...prev,
                                      description: inputValue,
                                    }));
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            <ReCAPTCHA
                              sitekey="6Ldd1eMpAAAAAFmJZSm4ygqwFPCIERv7XTCOU2iE"
                              onChange={handleCaptchaChange}
                              style={{
                                transform: "scale(0.60)",
                                WebkitTransform: "scale(0.60)",
                                transformOrigin: "0 0",
                                WebkitTransformOrigin: "0 0",
                                marginLeft:'25%'
                              }}
                            />
                          </div>
                         
                          <button className="btn-anim" type="submit">
                            {loading ? (
                              <CircularProgress
                                size={21}
                                style={{ color: "white" }}
                              />
                            ) : (
                              "Send Your Quiry"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-primary-2">
                      Register
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
    </RootLayout>
  )
}

export default faqs
