import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="nk-footer pt-4 pt-lg-7 text-white"
      style={{
        background: "#014d40",
      }}
    >
      <div className="section section-top-0">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 col-md-9 me-auto">
              <div className="block-text">
                <Link href="/" className="logo-link mb-2">
                  <img
                    className="logo-img"
                    src="/images/global_logo3.png"
                    alt="Global Algo Trading"
                    style={{ width: "200px" }}
                  />
                </Link>
                <p className="text-" style={{ marginTop: 20 }}>
                  Global Algo Trading offers advanced algorithmic trading
                  solutions designed to empower investors with cutting-edge
                  tools and strategies. Our service combines state-of-the-art
                  technology with expert financial analysis to deliver superior
                  results in today’s dynamic financial markets.
                </p>
                <h4 className="wgs-title overline-title text-white mt-5">
                  Follow Us
                </h4>
                <div className="mt-2 footer-social">
                  <ul className="btn-list btn-list-inline g-1 justify-content-start">
                    <li>
                      <Link
                        className=""
                        style={{ color: "white" }}
                        href="https://wa.me/919900936011"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp size={24} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" text-white"
                        style={{ color: "#C13584" }}
                        href="https://www.instagram.com/globalalgotrading/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={24} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" text-white"
                        href="https://www.facebook.com/globalalgotrading"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook size={24} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
              <div className="wgs">
                <h4 className="wgs-title overline-title text-white mb-3">
                  Company
                </h4>
                <ul className="list gy-2 list-link-base">
                  <li>
                    <Link className="text-white" href="/faqs">
                      FAQ's
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" href="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" href="/terms-condition">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" href="/refund-policy">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4">
              <div className="wgs">
                <h4 className="wgs-title overline-title text-white mb-3">
                  Contacts
                </h4>
                <p>
                  <span className="font-bold">Address :</span>
                  <br />
                  Sy-No.37, Tech 37, Plot Number 2A, Hosur Rd, 2nd Phase,
                  Electronic City, Bengaluru, Karnataka 560100
                </p>
                <p>
                  <span className="font-bold">Email Id :</span>
                  <Link
                    href="mailto:support@globalalgotrading.com"
                    className="link link-info"
                  >
                    support@globalalgotrading.com
                  </Link>
                </p>
                <p>
                  <span className="font-bold">Phone :</span>
                  <Link href="tel:9900936011" className="link link-info">
                    +91 9900936011
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container -mt-2">
        <hr className="border-opacity-25 border-white m-0" />
        <div className="py-5">
          <div className="row">
            <div className="col-md text-center">
              <p className="mb-2 mb-md-0">
                Copyright © 2024{" "}
                <span className="text-info-1">Global Algo Trading</span>. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
