import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

function Layout({ children }) {
  const [notTop, setNotTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 200;
      setNotTop(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {children}
      <Footer />

      <div className="social-icons">
        <a
          href="https://wa.me/919900936011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon whatsapp blink-animation">
            <FaWhatsapp size={"30px"} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/algotradingelite?igsh=NmpyMWUxbHltNzlk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon instagram blink-animation">
            <FaInstagram size={"30px"} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/share/1XE6niM7pj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon facebook blink-animation">
            <FaFacebook size={"30px"} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Layout;
