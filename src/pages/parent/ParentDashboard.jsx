import { useEffect, useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

const ParentDashboard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/parent/login");
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/parent/dashboard");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDashboard();
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div style={styles.container}>
      <h2>Parent Dashboard</h2>

      <button onClick={logout} style={styles.logout}>
        Logout
      </button>

      {/* 👤 Student Info */}
      <div style={styles.card}>
        <h3>Student</h3>
        <p>{data.student.first_name} {data.student.last_name}</p>
        <p>Class: {data.student.class}</p>
      </div>

      {/* 📊 Attendance */}
      <div style={styles.card}>
        <h3>Attendance</h3>
        {data.attendance.map((a, i) => (
          <p key={i}>{a.date} - {a.status}</p>
        ))}
      </div>

      {/* 📝 Marks */}
      <div style={styles.card}>
        <h3>Marks</h3>
        {data.marks.map((m, i) => (
          <p key={i}>{m.subject}: {m.marks}</p>
        ))}
      </div>

      {/* 💰 Fees */}
      <div style={styles.card}>
        <h3>Fees</h3>
        {data.fees.map((f, i) => (
          <div key={i}>
            <p>Total: {f.total_amount}</p>
            <p>Paid: {f.paid_amount}</p>
            <p>Due: {f.due_amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: 20 },
  card: { border: "1px solid #ccc", padding: 10, marginBottom: 15 },
  logout: { float: "right" },
};

export default ParentDashboard;