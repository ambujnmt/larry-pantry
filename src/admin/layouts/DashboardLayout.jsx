import { useState, useEffect } from "react"
import AdminHeader from "../components/AdminHeader"
import AdminSidebar from "../components/AdminSidebar"
import AdminFooter from "../components/AdminFooter"

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const frontendLinks = document.querySelectorAll('link[rel="stylesheet"]')
    frontendLinks.forEach(link => {
      link.setAttribute('data-disabled', 'true')
      link.disabled = true
    })

    const adminCSS = document.createElement('link')
    adminCSS.rel = 'stylesheet'
    adminCSS.href = '/admin-assets/css/portal.css'
    adminCSS.id = 'admin-portal-css'
    document.head.appendChild(adminCSS)

    const adminFA = document.createElement('script')
    adminFA.src = '/admin-assets/plugins/fontawesome/js/all.min.js'
    adminFA.id = 'admin-fontawesome-js'
    document.head.appendChild(adminFA)

    return () => {
      document.getElementById('admin-portal-css')?.remove()
      document.getElementById('admin-fontawesome-js')?.remove()

      const disabledLinks = document.querySelectorAll('link[data-disabled="true"]')
      disabledLinks.forEach(link => {
        link.disabled = false
        link.removeAttribute('data-disabled')
      })
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
  )
}

export default DashboardLayout