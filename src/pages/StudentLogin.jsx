import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./StudentLogin.css";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!form.username || !form.password) {
        throw new Error("Please enter both Student ID and Password.");
      }

      await new Promise((resolve) => setTimeout(resolve, 800));

      localStorage.setItem("token", "test_token");
      localStorage.setItem("role", "student");

      navigate("/dashboard");

    } catch (err) {
      alert(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="login-page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="login-card">

        {/* Left Side: Visual / Branding */}
        <div className="login-visual">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>BR School</h1>
            <p>Your journey to excellence starts here.</p>
          </motion.div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Student Illustration"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="login-form-container">
          <header>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Student Login
            </motion.h2>
            <p className="subtitle">Enter your credentials to access your portal</p>
          </header>

          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Student ID</label>
              <motion.input
                id="username"
                name="username"
                type="text"
                placeholder="e.g. BR-12345"
                required
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <motion.input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            <motion.button
              type="submit"
              className="login-btn"
              disabled={loading}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Signing in..." : "Login"}
            </motion.button>

            <button type="button" className="forgot-link">
              Forgot your password?
            </button>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default StudentLogin;