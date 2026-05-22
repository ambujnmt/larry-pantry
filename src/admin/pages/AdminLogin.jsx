import { Link } from 'react-router-dom'

function AdminLogin() {
  return (
    <div className="row g-0 app-auth-wrapper">

      {/* Left Side — Form */}
      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
        <div className="d-flex flex-column align-content-end">
          <div className="app-auth-body mx-auto">

            <div className="app-auth-branding mb-4">
              <Link className="app-logo" to="/admin/dashboard">
                <img className="logo-icon me-2" src="/admin-assets/images/app-logo.svg" alt="logo" />
                <span className="logo-text">LARRY PANTRY</span>
              </Link>
            </div>

            <h2 className="auth-heading text-center mb-5">Admin Login</h2>

            <div className="auth-form-container text-start">
              <form className="auth-form login-form">
                <div className="email mb-3">
                  <label className="sr-only" htmlFor="signin-email">Email</label>
                  <input id="signin-email" type="email" className="form-control" placeholder="Email address" required />
                </div>
                <div className="password mb-3">
                  <label className="sr-only" htmlFor="signin-password">Password</label>
                  <input id="signin-password" type="password" className="form-control" placeholder="Password" required />
                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-6">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="RememberPassword" />
                        <label className="form-check-label" htmlFor="RememberPassword">Remember me</label>
                      </div>
                    </div>
                    <div className="col-6 text-end">
                      <Link to="/admin/reset-password">Forgot password?</Link>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">
                    Log In
                  </button>
                </div>
              </form>
            </div>

          </div>

          <footer className="app-auth-footer">
            <div className="container text-center py-3">
              <small className="copyright">© 2026 Larry Pantry Admin</small>
            </div>
          </footer>
        </div>
      </div>

      {/* Right Side — Background */}
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div>
        <div className="auth-background-overlay p-3 p-lg-5">
          <div className="d-flex flex-column align-content-end h-100">
            <div className="h-100"></div>
            <div className="overlay-content p-3 p-lg-4 rounded">
              <h5 className="mb-3 overlay-title">Larry Pantry Admin</h5>
              <div>Manage orders, products and customers.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminLogin