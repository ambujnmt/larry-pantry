import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { adminLogout } from "../../api/admin/auth";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation(); const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("admin_token")
    localStorage.removeItem("admin_user")
    navigate("/admin/login")
    try {
      await adminLogout()
    } catch (err) {
      // already logout
    }
  }
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  const isSubmenuActive = (paths) =>
  paths.some((p) => location.pathname.startsWith(p));

  const pagesActive = isSubmenuActive([
    "/admin/notifications",
    "/admin/account",
    "/admin/settings",
  ]);

  return (
    <div id="app-sidepanel" className={`app-sidepanel ${sidebarOpen ? "sidepanel-visible" : ""}`}>

      {sidebarOpen && (
        <div
          className="sidepanel-drop"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className="sidepanel-inner d-flex flex-column">
        <a href="#" className="sidepanel-close d-xl-none" onClick={(e) => {e.preventDefault(); setSidebarOpen(false);}}>&times;</a>

        {/* Logo */}
        <div className="app-branding">
          <Link className="app-logo" to="/admin/dashboard">
            <img className="logo-icon me-2" src="/admin-assets/images/logo.png" alt="logo"/>
            {/*<span className="logo-text">LARRY PANTRY</span>*/}
          </Link>
        </div>

        {/* Navigation */}
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled">

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/dashboard")}`} to="/admin/dashboard">
                <i className="fa-solid fa-gauge me-2"></i><span className="nav-link-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/account")}`} to="/admin/account">
                <i className="fa-solid fa-cog me-2"></i><span className="nav-link-text">Account</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/customers")}`} to="#">
                <i className="fa-solid fa-users me-2"></i><span className="nav-link-text">Users</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/categories")}`} to="#">
                <i className="fa-solid fa-layer-group me-2"></i><span className="nav-link-text">Categories</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/products")}`} to="#">
                <i className="fa-solid fa-box me-2"></i><span className="nav-link-text">Products</span>
              </Link>
            </li>

            {/*<li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/orders")}`} to="#">
                <i className="fa-solid fa-cart-shopping me-2"></i><span className="nav-link-text">Orders</span>
              </Link>
            </li>*/}

            {/*<li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/account")}`} to="/admin/account">
                <span className="nav-link-text">Account</span>
              </Link>
            </li>*/}

            {/* COLLAPSIBLE MENU FIXED */}
            <li className={`nav-item has-submenu ${isSubmenuActive(["/notifications", "/admin/account", "/settings"]) ? "active" : ""} d-none`}>
              <button
                type="button"
                className="nav-link submenu-toggle w-100 text-start border-0 bg-transparent"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
              >
                <i className="fa-solid fa-file-lines me-2"></i><span className="nav-link-text">Pages</span>
                <span className="submenu-arrow float-end">
                  <i className={`fa-solid ${open ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </span>
              </button>

              {/* SUBMENU */}
              <div className={`submenu collapse ${open || pagesActive ? "show" : ""}`}>
                <ul className="submenu-list list-unstyled">
                  <li className="submenu-item">
                    <Link className={`submenu-link ${isActive("/admin/account")}`} to="/admin/account">Account</Link>
                  </li>
                  <li className="submenu-item">
                    <Link className={`submenu-link ${isActive("/admin/setting")}`} to="/admin/setting">Setting</Link>
                  </li>
                  
                </ul>
              </div>

            </li>

            <button
              type="button"
              className="nav-link border-0 bg-transparent w-100 text-start text-danger"
              onClick={handleLogout}
            >
              <i className="fa-solid fa-right-from-bracket me-2"></i><span className="nav-link-text">Logout</span>
            </button>

          </ul>
        </nav>

      </div>
    </div>
  );
};

export default AdminSidebar;