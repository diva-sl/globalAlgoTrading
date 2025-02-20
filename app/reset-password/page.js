'use client';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CircularProgress } from "@mui/material";

const ResetPasswordPage = () => {
 // Capture the token from the URL
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Passwords do not match!',
        icon: 'error',
      });
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`https://crm-backend-8w9h.onrender.com/customer/verify-otp`, {
        otp ,
        newPassword ,
        organization:"67038bd02edf8e22c9d06a69"
      });

      Swal.fire({
        title: 'Success',
        text: res.data.message,
        icon: 'success',
      }).then(() => {
        router.push('/login');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Failed to reset password',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='' style={{backgroundImage:'url(/images/bg.jpg)' ,display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>

    <div className="container  card p-4 ">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='mt-2'>Enter OTP</label>
          <input
            type="text"
            className="form-control"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='mt-2'>New Password</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className='mt-2'>Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          {loading ? <CircularProgress size={21} style={{ color: "white" }} /> : "Reset Password"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ResetPasswordPage;
