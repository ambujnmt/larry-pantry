import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./customer/components/Header";
import Footer from "./customer/components/Footer";
import Home from "./customer/pages/Home";
import Contact from "./customer/pages/Contact";
import About from "./customer/pages/About";
import Categories from "./customer/pages/Categories";
/*----- Admin Panel ------*/
import AdminLogin from "./admin/pages/AdminLogin";
import AuthLayout from "./admin/layouts/AuthLayout";
import DashboardLayout from "./admin/layouts/DashboardLayout";
import Dashboard from "./admin/pages/Dashboard";
import Orders from "./admin/pages/Orders";
import Account from "./admin/pages/Account";
/*------------------------*/

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Customer Routes - Header Footer ke saath */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="contact" element={<><Header /><Contact /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/categories" element={<><Header /><Categories /><Footer /></>} />

        {/* Admin Routes - Header Footer NAHI */}
        <Route path="/admin"       element={<AuthLayout><AdminLogin /></AuthLayout>} />
        <Route path="/admin/login" element={<AuthLayout><AdminLogin /></AuthLayout>} />
        {/* ADMIN DASHBOARD PAGES */}
        <Route path="/admin/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>}/>

        <Route path="/admin/orders" element={<DashboardLayout><Orders /></DashboardLayout>}/>

        <Route path="/admin/account" element={<DashboardLayout><Account /></DashboardLayout>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
