import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

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
            <img
              className="logo-icon me-2"
              src="/admin-assets/images/app-logo.svg"
              alt="logo"
            />
            <span className="logo-text">LARRY PANTRY</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
          <ul className="app-menu list-unstyled">

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/dashboard")}`} to="/admin/dashboard">
                <span className="nav-link-text">Dashboard</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/orders")}`} to="/admin/orders">
                <span className="nav-link-text">Orders</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/products")}`} to="/admin/products">
                <span className="nav-link-text">Products</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/categories")}`} to="/admin/categories">
                <span className="nav-link-text">Categories</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/customers")}`} to="/admin/customers">
                <span className="nav-link-text">Customers</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${isActive("/admin/account")}`} to="/admin/account">
                <span className="nav-link-text">Account</span>
              </Link>
            </li>

            {/* COLLAPSIBLE MENU FIXED */}
            <li className="nav-item has-submenu">

              <button
                type="button"
                className="nav-link submenu-toggle w-100 text-start border-0 bg-transparent"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
              >
                <span className="nav-link-text">Pages</span>

                <span className="submenu-arrow float-end">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>

              {/* SUBMENU */}
              <div className={`submenu collapse ${open ? "show" : ""}`}>
                <ul className="submenu-list list-unstyled">
                  <li className="submenu-item">
                    <Link className="submenu-link" to="/notifications">
                      Notifications
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link className="submenu-link" to="/account">
                      Account
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link className="submenu-link" to="/settings">
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>

            </li>

          </ul>
        </nav>

      </div>
    </div>
  );
};

export default AdminSidebar;