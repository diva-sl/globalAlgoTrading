import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Modal, Menu, Dropdown, Button } from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons"; 
import Login from "./Login"; 

function Header() {
  const [show, setShow] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [notTop, setNotTop] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [isMobile, setIsMobile] = useState(false);  
  useEffect(() => { 
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 5;
      setNotTop(scrollTop > scrollThreshold);
    };

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 992);  
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleProductsHover = (isHovering) => {
    if (!isMobile) {
      setShowProducts(isHovering);
    }
  };

  const toggleProductsMenu = () => {
    if (isMobile) {
      setShowProducts(!showProducts);
    }
  };

  // Functions to open and close the login modal
  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalVisible(false);
  };

  const handleLogout = () => {
    // Clear auth token and update state
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/profile">
          <SettingOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      className={`nk-header-main nk-menu-main will-shrink is-transparent ignore-mask ${
        notTop && "has-fixed"
      }`}
    >
      <div className="nk-shape bg-shape-blur-c ms-n20p mt-n20p start-50 translate-middle-x" />

      <div className="container">
        <div className="nk-header-wrap">
          <div className="nk-header-logo">
            <Link href="/" className="logo-link">
              <div className="logo-wrap">
                <img
                  className="logo-img"
                  src="/images/logo.png"
                  alt="Elite Algo Trading"
                  style={{ width: "200px" }}
                />
              </div>
            </Link>
          </div>
          <div className="nk-header-toggle" onClick={() => setShow(!show)}>
            <button className="btn btn-light btn-icon header-menu-toggle">
              <em className="icon ni ni-menu" />
            </button>
          </div>
          <nav
            className={`nk-header-menu nk-menu ${show && "show1"}`}
            style={{ zIndex: 999 }}
          >
            <ul className="nk-menu-list">
              <li className="nk-menu-item">
                <Link href="/" className="nk-menu-link">
                  <span className="nk-menu-text">Home</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link href="/about" className="nk-menu-link">
                  <span className="nk-menu-text">About Us</span>
                </Link>
              </li>
              <li className="nk-menu-item">
                <Link href="/faqs" className="nk-menu-link">
                  <span className="nk-menu-text">Faq's</span>
                </Link>
              </li>
              <li
                className={`nk-menu-item has-dropdown ${
                  showProducts && "show-submenu"
                }`}
                onMouseEnter={() => handleProductsHover(true)}
                onMouseLeave={() => handleProductsHover(false)}
                onClick={toggleProductsMenu}
              >
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-text">Products</span>
                  <em className="icon ni ni-chevron-down"></em>
                </a>
                <ul
                  className={`nk-menu-dropdown ${
                    showProducts ? "show-dropdown" : ""
                  }`}
                >
                  <li className="nk-menu-item">
                    <Link
                      href="/indianmarketsoftware"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">
                        Indian Market Software
                      </span>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link
                      href="/forexcurrencysoftware"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">
                        Forex Currency Software
                      </span>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link
                      href="/cryptosoftware"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Crypto Software</span>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link
                      href="/commoditysoftware"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Commodity Software</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item">
                <Link href="/contact-us" className="nk-menu-link">
                  <span className="nk-menu-text">Contact Us</span>
                </Link>
              </li>
            </ul>
            <ul className="nk-menu-buttons flex-lg-row-reverse">
              {isLoggedIn ? (
                isMobile ? (
                  <>
                    <li>
                      <Link href="/profile" className="nk-menu-link">
                        <SettingOutlined /> Profile
                      </Link>
                    </li>
                    <li>
                      <a className="nk-menu-link" onClick={handleLogout}>
                        <LogoutOutlined /> Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <Dropdown overlay={userMenu} trigger={["click"]}>
                    <Button
                      icon={<UserOutlined style={{ cursor: "pointer" }} />}
                    />
                  </Dropdown>
                )
              ) : (
                <li>
                  <button
                    className="btn btn-success text-white"
                    onClick={showLoginModal} // Open the login modal on button click
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <Modal
        visible={isLoginModalVisible}
        onCancel={handleLoginCancel}
        footer={null}
      >
        <Login /> 
      </Modal>
    </div>
  );
}

export default Header;
