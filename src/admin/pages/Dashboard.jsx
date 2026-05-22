function Dashboard() {
  return (
    <>
      <h1 className="app-page-title">Overview</h1>

      <div className="row g-4 mb-4">
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1">Total Sales</h4>
              <div className="stats-figure">$12,628</div>
              <div className="stats-meta text-success">↑ 20%</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1">Orders</h4>
              <div className="stats-figure">48</div>
              <div className="stats-meta">This month</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1">Customers</h4>
              <div className="stats-figure">23</div>
              <div className="stats-meta">Active</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="app-card app-card-stat shadow-sm h-100">
            <div className="app-card-body p-3 p-lg-4">
              <h4 className="stats-type mb-1">Products</h4>
              <div className="stats-figure">17</div>
              <div className="stats-meta">Active</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard