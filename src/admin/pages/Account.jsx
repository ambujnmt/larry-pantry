function Account() {
  return (
    <>
      <h1 className="app-page-title">My Account</h1>
      <div className="row gy-4">
        <div className="col-12 col-lg-6">
          <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
            <div className="app-card-header p-3 border-bottom-0">
              <h4 className="app-card-title">Profile</h4>
            </div>
            <div className="app-card-body px-4 w-100">
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label"><strong>Name</strong></div>
                    <div className="item-data">Admin User</div>
                  </div>
                  <div className="col text-end">
                    <a className="btn-sm app-btn-secondary" href="#">Change</a>
                  </div>
                </div>
              </div>
              <div className="item border-bottom py-3">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="item-label"><strong>Email</strong></div>
                    <div className="item-data">restaurantpantryla@gmail.com</div>
                  </div>
                  <div className="col text-end">
                    <a className="btn-sm app-btn-secondary" href="#">Change</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-card-footer p-4 mt-auto">
              <a className="btn app-btn-secondary" href="#">Manage Profile</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account