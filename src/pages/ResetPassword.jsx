"use client"

import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import {Link, useNavigate, useSearchParams} from "react-router-dom"
import LoginPlaceholder from "../assets/assets/frontend_assets/LoginPlaceholder.png"
import { toast } from "react-toastify"

const resetPasswordSchema = Yup.object().shape({
  new_password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState({ message: '', type: '' })
  const [searchParams, setSearchParams] = useSearchParams();
  const token  = searchParams.get("token") || "927491hjdb189ey81sajkdmIWUDN"
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/forgot-password')
    }
  }, [token])

  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_password: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log({ token, ...values })
      setIsLoading(false)
      setNotification({ message: 'Password reset successfully', type: 'success' })
      toast.success('Password reset successfully')
      // Simulate redirect after successful password reset
      setTimeout(() => navigate('/login'), 2000)
    },
  })

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <img
        src={LoginPlaceholder}
        alt="Reset Password background"
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
              <h2 className="text-3xl font-bold text-gray-900">Create new password</h2>
              <p className="mt-2 text-sm text-gray-600">
                Enter your new password and confirm it to reset your account password.
              </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  id="new_password"
                  type="password"
                  {...formik.getFieldProps("new_password")}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.touched.new_password && formik.errors.new_password
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
                  placeholder="Enter new password"
                />
                {formik.touched.new_password && formik.errors.new_password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {formik.errors.new_password}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirm_password"
                  type="password"
                  {...formik.getFieldProps("confirm_password")}
                  className={`mt-1 block w-full rounded-md border ${
                    formik.touched.confirm_password && formik.errors.confirm_password
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white/50`}
                  placeholder="Confirm new password"
                />
                {formik.touched.confirm_password && formik.errors.confirm_password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {formik.errors.confirm_password}
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
                  {isLoading ? "Resetting..." : "Reset Password"}
                </button>
              </motion.div>
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

