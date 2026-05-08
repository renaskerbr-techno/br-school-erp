import { useState } from "react";
import API from "../../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  // 📩 Send OTP
  const sendOtp = async () => {
    try {
      await API.post("/auth/send-otp", { email });
      setStep(2);
      setMessage("OTP sent to your email");
    } catch {
      setMessage("Error sending OTP");
    }
  };

  // 🔐 Verify OTP
  const verifyOtp = async () => {
    try {
      await API.post("/auth/verify-otp", { email, otp });
      setStep(3);
      setMessage("OTP verified");
    } catch {
      setMessage("Invalid OTP");
    }
  };

  // 🔄 Reset Password
  const resetPassword = async () => {
    try {
      await API.post("/auth/reset-password", { email, password });
      setMessage("Password updated successfully");
    } catch {
      setMessage("Error updating password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Forgot Password</h2>

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {step === 3 && (
        <>
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={resetPassword}>Reset Password</button>
        </>
      )}

      <p>{message}</p>
    </div>
  );
};

const styles = {
  container: { maxWidth: 300, margin: "auto", marginTop: 100 },
  input: { width: "100%", marginBottom: 10, padding: 8 },
};

export default ForgotPassword;