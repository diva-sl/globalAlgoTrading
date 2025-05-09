"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Modal, Menu, Dropdown, Button } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Login from "./Login";
import classNames from "classnames";

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
      setNotTop(window.pageYOffset > 5);
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

  const toggleProductsMenu = () => {
    if (isMobile) setShowProducts(!showProducts);
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/profile">
          <SettingOutlined /> Profile
        </Link>
      </Menu.Item>
      <Menu.Item
        key="logout"
        onClick={() => {
          localStorage.removeItem("authToken");
          setIsLoggedIn(false);
        }}
      >
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      className={classNames(
        "nk-header-main",
        "nk-menu-main",
        "will-shrink",
        "is-transparent",
        "ignore-mask",
        {
          "has-fixed": notTop,
        }
      )}
    >
      <div className="nk-shape bg-shape-blur-c ms-n20p mt-n20p start-50 translate-middle-x" />
      <div className="container">
        <div className="nk-header-wrap">
          {/* Logo */}
          <div className="nk-header-logo">
            <Link href="/" className="logo-link">
              <img
                src="/images/global_logo3.png"
                alt="Global Algo Trading"
                style={{ width: "200px" }}
              />
            </Link>
          </div>

          {/* Toggle Button */}
          <div className="nk-header-toggle" onClick={() => setShow(!show)}>
            <button className="btn btn-light btn-icon header-menu-toggle">
              <em className="icon ni ni-menu" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            className={classNames("nk-header-menu", "nk-menu", { show1: show })}
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

              {/* Products Dropdown */}
              <li
                className={classNames("nk-menu-item", "has-dropdown", {
                  "show-submenu": showProducts,
                })}
                onMouseEnter={() => !isMobile && setShowProducts(true)}
                onMouseLeave={() => !isMobile && setShowProducts(false)}
                onClick={toggleProductsMenu}
              >
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-text">Products</span>
                  <em className="icon ni ni-chevron-down" />
                </a>
                <ul
                  className={classNames("nk-menu-dropdown", {
                    "show-dropdown": showProducts,
                  })}
                >
                  <li className="nk-menu-item">
                    <Link href="/indianmarketsoftware" className="nk-menu-link">
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
                    <Link href="/cryptosoftware" className="nk-menu-link">
                      <span className="nk-menu-text">Crypto Software</span>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link href="/commoditysoftware" className="nk-menu-link">
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

            {/* Auth Buttons */}
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
                      <a
                        className="nk-menu-link"
                        onClick={() => {
                          localStorage.removeItem("authToken");
                          setIsLoggedIn(false);
                        }}
                      >
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
                    onClick={() => setIsLoginModalVisible(true)}
                  >
                    Sign In
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      {/* Login Modal */}
      <Modal
        open={isLoginModalVisible}
        onCancel={() => setIsLoginModalVisible(false)}
        footer={null}
      >
        <Login />
      </Modal>
    </div>
  );
}

export default Header;
