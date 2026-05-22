function Orders() {
  return (
    <>
      <h1 className="app-page-title mb-4">Orders</h1>

      <nav className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
        <a className="flex-sm-fill text-sm-center nav-link active" data-bs-toggle="tab" href="#orders-all">All</a>
        <a className="flex-sm-fill text-sm-center nav-link" data-bs-toggle="tab" href="#orders-pending">Pending</a>
        <a className="flex-sm-fill text-sm-center nav-link" data-bs-toggle="tab" href="#orders-paid">Paid</a>
        <a className="flex-sm-fill text-sm-center nav-link" data-bs-toggle="tab" href="#orders-cancelled">Cancelled</a>
      </nav>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="orders-all">
          <div className="app-card app-card-orders-table shadow-sm mb-5">
            <div className="app-card-body">
              <div className="table-responsive">
                <table className="table app-table-hover mb-0 text-left">
                  <thead>
                    <tr>
                      <th className="cell">Order</th>
                      <th className="cell">Customer</th>
                      <th className="cell">Date</th>
                      <th className="cell">Status</th>
                      <th className="cell">Total</th>
                      <th className="cell"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cell">#15346</td>
                      <td className="cell">John Sanders</td>
                      <td className="cell"><span>17 Oct</span><span className="note"> 2:16 PM</span></td>
                      <td className="cell"><span className="badge bg-success">Paid</span></td>
                      <td className="cell">$259.35</td>
                      <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>
                    <tr>
                      <td className="cell">#15345</td>
                      <td className="cell">Dylan Ambrose</td>
                      <td className="cell"><span>16 Oct</span><span className="note"> 03:16 AM</span></td>
                      <td className="cell"><span className="badge bg-warning">Pending</span></td>
                      <td className="cell">$96.20</td>
                      <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>
                    <tr>
                      <td className="cell">#15342</td>
                      <td className="cell">Reina Brooks</td>
                      <td className="cell"><span>12 Oct</span><span className="note"> 04:23 PM</span></td>
                      <td className="cell"><span className="badge bg-danger">Cancelled</span></td>
                      <td className="cell">$59.00</td>
                      <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders