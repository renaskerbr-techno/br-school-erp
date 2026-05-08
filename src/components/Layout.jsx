import Navbar from "./Navbar";
import Footer from "./Footer";
import AnnouncementBar from "./AnnouncementBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      <AnnouncementBar />
      <Navbar />

      {/* ✅ ONLY ONE OUTLET */}
      <main className="pt-28 flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}