function Dashboard() {
  return (
    <>
      <h1 className="app-page-title">Overview</h1>

      <div className="row g-4 mb-4">
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100 bg-primary">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1 text-white">Total Users</h4>
              <div className="stats-figure text-white">0</div>
              {/*<div className="stats-meta text-success">↑ 20%</div>*/}
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100 bg-success">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1 text-white">Categories</h4>
              <div className="stats-figure text-white">0</div>
              {/*<div className="stats-meta">This month</div>*/}
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100 bg-info">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1 text-white">Products</h4>
              <div className="stats-figure text-white">0</div>
              {/*<div className="stats-meta">Active</div>*/}
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100 bg-danger">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1 text-white">Orders</h4>
              <div className="stats-figure text-white">0</div>
              {/*<div className="stats-meta">Active</div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard