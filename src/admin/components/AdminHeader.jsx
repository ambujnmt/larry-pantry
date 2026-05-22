import { Link } from "react-router-dom";

const AdminHeader = ({ setSidebarOpen }) => {
  return (
    <header className="app-header fixed-top">
      <div className="app-header-inner">
        <div className="container-fluid py-2">
          <div className="app-header-content">
            <div className="row justify-content-between align-items-center">

              {/* Mobile Menu Button */}
              <div className="col-auto">
                <button
                  id="sidepanel-toggler"
                  className="sidepanel-toggler d-inline-block d-xl-none border-0 bg-transparent"
                  onClick={() => setSidebarOpen(prev => !prev)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M4 7h22M4 15h22M4 23h22"
                    />
                  </svg>
                </button>
              </div>

              {/* Search */}
              <div className="app-search-box col">
                <form className="app-search-form">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control search-input"
                  />
                  <button
                    type="submit"
                    className="btn search-btn btn-primary"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>

              {/* Right Menu */}
              <div className="app-utilities col-auto">

                {/* Notification */}
                <div className="app-utility-item me-3">
                  <Link to="#" title="Notifications">
                    <i className="fa-solid fa-bell"></i>
                  </Link>
                </div>

                {/* Settings */}
                <div className="app-utility-item me-3">
                  <Link to="/admin/settings">
                    <i className="fa-solid fa-gear"></i>
                  </Link>
                </div>

                {/* User Dropdown */}
                <div className="dropdown app-user-dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="/admin-assets/images/user.png"
                      alt="User"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </a>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/admin/account">
                        Account
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/admin/settings">
                        Settings
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/admin/login">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;