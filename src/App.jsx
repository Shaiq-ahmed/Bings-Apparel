import { useState } from 'react'
import './App.css'
import './animations.css'
import {BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

function AppContent({ searchVisible, setSearchVisible }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className='min-h-screen flex flex-col'>
      <ToastContainer/>
      {!isAdminRoute && <Navbar searchVisible={searchVisible} setSearchVisible={setSearchVisible} />}
      <ScrollToTop/>

      {/* Main content area */}
      <main className='flex-1'>
//         <PageTransition>
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
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="customers" element={<CustomerManagement />} />
              <Route path="inventory" element={<InventoryManagement />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
//         </PageTransition>
      </main>

      {!isAdminRoute && <Footer/>}
      {!isAdminRoute && <FloatingActionButton />}
      {!isAdminRoute && <CursorFollower />}
      {!isAdminRoute && <PromotionalPopup />}
    </div>
  );
}


export default App
