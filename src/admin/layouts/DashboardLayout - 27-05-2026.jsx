import { useState, useEffect } from "react"
import AdminHeader from "../components/AdminHeader"
import AdminSidebar from "../components/AdminSidebar"
import AdminFooter from "../components/AdminFooter"

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Frontend CSS off, Admin CSS + FA on
    document.querySelectorAll('link[rel="stylesheet"]:not(#admin-portal-css):not(#admin-fa-css)').forEach(l => l.disabled = true)
    document.getElementById('admin-portal-css').disabled = false
    document.getElementById('admin-fa-css').disabled = false

    return () => {
      // Wapas frontend par — admin CSS + FA off
      document.querySelectorAll('link[rel="stylesheet"]').forEach(l => l.disabled = false)
      document.getElementById('admin-portal-css').disabled = true
      document.getElementById('admin-fa-css').disabled = true
    }
  }, [])

  return (
    <div className="app">
      <style>{`
        @media (max-width: 1199px) {
          .app-sidepanel {
            transform: translateX(-100%); transition: all 0.3s ease;
          }
          .app-sidepanel.sidepanel-visible {
            transform: translateX(0); z-index: 1;
          }
        }
        .app-header {background: #0e606c;}
        .app-sidepanel .app-nav-main {background: #0e606c;}
        .app-nav .nav-item {background: #0e606c; color: #ffffff;}
        .app-nav .nav-link {color: #ffffff;}
        .app-nav .nav-link:hover {color: #0f3825; background: #edfdf6 !important;}
        .app-sidepanel .sidepanel-inner {background-color: #0e606c;}
        .app-nav .submenu-link {color: #ffffff;}
        .app-nav .submenu-link:hover {color: #0f3825; background: #edfdf6 !important;}
        .app-logo {padding: 2px; background: #ffffff; display: flex;}
      `}</style>

      <AdminHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      {/*<AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />*/}
      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            {children}
          </div>
        </div>
      </div>

      <AdminFooter />
    </div>
  )
}

export default DashboardLayout