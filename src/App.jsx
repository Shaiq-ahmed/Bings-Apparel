import { useState } from 'react'
import './App.css'
import './animations.css'
import Collection from './pages/Collection'
import Aboutus from './pages/Aboutus'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Contactus from './pages/Contactus'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {ToastContainer} from "react-toastify"
import ScrollToTop from './utils/ScrollToTop'
import 'react-toastify/dist/ReactToastify.css';
import OrderDetails from './pages/OrderDetails'
import ForgotPassword from './pages/ForgotPassword'
import EmailVerified from './pages/EmailVerified'
import ResetPassword from './pages/ResetPassword'
import SignUp from './pages/SignUp'
import ResetPasswordMessage from './pages/ResetPasswordMessage'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import AdminLayout from './components/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProductManagement from './pages/admin/ProductManagement'
import OrderManagement from './pages/admin/OrderManagement'
import CustomerManagement from './pages/admin/CustomerManagement'
import InventoryManagement from './pages/admin/InventoryManagement'
import CategoryManagement from './pages/admin/CategoryManagement'
import PaymentManagement from './pages/admin/PaymentManagement'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import { LoadingProvider } from './context/LoadingContext'
import PromotionalPopup from './components/PromotionalPopup'
import FloatingActionButton from './components/FloatingActionButton'
import CursorFollower from './components/CursorFollower'
import PageTransition from './components/PageTransition'
import {BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

function App({ searchVisible, setSearchVisible }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className='min-h-screen flex flex-col'>
      <ToastContainer/>
      {!isAdminRoute && <Navbar searchVisible={searchVisible} setSearchVisible={setSearchVisible} />}
      <ScrollToTop/>

      {/* Main content area */}
      <main className='flex-1'>
        {/* <PageTransition> */}
          <Routes>
            <Route path="/" element={<Home searchVisible={searchVisible} />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password-sent" element={<ResetPasswordMessage />} />
            <Route path="/verify-email" element={<EmailVerified />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:orderId" element={<OrderDetails />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute requireAdmin={true}><AdminLayout /></ProtectedRoute>}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="categories" element={<CategoryManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="customers" element={<CustomerManagement />} />
              <Route path="inventory" element={<InventoryManagement />} />
              <Route path="payments" element={<PaymentManagement />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        {/* </PageTransition> */}
      </main>

      {!isAdminRoute && <Footer/>}
      {!isAdminRoute && <FloatingActionButton />}
      {!isAdminRoute && <CursorFollower />}
      {!isAdminRoute && <PromotionalPopup />}
    </div>
  );
}


export default App
