"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
 
import axios from "axios";
import { CircularProgress } from "@mui/material";
 
import AOS from "aos";
import "aos/dist/aos.css";  

export default function Home() {
  const [txt, setTxt] = useState("");
  const toRotate = ["Runs in all Market"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setloading] = useState(false);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const text = "uns in all Market";
  const period = 100;
  const [displayText, setDisplayText] = useState("R");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 700 });  
    const interval = setInterval(() => {
      if (textIndex === text.length) {
        setTextIndex(0);
        setDisplayText("R");
        return;
      }
      // Append one letter from the text to the display text
      setDisplayText((prevText) => prevText + text[textIndex]);
      // Move to the next letter in the text
      setTextIndex((prevIndex) => prevIndex + 1);
    }, period);
    return () => clearInterval(interval);
  }, [textIndex]);
  return (
    <div className="card-body">
             <form
  id="enquiry"
  onSubmit={async (e) => {
    e.preventDefault();

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
      (currentUrl.startsWith("http://") || currentUrl.startsWith("https://"))
    ) {
      updatedUrl = currentUrl.replace(/^(https?:\/\/)/, "www.");
    } else {
      console.log(currentUrl);
    }

    try {
      setloading(true);

      const formData = {
        name: values.name,
        email: values.email,
        phone: values?.phone,
        referredBy: values?.referralId,
        createdBy:"67039a3a49722a0aaa688fae", // Adding Referral ID
        organization: "67038bd02edf8e22c9d06a69", // Organization ID
        domain: updatedUrl.split("/")[0],
      }
      const res = await axios.post(
        "https://crm-backend-8w9h.onrender.com/leads/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-secret": "my_secret", // Add your API secret here
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
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
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
        <h3 className="text-dark">Algo Trading Software</h3>
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
              const sanitizedValue = inputValue.replace(/[^a-zA-Z ]/g, "");
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
    <div className="col-12">
      <div className="form-group text-start">
        <label className="form-label" htmlFor="contactnumber">
          Contact Number
        </label>
        <div className="form-control-wrap">
          <input
            type="text"
            name="phone"
            className="form-control form-control-lg"
            placeholder="Enter phone number"
            required
            value={values?.phone}
            onChange={(e) => {
              const inputValue = e.target.value;
              const sanitizedValue = inputValue.replace(/[^0-9]/g, "");
              const finalValue = sanitizedValue.slice(0, 15);
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

    {/* Referral ID Field */}
    <div className="col-12">
      <div className="form-group text-start">
        <label className="form-label" htmlFor="referralId">
          Referral ID
        </label>
        <div className="form-control-wrap">
          <input
            type="text"
            name="referralId"
            className="form-control form-control-lg"
            placeholder="Enter referral ID"
            value={values?.referralId}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                referralId: e.target.value,
              }))
            }
          />
        </div>
      </div>
    </div>

    <button className="btn-anim" type="submit">
      {loading ? (
        <CircularProgress size={21} style={{ color: "white" }} />
      ) : (
        "Download"
      )}
    </button>
  </div>
</form>
 </div>
  );
}
