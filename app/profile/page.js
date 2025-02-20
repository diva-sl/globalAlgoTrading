'use client'
import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Drawer,
} from "antd";
import {
  MenuOutlined,
  UserOutlined,
  DashboardOutlined,
  RobotOutlined,
  WalletOutlined,
  LogoutOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import useWindowDimensions from "./useDimensions"; // Custom hook to get window dimensions
import Bot from "./Bot";
import Referral from "./Referral";
import Earnings from "./Earnings";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

export default function ProfilePage() {
  const [collapsed, setCollapsed] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("dashboard"); // State for selected menu

  const { width } = useWindowDimensions(); // Custom hook to get window width

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        Swal.fire({
          title: "Error",
          text: "No authorization token found",
          icon: "error",
        });
        return;
      }

      try {
        const res = await axios.get("https://crm-backend-8w9h.onrender.com/customer/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(res.data.data);
        setLoading(false);
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message || "Failed to fetch profile data",
          icon: "error",
        });
      }
    };

    fetchProfileData();
  }, []);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    if (typeof window !== "undefined") {
      // code that uses window goes here
      window.location.href = "/login";
    }
  };

  const handleMenuClick = (menuKey) => {
    setSelectedMenu(menuKey); // Set selected menu
    if (width <= 768) {
      setVisible(false); // Close the drawer in mobile view
    }
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return (
          <Card title="Customer Profile" bordered={false}>
            <Text strong>Welcome, {userData.fullName}</Text>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Gender: {userData.gender}</p>
            <p>PAN Number: {userData.panNumber}</p>
            <p>Aadhar Number: {userData.aadharNumber}</p>
            <p>
              Primary Address: {userData.primaryAddress?.street},{" "}
              {userData.primaryAddress?.city}, {userData.primaryAddress?.state},{" "}
              {userData.primaryAddress?.zipCode}
            </p>
            <p>
              Billing Address: {userData.billingAddress?.street},{" "}
              {userData.billingAddress?.city}, {userData.billingAddress?.state},{" "}
              {userData.billingAddress?.zipCode}
            </p>
          </Card>
        );
      case "bots":
        return <Bot />;
      case "referrals":
        return <Referral />;
      case "earnings":
        return <Earnings />;
      default:
        return null;
    }
  };

  const sidebarContent = (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["dashboard"]}
      selectedKeys={[selectedMenu]}
      onClick={(e) => handleMenuClick(e.key)}
    >
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="bots" icon={<RobotOutlined />}>
        Bots
      </Menu.Item>
      <Menu.Item key="referrals" icon={<UserOutlined />}>
        Referrals
      </Menu.Item>
      <Menu.Item key="earnings" icon={<WalletOutlined />}>
        Earnings
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {width > 768 ? (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          {sidebarContent}
        </Sider>
      ) : (
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={toggleSidebar}
          visible={visible}
          bodyStyle={{ padding: 0, backgroundColor: "#001529" }} // Dark background for the sidebar
          width={250} // Ensures consistent width for mobile view
        >
          <Button
            icon={<CloseOutlined />}
            onClick={toggleSidebar}
            className="close-btn"
            style={{ backgroundColor: "transparent", color: "white", border: "none", position: "absolute", top: 15, right: 15 }}
          />
          {sidebarContent}
        </Drawer>
      )}

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <Button
              type="link"
              icon={<MenuOutlined />}
              onClick={toggleSidebar}
              className="menu-toggle mt-3"
            />
            <div className="header-user-info">
              <Avatar icon={<UserOutlined />} />
              <span className="user-name">{userData.fullName || "Admin User"}</span>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "16px" }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>{renderContent()}</Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
