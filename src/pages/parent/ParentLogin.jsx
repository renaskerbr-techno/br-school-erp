import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const ParentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError("");

      const res = await API.post("/auth/login", {
        username,
        password,
      });

      // 🔐 store token
      localStorage.setItem("token", res.data.token);

      // 🚀 redirect
      navigate("/parent/dashboard");

    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Parent Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      {error && <p style={styles.error}>{error}</p>}

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>

      <p onClick={() => navigate("/parent/forgot")} style={styles.link}>
        Forgot Password?
      </p>
    </div>
  );
};

const styles = {
  container: { maxWidth: 300, margin: "auto", marginTop: 100 },
  input: { width: "100%", marginBottom: 10, padding: 8 },
  button: { width: "100%", padding: 10 },
  error: { color: "red" },
  link: { color: "blue", cursor: "pointer", marginTop: 10 },
};

export default ParentLogin;