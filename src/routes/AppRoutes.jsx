import { BrowserRouter, Routes, Route } from "react-router-dom";

import ParentLogin from "../pages/parent/ParentLogin";
import ParentDashboard from "../pages/parent/ParentDashboard";
import ForgotPassword from "../pages/parent/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent/forgot" element={<ForgotPassword />} />

        <Route
          path="/parent/dashboard"
          element={
            <ProtectedRoute>
              <ParentDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;