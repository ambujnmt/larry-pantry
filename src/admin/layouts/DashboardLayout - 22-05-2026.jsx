import { useState } from "react";
import { useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import AdminFooter from "../components/AdminFooter";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "/admin-assets/css/portal.css";
    link.id = "admin-css";

    document.head.appendChild(link);

    return () => {
      document.getElementById("admin-css")?.remove();
    };
  }, []);
  return (
    <div className="app">
      <style>{`
      @media (max-width: 1199px) {

        .app-sidepanel {
          transform: translateX(-100%);
          transition: all 0.3s ease;
        }

        .app-sidepanel.sidepanel-visible {
          transform: translateX(0);
        }

      }
      `}</style>
      <AdminHeader setSidebarOpen={setSidebarOpen} />
      
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            {children}
          </div>
        </div>
      </div>

      <AdminFooter />
    </div>
  );
}

export default DashboardLayout;