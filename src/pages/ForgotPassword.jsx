"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import {Link, useNavigate} from "react-router-dom"
import LoginPlaceholder from "../assets/assets/frontend_assets/LoginPlaceholder.png"
import { toast } from "react-toastify"

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
})

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [notification, setNotification] = useState({ message: '', type: '' })

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(values)
      setIsLoading(false)
      // Simulate successful password reset request
      // setNotification({ message: 'Password reset link sent to your email', type: 'success' })
      toast.success('Password reset link sent to your email')
      navigate(`/reset-password-sent?email=${values.email}`)
    },
  })

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <img
        src={LoginPlaceholder}
        alt="Forgot Password background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-30"
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md p-8 shadow-xl rounded-lg w-full"
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Reset your password</h2>
              <p className="mt-2 text-sm text-gray-600">
                We'll send you a link to reset your password
              </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
                  placeholder="your email address"
                />
                {formik.touched.email && formik.errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {formik.errors.email}
                  </motion.p>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-md bg-black py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isLoading ? "Sending..." : "Recover"}
                </button>
              </motion.div>

              <p className="text-center text-sm text-gray-600">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="font-medium text-gray-700 hover:text-gray-900"
                >
                  Back to Login
                </Link>
              </p>
            </form>
          </motion.div>
          {/* {notification.message && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-md ${
                notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {notification.message}
            </motion.div>
          )} */}
        </div>
      </div>
    </div>
  )
}

