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
    </div>
  );
}

export default Layout;
