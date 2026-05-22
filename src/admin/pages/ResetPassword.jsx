import AuthLayout from '../layouts/AuthLayout'
import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <AuthLayout>
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4">
                <Link className="app-logo" to="/admin/dashboard">
                  <img className="logo-icon me-2" src="/admin-assets/images/app-logo.svg" alt="logo" />
                </Link>
              </div>
              <h2 className="auth-heading text-center mb-4">Password Reset</h2>
              <div className="auth-intro mb-4 text-center">
                Enter your email address below. We'll email you a link to reset your password.
              </div>
              <div className="auth-form-container text-start">
                <form className="auth-form resetpass-form">
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="reg-email">Your Email</label>
                    <input id="reg-email" name="reg-email" type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn app-btn-primary btn-block theme-btn mx-auto">Reset Password</button>
                  </div>
                </form>
                <div className="auth-option text-center pt-5">
                  <Link className="app-link" to="/admin/login">Log in</Link>
                </div>
              </div>
            </div>
            <footer className="app-auth-footer">
              <div className="container text-center py-3">
                <small className="copyright">Larry Pantry Admin Panel</small>
              </div>
            </footer>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div className="auth-background-holder"></div>
          <div className="auth-background-mask"></div>
          <div className="auth-background-overlay p-3 p-lg-5">
            <div className="d-flex flex-column align-content-end h-100">
              <div className="h-100"></div>
              <div className="overlay-content p-3 p-lg-4 rounded">
                <h5 className="mb-3 overlay-title">Larry Pantry Admin</h5>
                <div>Manage your orders, products and customers from here.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ResetPassword