"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false); 
  const [isResetPassword, setIsResetPassword] = useState(false);
  
  const [timer, setTimer] = useState(0);  
  const [canResend, setCanResend] = useState(true);  

  const [values, setValues] = useState({
    email: "",
    password: "",
    newPassword: "",
    resetToken: "",
  });

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  // Timer useEffect
  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true); // Enable the button once the timer reaches 0
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      Swal.fire({
        title: "Error",
        text: "Email and password are required",
        icon: "error",
      });
      return;
    }

    try {
      setLoading(true);
      const formData = { email: values.email, password: values.password , organization: "67038bd02edf8e22c9d06a69"};

      const res = await axios.post("https://crm-backend-8w9h.onrender.com/customer/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res?.data?.status) {
        localStorage.setItem("authToken",res?.data?.data?.token)
        Swal.fire({
          title: "Success",
          text: res?.data?.message,
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            // window.location.href = "/dashboard"; // Redirect to dashboard
          }
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || "Login failed",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle forgot password form submission
  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!values.email) {
      Swal.fire({
        title: "Error",
        text: "Email is required to reset password",
        icon: "error",
      });
      return;
    } 

    try {
      setLoading(true);
      const res = await axios.post("https://crm-backend-8w9h.onrender.com/customer/forgot-password", { email: values.email ,organization: "67038bd02edf8e22c9d06a69",}, {
        headers: { "Content-Type": "application/json" },
      });

      Swal.fire({
        title: "Success",
        text: res.data.message,
        icon: "success",
      });

      // Start the 2-minute countdown timer
      setCanResend(false); // Disable the resend button
      setTimer(120); // Set the timer to 120 seconds (2 minutes)
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || "Failed to send reset link",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle reset password form submission
  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!values.resetToken || !values.newPassword) {
      Swal.fire({
        title: "Error",
        text: "Both reset token and new password are required",
        icon: "error",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`https://crm-backend-8w9h.onrender.com/customer/reset-password/${values.resetToken}`, {
        newPassword: values.newPassword,
      });

      Swal.fire({
        title: "Success",
        text: res.data.message,
        icon: "success",
      }).then(() => {
        setIsResetPassword(false); // Switch back to login after resetting password
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || "Failed to reset password",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-body p-2">
      {!isForgotPassword && !isResetPassword ? (
        // Login Form
        <form id="loginForm" onSubmit={handleLoginSubmit}>
          <div className="row g-4">
            <div className="col-12">
              <div className="form-group">
                <h3 className="text-dark">Customer Login</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group text-start">
                <label className="form-label" htmlFor="youremail">Your Email</label>
                <div className="form-control-wrap">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    required
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group text-start">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="form-control-wrap">
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    required
                    value={values.password}
                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <button className="btn-anim" type="submit">
              {loading ? <CircularProgress size={21} style={{ color: "white" }} /> : "Login"}
            </button>
            <div className="mt-3 text-center">
              <a href="#" onClick={() => setIsForgotPassword(true)}>Forgot Password?</a>
            </div>
          </div>
        </form>
      ) : isForgotPassword ? (
        // Forgot Password Form
        <form id="forgotPasswordForm" onSubmit={handleForgotPasswordSubmit}>
          <div className="row g-4">
            <div className="col-12">
              <div className="form-group">
                <h3 className="text-dark">Forgot Password</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group text-start">
                <label className="form-label" htmlFor="youremail">Your Email</label>
                <div className="form-control-wrap">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    required
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <button className="btn-anim" type="submit" disabled={!canResend}>
              {loading ? <CircularProgress size={21} style={{ color: "white" }} /> : canResend ? "Send Reset Link" : `Resend in ${timer}s`}
            </button>
            <div className="mt-3 text-center">
              <a href="#" onClick={() => setIsForgotPassword(false)}>Back to Login</a>
            </div>
          </div>
        </form>
      ) : (
        // Reset Password Form
        <form id="resetPasswordForm" onSubmit={handleResetPasswordSubmit}>
          <div className="row g-4">
            <div className="col-12">
              <div className="form-group">
                <h3 className="text-dark">Reset Password</h3>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group text-start">
                <label className="form-label" htmlFor="resetToken">Reset Token</label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    name="resetToken"
                    className="form-control form-control-lg"
                    placeholder="Enter reset token"
                    required
                    value={values.resetToken}
                    onChange={(e) => setValues({ ...values, resetToken: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group text-start">
                <label className="form-label" htmlFor="newPassword">New Password</label>
                <div className="form-control-wrap">
                  <input
                    type="password"
                    name="newPassword"
                    className="form-control form-control-lg"
                    placeholder="Enter new password"
                    required
                    value={values.newPassword}
                    onChange={(e) => setValues({ ...values, newPassword: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <button className="btn-anim" type="submit">
              {loading ? <CircularProgress size={21} style={{ color: "white" }} /> : "Reset Password"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
